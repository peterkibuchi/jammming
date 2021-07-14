import React, { Component } from 'react';
import './TrackList.css';
import { Track } from '../Track/Track';

export class TrackList extends Component {
    render() {
        // tracksArray is an array of json objects representing tracks
        const tracksArray = this.props.tracks;
        const tracks = tracksArray.map((track) => {
            return (
                <Track
                    key={track.id}
                    track={track}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={this.props.isRemoval}
                />
            );
        });

        return (
            <div className="TrackList">
                {tracks}
            </div>
        );
    }
}
