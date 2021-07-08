import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter a song, album, or artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}
