# react-howler-player

[![release](https://badgen.net/npm/v/react-howler-player)](https://www.npmjs.com/package/react-howler-player)
[![open-issues](https://badgen.net/github/open-issues/binodswain/react-howler-player)](https://github.com/binodswain/react-howler-player/issues)
[![license](https://badgen.net/github/license/binodswain/react-howler-player)](https://github.com/binodswain/react-howler-player/blob/master/LICENSE)
[![Test Status](https://github.com/binodswain/react-howler-player/workflows/Test/badge.svg)](https://github.com/binodswain/react-howler-player/actions?query=workflow%3ATest)
[![Build Status](https://github.com/binodswain/react-howler-player/workflows/Build/badge.svg)](https://github.com/binodswain/react-howler-player/actions?query=workflow%3ABuild)

This is a simple, accessible audio player built using Reactjs and Howlerjs.
[view demo](https://binodswain.github.io/react-howler-player/)

## [howler.js](https://howlerjs.com/)

Javascript audio library for the modern web. howler.js makes working with audio in JavaScript easy and reliable across all platforms.

## Usage

```bash
npm install --save howler react-howler-player
```

```jsx
import React, { Component } from "react";
import Player from "react-howler-player";

const App = () => {
    return (
        <div>
            <Player
                src={["audio file URL"]}
                isDark={true}
                // onTimeUpdate={timeUpdate}
            />
        </div>
    );
};
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

## Props passed to component

| attribute     |   type    | optional | details                                                                                      |
| ------------- | :-------: | :------: | :------------------------------------------------------------------------------------------- |
| src           |   Array   |  false   | Source of audio playback                                                                     |
| isDark        |  Boolean  |   true   | Flag to switch between light and dark theme                                                  |
| onTimeUpdate  | function  |   true   | On playback progress, timestamp obj is passed to the function                                |
| loadingText   | function  |   true   | Text displayed while preparing the playback.(default val: 'Preparing')                       |
| preparingComp | JSX Comp. |   true   | Component to display instead of loading text. `(preparingComp || loadingText)`               |
| speedPanel    |  string   |   true   | Position of audio playback rate list. ('top', 'bottom', 'relative'). defaultVal : 'relative' |

## Features:

-   Clean: uses semantic elements for UI.
-   Controls: supports Keyboard events/ controls.
-   Audio Format: supports a wide range of audio format.

## License

MIT © [binodswain](https://github.com/binodswain)
