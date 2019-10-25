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
        src: [],
        progressValue: 0,
        currentPos: '0:00'
    }

    readyToPlay = () => {
        const { playerState, sound } = this.state;
        if (playerState === STATE.PLAYING) { return }
        console.log("playback ready");
        this.setState({
            playerState: STATE.READY,
            duration: this.formatTime(Math.round(sound.duration()))
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

        sound.on('play', this.step);

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

    /**
     * Format the time from seconds to M:SS.
     * @param  {Number} secs Seconds to format.
     * @return {String}      Formatted time.
     */
    formatTime = (secs) => {
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = (secs - minutes * 60) || 0;

        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    step = () => {
        var self = this;

        // Get the Howl we want to manipulate.
        const { sound } = this.state

        // Determine our current seek position.
        var seek = sound.seek() || 0;
        // timer.innerHTML = self.formatTime(Math.round(seek));
        let percentage = (((seek / sound.duration()) * 100) || 0);
        
        this.setState({
            progressValue: Math.round(percentage),
            currentPos: this.formatTime(Math.round(seek))
        })
        
        // progress.style.width = (((seek / sound.duration()) * 100) || 0) + '%';

        // If the sound is still playing, continue stepping.
        if (sound.playing()) {
            requestAnimationFrame(this.step);
        }
    }

    render() {
        const {
            playerState,
            progressValue,
            duration,
            currentPos
        } = this.state;
        let btnFunction = undefined;

        let btnText = '...'


        if (playerState === STATE.READY) {
            btnFunction = this.playbackPlay;
            btnText = 'play'
        } else if (playerState === STATE.PLAYING) {
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
                        min="0" max="100"
                        step="0.1"
                        value={progressValue}
                        autoComplete="off"
                        />
                </div>
                <div className="audio-duration">
                    {currentPos}/{duration || '...'}
                </div>
                <div className="volume-control">

                    <input type="range" className="audio-bar" name="" id=""/>
                    
                </div>
                <button className="settings-button">
                    set
                </button>
            </div>
        </div>
    }
}
