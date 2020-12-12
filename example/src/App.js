import React, { PureComponent } from "react";
import Player from "react-howler-player";

function Loading() {
    return (
        <div>
            <h4>text from loading component</h4>
        </div>
    );
}

export default class App extends PureComponent {
    state = {
        audio: null,
        dark: false,
    };
    onChange = (event) => {
        console.log(`[onChange]`, event);
        if (!event.target.files[0]) {
            return;
        }

        let file_path = URL.createObjectURL(event.target.files[0]);

        const { type, name } = event.target.files[0];

        this.setState(() => ({
            file_path,
            type,
            name,
        }));
    };

    timeUpdate = (attrs) => {
        // console.log(attrs);
    };

    removeAudio = (e) => {
        e.preventDefault();
        this.setState({
            file_path: null,
            type: null,
            name: null,
        });
    };

    change = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    onPlayerReady = (data) => {
        this.setState({ audio: data.audio });
    };

    toggleDarkMode = () => {
        this.setState({
            dark: !this.state.dark,
        });
    };
    render() {
        const { file_path, name, audio } = this.state;
        console.log(audio);

        return (
            <div>
                <h1>
                    react-howler-player
                    <br />
                    example
                </h1>
                <div className="playerlist">
                    <h3>1. Audio from remote url</h3>
                    <button onClick={this.toggleDarkMode}>
                        toggle Dark Mode
                    </button>
                    <h4>default profile</h4>
                    <Player
                        src={[
                            "https://github.com/binodswain/react-howler-player/raw/develop/example/audio_file.mp3",
                        ]}
                        onTimeUpdate={this.timeUpdate}
                        preparingComp={<Loading />}
                        speedPanel={"top"}
                        isDark={this.state.dark}
                        profile="generic"
                    />

                    <h4>top_progress profile</h4>
                    <Player
                        src={[
                            "https://github.com/binodswain/react-howler-player/raw/develop/example/audio_file.mp3",
                        ]}
                        speedPanel={"bottom"}
                        onTimeUpdate={this.timeUpdate}
                        isDark={this.state.dark}
                        onLoad={(data) => console.log(data)}
                        profile="top_progress"
                    />

                    <h4>minimal profile</h4>
                    <Player
                        src={[
                            "https://github.com/binodswain/react-howler-player/raw/develop/example/audio_file.mp3",
                        ]}
                        speedPanel={"bottom"}
                        onTimeUpdate={this.timeUpdate}
                        profile="minimal"
                        isDark={this.state.dark}
                        onLoad={this.onPlayerReady}
                    />
                    <button
                        onClick={() => {
                            audio && audio.play();
                        }}
                    >
                        Play
                    </button>
                    <button
                        onClick={() => {
                            audio && audio.pause();
                        }}
                    >
                        Pause
                    </button>
                    <p>
                        Source:
                        https://github.com/binodswain/react-howler-player/raw/develop/example/audio_file.mp3
                    </p>
                </div>

                <div hidden>
                    <h3>2. Audio from local file</h3>
                    <div className="form-element">
                        <input
                            type="file"
                            className="file-input"
                            id="audio_file"
                            name="audio_file"
                            accept="audio/*"
                            onChange={this.onChange}
                            hidden
                        />
                        <label htmlFor="audio-file">
                            <div className="form-label">{name || "Select an audio file"}</div>

                            {file_path ? (
                                <div className="icon-close" onClick={this.removeAudio}>
                                    <i className="material-icons">close</i>
                                </div>
                            ) : null}
                        </label>
                    </div>
                    {file_path ? (
                        <Player
                            src={[file_path]}
                            format={["wav", "mp3"]}
                            onTimeUpdate={this.timeUpdate}
                        />
                    ) : null}
                </div>
            </div>
        );
    }
}
