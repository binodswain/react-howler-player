import React, { Component, Fragment } from 'react';
import {Howl, Howler} from 'howler';
import PropTypes from 'prop-types';
import Prepare from "./prepare";
import './styles.scss';

const STATE = {
    PREPARE: 'PREPARE',
    READY: 'READY',
    ENDED: 'ENDED',
    PAUSE: 'PAUSE',
    PLAYING: 'PLAYING',
}

export default class PlayerComponent extends Component {
    
    state = {
        sound: null,
        playerState: STATE.PREPARE,
        src: [],
        progressValue: 0,
        currentPos: '0:00',
        volume: 50
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
        sound.play();
        this.setState({
            playerState: STATE.PLAYING,
            sound
        })
    }

    playbackPause = () => {
        const { sound } = this.state;
        console.log("playback pause");
        sound.pause();
        this.setState({
            playerState: STATE.PAUSE,
            sound
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

    /**
     * Seek to a new position in the currently playing track.
     * @variable  {Number} per Percentage through the song to skip.
     */
    seek = (e) => {
        const { sound } = this.state;
        let per = Math.ceil(e.target.value) / 100;
        sound.seek(sound.duration() * per);
        let seek = sound.seek() || 0;
        let percentage = (((seek / sound.duration()) * 100) || 0);
        this.setState({
            sound,
            progressValue: Math.round(percentage),
            currentPos: this.formatTime(Math.round(seek)),
        })
    }

    step = () => {
        // Get the Howl we want to manipulate.
        const { sound } = this.state

        // Determine our current seek position.
        var seek = sound.seek() || 0;

        let percentage = (((seek / sound.duration()) * 100) || 0);

        // progress.style.width = (((seek / sound.duration()) * 100) || 0) + '%';

        // If the sound is still playing, continue stepping.
        if (sound.playing()) {
            this.setState({
                progressValue: Math.round(percentage),
                currentPos: this.formatTime(Math.round(seek)),
                playerState: STATE.PLAYING
            })
            requestAnimationFrame(this.step);
        } else {
            this.setState({
                progressValue: Math.round(percentage),
                currentPos: this.formatTime(Math.round(seek)),
                playerState: STATE.PAUSE
            })
        }
    }

    changeVolume = (volume, isMute = false) => {
        console.log(Math.round(volume)/100);
        
        Howler.volume(Math.round(volume)/100)
        this.setState({
            volume
        })
    }

    render() {
        const {
            playerState,
            progressValue,
            duration,
            currentPos,
            volume,
            isDark = true
        } = this.state;

        if (playerState === STATE.PREPARE) {
            return <Prepare isDark={isDark}/>
        }

        let className = [
            "player", "r-howler",
            isDark ? "dark-themed" : "light-themed"
        ].join(" ");

        return <div className={className}>
            <div className="player-controls">
                {(playerState === STATE.READY || playerState === STATE.PAUSE) ? 
                    <button
                        paused="true"
                        className="playButton"
                        onClick={this.playbackPlay}
                    />
                        : null
                }

                {playerState === STATE.PLAYING ? 
                    <button
                        className="playButton"
                        onClick={this.playbackPause}
                    />
                    : null
                }

                <div className="progress-bar">
                    <input type="range" 
                        className="player-progress" 
                        min="0" max="100"
                        step="0.01"
                        value={progressValue}
                        autoComplete="off"
                        onChange={this.seek}
                    />
                    
                </div>
                <div className="audio-duration">
                    {currentPos}<span className="duration">/{duration || '...'}</span>
                </div>
                <div className="volume-control">
                    <button className="muteButton" muted="true">                        
                    </button>
                    <input type="range" min="0" max="100"
                        step="0.01" className="audio-bar" name="" id="" value={volume} onChange={(e) => {
                        this.changeVolume(e.target.value)
                    }}/>
                    
                </div>
            </div>
        </div>
    }
}
