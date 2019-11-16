import React, { Component, PureComponent } from 'react';
import Player from "react-howler-player";

export default class App extends PureComponent {
    state = {}
    onChange = (event) => {
        if (!event.target.files[0]) {
            return
        }
        
        let file_path = URL.createObjectURL(event.target.files[0]);

        const {
            type,
            name
        } = event.target.files[0];

        this.setState((prevState, props) => ({
            file_path,
            type,
            name
        }));
    }

    timeUpdate = (attrs) => {
        // console.log(attrs);
    }

    removeAudio = (e) => {
        e.preventDefault();
        this.setState({
            file_path: null,
            type: null,
            name: null
        })
    }

    render() {
        const { file_path, name } = this.state;
        return (
            <div>
                <div className="playerlist">
                    <h3>Audio from remote url</h3>
                    <Player
                        src={[
                            'https://testbucket1mmmm.s3.ap-south-1.amazonaws.com/TULSI+2020+For+The+Country+We+Love+-+Tulsi+Gabbard.mp3'
                        ]}   
                        onTimeUpdate={this.timeUpdate}
                    />
                </div>
                
                <div>
                    <h3>Audio from local file</h3>
                    <div className="form-element">
                        <input type="file" 
                            className="file-input" 
                            id="file-input" 
                            name="audio_file" 
                            accept="audio/*" 
                            onChange={(e) => this.onChange(e)}
                            id="audio-file"
                            hidden
                        />
                        <label htmlFor="audio-file">
                            <div className="form-label">
                                {name || 'Select an audio file'} 
                            </div>

                            {file_path ? 
                                <div className="icon-close" onClick={this.removeAudio}>
                                    <i className="material-icons">
                                        close
                                    </i>
                                </div>
                                :null
                            }
                        </label>
                    </div>
                    {file_path ? 
                        <Player
                            src={[file_path]}
                            format={['wav', 'mp3']}
                            onTimeUpdate={this.timeUpdate}
                        /> : null
                    }
                </div>
                
            </div>
        )
    }
}
