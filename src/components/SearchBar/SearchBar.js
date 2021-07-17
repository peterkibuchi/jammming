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