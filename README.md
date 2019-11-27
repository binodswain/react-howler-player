# react-howler-player
This is a simple, accessible audio player built using Reactjs and Howlerjs.
Checkout the demo page [WIP]

## [howler.js](https://howlerjs.com/)
Javascript audio library for the modern web. howler.js makes working with audio in JavaScript easy and reliable across all platforms.

## Usage
```bash
npm install --save react-howler-player
```
```jsx
import React, { Component } from 'react';
import Player from "react-howler-player";

const App = () => {
    return <div>
        <Player
            src={['audio file URL']}
        />
    </div>
}
```
## Demo
```bash
git clone git@github.com:binodswain/react-howler-player.git
cd react-howler-player/example
npm i
npm start
```
This will start a React app (bootstrapped with create-react-app) with multiple player instances.
One player instance with remote URL and one with local file.

## Features:
- Clean: uses semantic elements for UI. 
- Controls: supports Keyboard events/ controls.
- Speed: adjust playback speed based on requirement.
- Audio Format: supports wide range of audio format.

## License
MIT © [binodswain](https://github.com/binodswain)