import React, { Component } from 'react';
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
    
    static propTypes = {
        src: PropTypes.string,
        loadingText: PropTypes.string,
        isDark: PropTypes.bool
    };

    state = {
        sound: null,
        playerState: STATE.PREPARE,
        src: [],
        progressValue: 0,
        currentPos: '0:00',
        volume: 70,
        isMute: false
    }

    toggleMute = () => {
        this.setState(prevState => {
            const {
                volume
            } = prevState;

            if (volume == 0 || !prevState.isMute) {
                Howler.volume(0)
                return { isMute: true };    
            }
            Howler.volume(Math.round(volume) / 100)
            return { isMute: !prevState.isMute };
        });
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
            src
        } = this.props;
        if (!src) {
            return;
        }
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

    changeVolume = (volume) => {
        Howler.volume(Math.round(volume) / 100)
        
        this.setState({
            volume,
            isMute: volume==0
        })
    }

    render() {
        const {
            playerState,
            progressValue,
            duration,
            currentPos,
            volume,
            isMute
        } = this.state;

        const {
            loadingText,
            isDark = false
        } = this.props;

        if (playerState === STATE.PREPARE) {
            return <Prepare
                isDark={isDark}
                loadingText={loadingText} />
        }

        let className = [
            "player", "r-howler",
            isDark ? "dark-themed" : "light-themed"
        ].join(" ");

        return <div className={className}>
            <div hidden>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <symbol id="r-howl-airplay"><path d="M16 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H3V3h12v8h-2v2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></path><path d="M4 17h10l-5-6z"></path></symbol>
                    <symbol id="r-howl-captions-off"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fillRule="evenodd" fillOpacity=".5"></path></symbol>
                    <symbol id="r-howl-captions-on"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fillRule="evenodd"></path></symbol>
                    <symbol id="r-howl-download"><path d="M9 13c.3 0 .5-.1.7-.3L15.4 7 14 5.6l-4 4V1H8v8.6l-4-4L2.6 7l5.7 5.7c.2.2.4.3.7.3zm-7 2h14v2H2z"></path></symbol>
                    <symbol id="r-howl-enter-fullscreen"><path d="M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z"></path></symbol>
                    <symbol id="r-howl-exit-fullscreen"><path d="M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z"></path></symbol>
                    <symbol id="r-howl-fast-forward"><path d="M7.875 7.171L0 1v16l7.875-6.171V17L18 9 7.875 1z"></path></symbol>
                    <symbol id="r-howl-logo-vimeo"><path d="M17 5.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C5 10.9 4.4 6 3 6c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3z"></path></symbol>
                    <symbol id="r-howl-logo-youtube"><path d="M16.8 5.8c-.2-1.3-.8-2.2-2.2-2.4C12.4 3 9 3 9 3s-3.4 0-5.6.4C2 3.6 1.3 4.5 1.2 5.8 1 7.1 1 9 1 9s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4C5.6 15 9 15 9 15s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2zM7 12V6l5 3-5 3z"></path></symbol>
                    <symbol id="r-howl-muted"><path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></symbol>
                    <symbol id="r-howl-pause"><path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm6 0c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"></path></symbol>
                    <symbol id="r-howl-pip"><path d="M13.293 3.293L7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z"></path><path d="M13 15H3V5h5V3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6h-2v5z"></path></symbol>
                    <symbol id="r-howl-play"><path d="M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"></path></symbol>
                    <symbol id="r-howl-restart"><path d="M9.7 1.2l.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7z"></path></symbol>
                    <symbol id="r-howl-rewind"><path d="M10.125 1L0 9l10.125 8v-6.171L18 17V1l-7.875 6.171z"></path></symbol>
                    <symbol id="r-howl-settings"><path d="M16.135 7.784a2 2 0 0 1-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094a2 2 0 0 1-2.969-1.23C10.065 1.258 9.669 1 9.219 1h-.438c-.45 0-.845.258-.997.865a2 2 0 0 1-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 0 1-1.23 2.969C1.26 7.935 1 8.33 1 8.781v.438c0 .45.258.845.865.997a2 2 0 0 1 1.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 0 1 2.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 0 1 2.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.781.094-1.316a2 2 0 0 1 1.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997zM9 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></symbol>
                    <symbol id="r-howl-volume"><path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"></path><path d="M11.282 5.282a.909.909 0 0 0 0 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 0 0 0 1.316c.145.145.636.262 1.018.156a.725.725 0 0 0 .298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 0 0-1.316 0zm-7.496.726H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></symbol>
                </svg>
            </div>
            <div className="player-controls">
                {(playerState === STATE.READY || playerState === STATE.PAUSE) ? 
                    <button
                        // paused="true"
                        // className="playButton"
                        onClick={this.playbackPlay}
                    >
                        <svg role="presentation" className="icon">
                            <use xlinkHref="#r-howl-play"></use>
                        </svg>
                    </button>
                        : null
                }
                
                {playerState === STATE.PLAYING ? 
                    <button
                        // className="playButton"
                        onClick={this.playbackPause}
                    >
                        <svg role="presentation" className="icon">
                            <use xlinkHref="#r-howl-pause"></use>
                        </svg>
                    </button>
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
                    {currentPos} <span className="duration">/ {duration || '...'}</span>
                </div>
                <div className="volume-control">
                    <button onClick={this.toggleMute}>
                        <svg role="presentation" className="icon">
                            <use xlinkHref={isMute ? "#r-howl-muted": "#r-howl-volume"}></use>
                        </svg>
                    </button>
                    <input type="range" min="0" max="100"
                        step="0.01" className="audio-bar" name="" id="" value={isMute ? 0 : volume} onChange={(e) => {
                        this.changeVolume(e.target.value)
                    }}/>
                    
                </div>
            </div>
        </div>
    }
}
