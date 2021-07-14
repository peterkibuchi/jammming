import React, { Component } from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                {id: 293902, name: "Trees", artist: "Twenty One Pilots", album: "Vessel"},
                {id: 318494, name: "Taxi Cab", artist: "Twenty One Pilots", album: "Twenty One Pilots"},
                {id: 747388, name: "Mulberry Street", artist: "Twenty One Pilots", album: "Scaled and Icy"},
                {id: 948743, name: "Ride", artist: "Twenty One Pilots", album: "Blurryface"},
            ],
            playlistName: "My Playlist",
            playlistTracks: [
                {id: 293902, name: "Trees", artist: "Twenty One Pilots", album: "Vessel"},
                {id: 948743, name: "Ride", artist: "Twenty One Pilots", album: "Blurryface"},
            ],
        };

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
    }

    updatePlaylistName(name) {
        this.setState({playlistName: name});
    }

    addTrack(track) {
        const playlistTracks = this.state.playlistTracks;

        if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        } else {
            playlistTracks.push(track);
            this.setState({playlistTracks: playlistTracks});
        }
    }

    removeTrack(track) {
        let playlistTracks = this.state.playlistTracks;

        playlistTracks = playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
        this.setState({playlistTracks: playlistTracks});
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">

                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults
                            searchResults={this.state.searchResults}
                            onAdd={this.addTrack}
                        />
                        <Playlist
                            playlistName={this.state.playlistName} 
                            playlistTracks={this.state.playlistTracks}
                            onRemove={this.removeTrack}
                            onNameChange={this.updatePlaylistName}
                        />
                    </div>

                </div>
            </div>
        );
    }
}