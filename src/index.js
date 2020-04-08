import React, { Component } from "react";
import { Howl } from "howler";
import PropTypes from "prop-types";
import { isEqual } from "./func";
import Prepare from "./prepare";
import keyboardEvents from "./events";
import style from "./styles.scss";

const STATE = {
    PREPARE: "PREPARE",
    READY: "READY",
    ENDED: "ENDED",
    PAUSE: "PAUSE",
    PLAYING: "PLAYING",
};

class PlayerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: null,
            playerState: STATE.PREPARE,
            src: [],
            progressValue: 0,
            currentPos: "0:00",
            volume: 70,
            isMute: false,
        };
    }

    stepInterval = null;

    ref = React.createRef();

    toggleMute = () => {
        this.setState((prevState) => {
            const { volume, sound } = prevState;

            if (volume == 0 || !prevState.isMute) {
                sound.mute(true);
                return { isMute: true };
            }
            sound.mute(false);
            return { isMute: !prevState.isMute };
        });
    };

    readyToPlay = () => {
        const { playerState, sound } = this.state;
        if (playerState === STATE.PLAYING) {
            return;
        }
        this.setState({
            playerState: STATE.READY,
            duration: this.formatTime(Math.round(sound.duration())),
        });
    };

    setupPlayer = () => {
        this.destroySound();
        const { src, format = ["wav", "mp3", "flac", "aac"] } = this.props;

        if (!src) {
            return;
        }
        let sound = new Howl({
            src,
            format,
            html5: true,
        });

        sound.once("load", this.readyToPlay);

        sound.on("end", this.playbackEnded);

        sound.on("play", () => {
            this.stepInterval = setInterval(this.step, 15);
        });

        this.setState({
            sound,
            playerState: STATE.PREPARE,
            progressValue: 0,
            currentPos: "0:00",
            src,
        });
    };

    playbackEnded = () => {
        const { onTimeUpdate } = this.props;
        const { duration } = this.state;
        if (onTimeUpdate) {
            let playerState = {
                currentTime: this.state.sound.duration(),
                progressPercent: 100,
            };
            onTimeUpdate(playerState);
        }
        clearInterval(this.stepInterval);
        this.setState({
            playerState: STATE.ENDED,
            progressValue: 100,
            currentPos: duration,
        });
    };

    playbackPlay = () => {
        const { sound } = this.state;
        sound.play();
        this.setState({
            playerState: STATE.PLAYING,
        });
    };

    playbackPause = () => {
        const { sound } = this.state;
        sound.pause();
        clearInterval(this.stepInterval);
        this.setState({
            playerState: STATE.PAUSE,
        });
    };

    componentDidMount() {
        this.setupPlayer();
    }

    /**
     * Format the time from seconds to M:SS.
     * @param  {Number} secs Seconds to format.
     * @return {String}      Formatted time.
     */
    formatTime = (secs) => {
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = secs - minutes * 60 || 0;

        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    };

    /**
     * Seek to a new position in the currently playing track.
     * @variable  {Number} per Percentage through the song to skip.
     */
    seek = (e) => {
        const { sound } = this.state;
        let per = e.target.value / 100;
        sound.seek(sound.duration() * per);
        let seek = sound.seek() || 0;
        this.setState({
            progressValue: e.target.value,
            currentPos: this.formatTime(Math.round(seek)),
        });
    };

    step = () => {
        let { sound } = this.state;
        const { onTimeUpdate } = this.props;

        var seek = sound.seek() || 0;

        let percentage = (seek / sound.duration()) * 100 || 0;

        // If the sound is still playing, continue stepping.
        if (sound.playing()) {
            this.setState({
                progressValue: percentage.toFixed(3),
                currentPos: this.formatTime(Math.round(seek)),
                playerState: STATE.PLAYING,
            });
            if (onTimeUpdate) {
                let playerState = {
                    currentTime: seek,
                    progressPercent: Number(percentage.toFixed(3)),
                };
                onTimeUpdate(playerState);
            }
        }
    };

    changeVolume = (volume) => {
        this.state.sound.volume(Math.round(volume) / 100);

        this.setState({
            volume,
            isMute: Number(volume) === 0,
        });
    };

    volumeUp = () => {
        this.setState((prevState) => {
            let volume = prevState.volume;
            volume += 5;
            if (volume > 100) {
                volume = 100;
            }
            this.state.sound.volume(Math.round(volume) / 100);
            return { volume, isMute: false };
        });
    };

    volumeDown = () => {
        this.setState((prevState) => {
            let volume = prevState.volume;
            let isMute = prevState.isMute;
            volume -= 5;
            if (volume < 0) {
                volume = 0;
                isMute = true;
            }
            this.state.sound.volume(Math.round(volume) / 100);
            return {
                volume,
                isMute,
            };
        });
    };

    seekForward = () => {
        const { sound } = this.state;
        let currentPos = sound.seek();
        let duration = sound.duration();
        let forward = duration / 20 < 10 ? 10 : duration / 20;
        if (currentPos + forward > duration) {
            return;
        }

        if (duration - currentPos < forward && forward > 50) {
            forward = 10;
        }
        sound.seek(currentPos + forward);
        let percentage = ((currentPos + forward) / sound.duration()) * 100 || 0;
        this.setState({
            progressValue: Math.round(percentage),
            currentPos: this.formatTime(Math.round(currentPos + forward)),
        });
    };

    seekBackward = () => {
        const { sound } = this.state;
        let currentPos = sound.seek();
        let duration = sound.duration();
        let backward = duration / 20 < 10 ? 10 : duration / 20;
        if (currentPos - backward < 0) {
            return;
        }

        if (currentPos < backward && backward > 50) {
            backward = 10;
        }
        sound.seek(currentPos - backward);

        let percentage = ((currentPos - backward) / sound.duration()) * 100 || 0;
        this.setState({
            progressValue: Math.round(percentage),
            currentPos: this.formatTime(Math.round(currentPos - backward)),
        });
    };

    keyPress = (event) => {
        const { sound, playerState, isMute } = this.state;
        const code = event.keyCode ? event.keyCode : event.which;

        if (keyboardEvents.keyCodes[code] === "tab") {
            return;
        }
        event.preventDefault();
        event.stopPropagation();

        switch (keyboardEvents.keyCodes[code]) {
            case "space":
            case "return":
                let focusedEle = document.activeElement;
                if (focusedEle.name === "volume") {
                    if (isMute) {
                        sound.mute(false);
                    } else {
                        sound.mute(true);
                    }
                    this.setState({ isMute: !this.state.isMute });
                    break;
                }
                if (playerState === STATE.PLAYING) {
                    sound.pause();
                    this.setState({ playerState: STATE.PAUSE });
                } else if (
                    playerState === STATE.READY ||
                    playerState === STATE.PAUSE ||
                    playerState === STATE.ENDED
                ) {
                    sound.play();
                    this.setState({ playerState: STATE.PLAYING });
                }
                break;
            case "m":
                if (isMute) {
                    sound.mute(false);
                } else {
                    sound.mute(true);
                }
                this.setState({ isMute: !this.state.isMute });
                break;
            case "arrowUp":
                this.volumeUp();
                break;
            case "arrowDown":
                this.volumeDown();
                break;
            case "arrowRight":
                this.seekForward();
                break;
            case "arrowLeft":
                this.seekBackward();
                break;
            case "tab":
                break;
            default:
                break;
        }
    };

    componentWillUnmount() {
        this.destroySound();
    }

    destroySound = () => {
        const { sound } = this.state;
        clearInterval(this.stepInterval);
        if (sound) {
            sound.off();
            sound.stop();
        }
    };

    UNSAFE_componentWillReceiveProps(props) {
        const { src } = this.state;

        if (!isEqual(src, props.src)) {
            this.setupPlayer();
        }
    }

    render() {
        const { playerState, progressValue, duration, currentPos, volume, isMute } = this.state;

        const { isDark = false } = this.props;

        if (playerState === STATE.PREPARE) {
            return <Prepare {...this.props} />;
        }

        let className = [
            style["player"],
            style["r-howler"],
            style[isDark ? "dark-themed" : "light-themed"],
        ].join(" ");
        let btnFunction = undefined;
        let btnAttrs = {};

        if (
            playerState === STATE.READY ||
            playerState === STATE.PAUSE ||
            playerState === STATE.ENDED
        ) {
            btnFunction = this.playbackPlay;
            btnAttrs = {
                "aria-label": "Play",
                id: "rh-player-play",
            };
        } else if (playerState === STATE.PLAYING) {
            btnFunction = this.playbackPause;
            btnAttrs = {
                "aria-label": "Pause",
                id: "rh-player-pause",
            };
        }

        const currentPosRound = Math.round(progressValue);

        return (
            <div
                className={className}
                onKeyPress={(e) => this.keyPress(e)}
                onKeyDown={(e) => this.keyPress(e)}
                id="rh-player-main"
                ref={this.ref}
            >
                <div hidden>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <symbol id="r-howl-airplay">
                            <path d="M16 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H3V3h12v8h-2v2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></path>
                            <path d="M4 17h10l-5-6z"></path>
                        </symbol>
                        <symbol id="r-howl-captions-off">
                            <path
                                d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z"
                                fillRule="evenodd"
                                fillOpacity=".5"
                            ></path>
                        </symbol>
                        <symbol id="r-howl-captions-on">
                            <path
                                d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z"
                                fillRule="evenodd"
                            ></path>
                        </symbol>
                        <symbol id="r-howl-download">
                            <path d="M9 13c.3 0 .5-.1.7-.3L15.4 7 14 5.6l-4 4V1H8v8.6l-4-4L2.6 7l5.7 5.7c.2.2.4.3.7.3zm-7 2h14v2H2z"></path>
                        </symbol>
                        <symbol id="r-howl-enter-fullscreen">
                            <path d="M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z"></path>
                        </symbol>
                        <symbol id="r-howl-exit-fullscreen">
                            <path d="M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z"></path>
                        </symbol>
                        <symbol id="r-howl-fast-forward">
                            <path d="M7.875 7.171L0 1v16l7.875-6.171V17L18 9 7.875 1z"></path>
                        </symbol>
                        <symbol id="r-howl-logo-vimeo">
                            <path d="M17 5.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C5 10.9 4.4 6 3 6c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3z"></path>
                        </symbol>
                        <symbol id="r-howl-logo-youtube">
                            <path d="M16.8 5.8c-.2-1.3-.8-2.2-2.2-2.4C12.4 3 9 3 9 3s-3.4 0-5.6.4C2 3.6 1.3 4.5 1.2 5.8 1 7.1 1 9 1 9s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4C5.6 15 9 15 9 15s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2zM7 12V6l5 3-5 3z"></path>
                        </symbol>
                        <symbol id="r-howl-muted">
                            <path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path>
                        </symbol>
                        <symbol id="r-howl-pause">
                            <path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm6 0c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"></path>
                        </symbol>
                        <symbol id="r-howl-pip">
                            <path d="M13.293 3.293L7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z"></path>
                            <path d="M13 15H3V5h5V3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6h-2v5z"></path>
                        </symbol>
                        <symbol id="r-howl-play">
                            <path d="M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"></path>
                        </symbol>
                        <symbol id="r-howl-restart">
                            <path d="M9.7 1.2l.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7z"></path>
                        </symbol>
                        <symbol id="r-howl-rewind">
                            <path d="M10.125 1L0 9l10.125 8v-6.171L18 17V1l-7.875 6.171z"></path>
                        </symbol>
                        <symbol id="r-howl-settings">
                            <path d="M16.135 7.784a2 2 0 0 1-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094a2 2 0 0 1-2.969-1.23C10.065 1.258 9.669 1 9.219 1h-.438c-.45 0-.845.258-.997.865a2 2 0 0 1-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 0 1-1.23 2.969C1.26 7.935 1 8.33 1 8.781v.438c0 .45.258.845.865.997a2 2 0 0 1 1.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 0 1 2.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 0 1 2.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.781.094-1.316a2 2 0 0 1 1.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997zM9 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                        </symbol>
                        <symbol id="r-howl-volume">
                            <path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"></path>
                            <path d="M11.282 5.282a.909.909 0 0 0 0 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 0 0 0 1.316c.145.145.636.262 1.018.156a.725.725 0 0 0 .298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 0 0-1.316 0zm-7.496.726H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path>
                        </symbol>
                    </svg>
                </div>
                <div className={style["player-controls"]}>
                    <button type="button" {...btnAttrs} onClick={btnFunction}>
                        <svg role="presentation" className={style["icon"]}>
                            <use
                                xlinkHref={
                                    playerState === STATE.PLAYING ? "#r-howl-pause" : "#r-howl-play"
                                }
                            ></use>
                        </svg>
                    </button>
                    <div className={style["progress-bar"]}>
                        <input
                            type="range"
                            id="rh-player-media-progress"
                            className={style["player-progress"]}
                            step="0.01"
                            min="0"
                            max="100"
                            value={progressValue}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={currentPosRound}
                            aria-valuetext={`${currentPos} of ${duration}, ${currentPosRound} percentage complete`}
                            role="slider"
                            style={{
                                "--progress-value": `${progressValue}%`,
                            }}
                            autoComplete="off"
                            onChange={this.seek}
                        />
                    </div>
                    <div className={style["audio-duration"]}>
                        {currentPos}{" "}
                        <span className={style["duration"]}>/ {duration || "..."}</span>
                    </div>
                    <div className={style["volume-control"]}>
                        <button
                            type="button"
                            onClick={this.toggleMute}
                            id="rh-player-volume"
                            name="volume"
                            aria-label={isMute ? "Unmute" : "Mute"}
                        >
                            <svg role="presentation" className={style["icon"]}>
                                <use xlinkHref={isMute ? "#r-howl-muted" : "#r-howl-volume"}></use>
                            </svg>
                        </button>
                        <input
                            type="range"
                            id="rh-player-volume-slider"
                            className={style["audio-bar"]}
                            style={{
                                "--progress-value": `${isMute ? 0 : volume}%`,
                            }}
                            min="0"
                            max="100"
                            step="0.01"
                            value={isMute ? 0 : volume}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={isMute ? 0 : volume}
                            role="slider"
                            aria-label="volume"
                            aria-valuetext={isMute ? "Muted" : `${volume}%`}
                            onChange={(e) => {
                                this.changeVolume(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

PlayerComponent.propTypes = {
    src: PropTypes.array.isRequired,
    format: PropTypes.array,
    loadingText: PropTypes.string,
    isDark: PropTypes.bool,
    onTimeUpdate: PropTypes.func,
};

let rootComponent;

if (typeof window !== "undefined") {
    rootComponent = PlayerComponent;
}

export default rootComponent;
