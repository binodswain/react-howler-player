import React, { Component, Fragment } from 'react';
import {Howl, Howler} from 'howler';
import PropTypes from 'prop-types';
import './styles.scss';

const STATE = {
    READY: 'READY',
    ENDED: 'ENDED',
    PAUSE: 'PAUSE',
    PLAYING: 'PLAYING',
}
export default class PlayerComponent extends Component {
    
    state = {
        sound: null,
        playerState: 'PAUSE',
        src: []
    }

    readyToPlay = () => {
        const { playerState } = this.state;
        if (playerState === STATE.PLAYING) { return }
        console.log("playback ready");
        this.setState({
            playerState: STATE.READY
        });
    }

    playbackEnded = () => {
        console.log("playback ended");
        
        this.setState({
            playerState: STATE.ENDED
        });
    }

    playbackPlay = () => {
        const { sound } = this.state;
        console.log("playback play");
        this.setState({
            playerState: STATE.PLAYING
        }, () => {
            sound.play();
        })
    }

    playbackPause = () => {
        const { sound } = this.state;
        console.log("playback pause");
        sound.pause();
        this.setState({
            playerState: STATE.PAUSE
        })
    }

    componentDidMount() {
        const {
            src = ['ss.mp3']
        } = this.props;
        let sound = new Howl({
            src
        });
        // Clear listener after first call.
        sound.once('load', this.readyToPlay);

        sound.on('end', this.playbackEnded);

        this.setState({
            sound
        })
    }

    // setButtonFunction = (playerState) => {
    //     let btnFunction = undefined;
    //     if (playerState===STATE.READY) {
    //         btnFunction = this.playbackPlay
    //     } else if (playerState===STATE.PLAYING) {
    //         btnFunction = this.playbackPause
    //     }
    //     return btnFunction;
    // }

    render() {
        const {
            playerState
        } = this.state;
        let btnFunction = undefined;

        let btnText = ''

        if (playerState===STATE.READY) {
            btnFunction = this.playbackPlay;
            btnText = 'play'
        } else if (playerState===STATE.PLAYING) {
            btnFunction = this.playbackPause;
            btnText = 'pause'
        }

        return <div className="player r-howler">
            <div className="player-controls">
                <button
                    className="player-button"
                    disabled={playerState !== STATE.READY}
                    onClick={()=>btnFunction()}
                >
                    {btnText}
                </button>
                <div className="progress-bar">
                    <input type="range" 
                        className="player-progress" 
                        name="" 
                        id=""
                        min="0" max="100"
                        step="0.1"
                        autoComplete="off"
                        />
                </div>
                <div className="audio-duration">
                    03:00
                </div>
                <div className="volume-control">
                    <div className="volume-button">
                        vb
                    </div>
                    <input type="range" className="audio-bar" name="" id=""/>
                    
                </div>
                <button className="settings-button">
                    set
                </button>
            </div>
        </div>
    }
}
