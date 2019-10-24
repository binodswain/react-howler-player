import React, { Component } from 'react';

import Player from "react-howler-player";

// let src = [
//   'https://bitfinex-api-data1.s3.ap-south-1.amazonaws.com/TULSI+2020+For+The+Country+We+Love+-+Tulsi+Gabbard.mp3',
//   'https://bitfinex-api-data1.s3.ap-south-1.amazonaws.com/TULSI+2020+For+The+Country+We+Love+-+Tulsi+Gabbard.wav',
//   'https://bitfinex-api-data1.s3.ap-south-1.amazonaws.com/TULSI+2020+For+The+Country+We+Love+-+Tulsi+Gabbard.flac',
//   'https://bitfinex-api-data1.s3.ap-south-1.amazonaws.com/TULSI+2020+For+The+Country+We+Love+-+Tulsi+Gabbard.aac'
// ];

export default class App extends Component {
  render() {
    return (
      <div>
        <Player
          src={[
            'https://testbucket1mmmm.s3.ap-south-1.amazonaws.com/TULSI+2020+For+The+Country+We+Love+-+Tulsi+Gabbard.mp3'
          ]}
        />
      </div>
    )
  }
}
