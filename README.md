# Turing Machine Simulator Application

A simulation of the theoretical Turing machine designed by Alan Turing. Using ionic 3

**This project was made for my university math project, yes math project**


## Table of Contents
- [App Preview](#app-preview)
- [Getting Started](#getting-started)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


  ## App Preview

  ### [Turing Machine](https://github.com/julescript/turing-ionic.git/src/pages/home)

  | GIF  | INITIAL STATE  |
  | -----------------| -----|
  | ![GIF](/demo/turing-machine-demo.gif) | ![INITIAL STATE](/demo/turing-machine-screenshot-1.png) |

The console shows all the actions the machine took with a timestamp of that action
You can use the keyboard to  place any letter you want and move with the , and . keys (< >)
R to reset
H for Halt state
Or you can use the built in controls from the bottom bar and can access the addition feature to see it in action

| Console  | Controls  |
| -----------------| -----|
| ![Console](/demo/turing-machine-screenshot-2.png) | ![Controls](/demo/turing-machine-screenshot-3.png) |


## Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
