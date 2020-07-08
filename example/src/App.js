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
    state = {};
    onChange = (event) => {
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

    render() {
        const { file_path, name } = this.state;
        return (
            <div>
                <h1>
                    react-howler-player
                    <br />
                    example
                </h1>
                <div className="playerlist">
                    <h3>1. Audio from remote url</h3>

                    <Player
                        src={[
                            "https://github.com/binodswain/react-howler-player/raw/develop/example/audio_file.mp3",
                        ]}
                        onTimeUpdate={this.timeUpdate}
                        preparingComp={<Loading />}
                        speedPanel={"top"}
                        profile="generic"
                        />
                    <Player
                        src={[
                            "https://github.com/binodswain/react-howler-player/raw/develop/example/audio_file.mp3",
                        ]}
                        speedPanel={"bottom"}
                        onTimeUpdate={this.timeUpdate}
                        // isDark={true}
                        onLoad={(data)=>console.log(data)}
                        profile="top_progress"
                    />
                    <Player
                        src={[
                            "https://github.com/binodswain/react-howler-player/raw/develop/example/audio_file.mp3",
                        ]}
                        speedPanel={"bottom"}
                        onTimeUpdate={this.timeUpdate}
                        onLoad={(data)=>console.log(data)}
                        profile="minimal"
                    />
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
                            id="file-input"
                            name="audio_file"
                            accept="audio/*"
                            onChange={(e) => this.onChange(e)}
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
