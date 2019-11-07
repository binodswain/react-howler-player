import React, { Component } from 'react';
import Player from "react-howler-player";

export default class App extends Component {
    state = {}
    onChange = (event) => {
        let file_path = URL.createObjectURL(event.target.files[0])
        if (!event.target.files[0]) {
            return
        }
        const {
            type,
            name
        } = event.target.files[0];

        console.log("file name : ", name);
        
        this.setState((prevState, props) => ({
            file_path,
            type,
            name
        }));
    }
  
  render() {
    const {file_path} = this.state
    return (
        <div>
            <input type="file" className="file-input" id="file-input" name="audio_file" accept="audio/*" onChange={(e)=>this.onChange(e)} />
            <div className="playerlist">
                <Player
                    src={[
                        'https://testbucket1mmmm.s3.ap-south-1.amazonaws.com/TULSI+2020+For+The+Country+We+Love+-+Tulsi+Gabbard.mp3'
                    ]}    
                />
            
                {file_path ? 
                    <Player
                        src={[file_path]}
                        format={['wav','mp3']}
                    /> : null
                }
            </div>
        </div>
    )
  }
}
