import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(event) {
        let newQuery = event.target.value;
        this.setState({query: newQuery});
    }

    search() {
        this.props.onSearch(this.state.query);
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="description">
                    <p>
                        Welcome. Jammming is a website that allows you to search the Spotify library, 
                        create a custom playlist, name it, and save it to your Spotify account.
                    </p>
                    <p>
                        To function, the app will require you to log in to your Spotify account, after which Jammming 
                        will request permission to act on your behalf. You can revoke this permission at any time at 
                        <a href="https://www.spotify.com/account/apps/" target="_blank" rel="noopener noreferrer"> spotify.com/account</a>.
                    </p>
                    <p>
                        To get started, simply search for music content of your choice. The 
                        application will take care of the rest. If at any point the website 
                        becomes unresponsive, simply reload the page. Enjoy.
                    </p>
                </div>

                <input
                    placeholder="Enter a song, album, or artist"
                    onChange={this.handleTermChange}
                />

                <button className="SearchButton" onClick={this.search}>
                    SEARCH
                </button>
            </div>
        );
    }
}