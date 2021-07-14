import React, { Component } from 'react';
import './Track.css';

export class Track extends Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    renderAction() {
        const add = <button class="Track-action" onClick={this.addTrack}>+</button>;
        const remove = <button class="Track-action" onClick={this.removeTrack}>—</button>;

        return (this.props.isRemoval) ? remove : add;
    }

    render() {
        const track = this.props.track;

        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{track.name}</h3>
                    <p>{track.artist} | {track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}
