const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectURI = "http://localhost:3000/";
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // Check for access token and expiry duration in the url
        const url = window.location.href;
        const accessTokenMatch = url.match(/access_token=([^&]*)/);
        const expiryMatch = url.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiryMatch) {
            accessToken = accessTokenMatch[1];
            const expiry = Number(expiryMatch[1]);

            // Clears the parameters from the URL, so the app doesn’t try grabbing
            // the access token after it has expired. Instead, we grab a new one.
            window.setTimeout(() => accessToken = '', expiry * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken;
        } else {
            // Redirects user to a login page, after which they grant permissions to the app
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token&scope=playlist-modify-private`;
            window.location = accessURL;
        }
    },

    search(query) {
        const accessToken = Spotify.getAccessToken();

        return (
            fetch(
                `https://api.spotify.com/v1/search?type=track&q=${query}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            ).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                if (!jsonResponse.tracks) {
                    return [];
                }

                // maps the converted JSON to an array of track objects and returns it
                return jsonResponse.tracks.items.map((track) => {
                    return {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    };
                });
            })
        );
    },

    savePlaylist(name, trackURIs) {
        if (!name || !trackURIs) {
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = {
            Authorization: `Bearer ${accessToken}`,
        };
        let userID;

        return (
            fetch(
                "https://api.spotify.com/v1/me",
                {
                    headers: headers,
                }
            ).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                userID = jsonResponse.id;

                return (
                    fetch(
                        `https://api.spotify.com/v1/users/${userID}/playlists`,
                        {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify({
                                name: name,
                                public: false,
                            })
                        }
                    )
                );
            }).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                const playlistID = jsonResponse.id;

                return fetch(
                    `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
                    {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify({
                            uris: trackURIs,
                        }),
                    }
                );
            })
        );
    }
};

export default Spotify;
