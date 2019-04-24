# 🎨 EWC Color
[![NPM version](https://img.shields.io/npm/v/ewc-color.svg?maxAge=3600)](https://www.npmjs.com/package/ewc-color)
[![NPM downloads](https://img.shields.io/npm/dt/ewc-color.svg?maxAge=3600)](https://www.npmjs.com/package/ewc-color)
[![Build status](https://travis-ci.org/lolPants/ewc-color.svg)](https://travis-ci.org/lolPants/ewc-color)
[![Dependencies](https://img.shields.io/david/lolpants/ewc-color.svg?maxAge=3600)](https://david-dm.org/lolpants/ewc-color)
[![Coverage Status](https://coveralls.io/repos/github/lolPants/ewc-color/badge.svg?branch=master)](https://coveralls.io/github/lolPants/ewc-color?branch=master)

##### Convert a Hex string to an ABGR number. Useful for [ewc](https://www.npmjs.com/package/ewc).

## 💾 Installation
The package is on the NPM registry as `ewc-color`. Simply install it with your NPM client of choice.

## 🔧 Usage
First, import the module:
```js
const { convert } = require('ewc-color')
```

`convert()` takes a hex string in short (`#fff`), RGB (`#ffffff`) or RGBA (`#ffffff20`) forms and returns an ABGR color represented as a decimal number.

### 📝 Example
```js
// Import the module
const { convert } = require('ewc-color')

const color = convert('#fff')
// -> 0x20ffffff
```
