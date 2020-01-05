# react-howler-player
[![release](https://badgen.net/npm/v/react-howler-player)](https://www.npmjs.com/package/react-howler-player)
[![issues](https://badgen.net/github/issues/binodswain/react-howler-player)](https://github.com/binodswain/react-howler-player/issues)
[![license](https://badgen.net/github/license/binodswain/react-howler-player)](https://github.com/binodswain/react-howler-player/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/binodswain/react-howler-player.svg?branch=master)](https://travis-ci.com/binodswain/react-howler-player)

This is a simple, accessible audio player built using Reactjs and Howlerjs.
[view demo](https://binodswain.github.io/react-howler-player/)

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
## Example
```bash
git clone git@github.com:binodswain/react-howler-player.git
cd react-howler-player/example
npm i
npm start
```
This will start a React app (bootstrapped with create-react-app) with multiple player instances.
One player instance with remote URL and one with local file.

## Screenshot

![Screenshot 1](/example/react-howler-player.png?raw=true "player")


## Features:
- Clean: uses semantic elements for UI. 
- Controls: supports Keyboard events/ controls.
- Speed: adjust playback speed based on requirement.
- Audio Format: supports wide range of audio format.

## License
MIT © [binodswain](https://github.com/binodswain)
