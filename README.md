# promise-native-deferred <sup>[![Version Badge][npm-version-svg]][npm-url]</sup>

This is a fork of [promise-deferred](https://github.com/ljharb/promise-deferred), but
instead uses the environment's native Promise implementation instead of a polyfill. This
means that browser tools won't unnecessarily bundle a Promise polyfill when one already
exists or Promise is provided natively.

## Usage

`var deferred = new Deferred()`

In order to use this module in environments without Promises, either polyfill ahead-of-time
or pass your custom `Promise` during Deferred construction like so:

`var deferred = new Deferred(MyPromise)`

or simply:

`var deferred = Deferred(MyPromise)`

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][npm-url]

[![browser support][testling-png]][testling-url]

A lightweight Deferred implementation, on top of Promises/A+

## Examples
```js
var Deferred = require('promise-deferred');

var deferred = new Deferred();

// set up handlers
deferred.promise.then(function (value) {}, function (error) {});

// resolve
deferred.resolve('a value');

// reject
deferred.reject(new Error('oh noes'));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[npm-url]: https://npmjs.org/package/promise-deferred
[npm-version-svg]: http://versionbadg.es/ljharb/promise-deferred.svg
[travis-svg]: https://travis-ci.org/ljharb/promise-deferred.svg
[travis-url]: https://travis-ci.org/ljharb/promise-deferred
[deps-svg]: https://david-dm.org/ljharb/promise-deferred.svg
[deps-url]: https://david-dm.org/ljharb/promise-deferred
[dev-deps-svg]: https://david-dm.org/ljharb/promise-deferred/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/promise-deferred#info=devDependencies
[testling-png]: https://ci.testling.com/ljharb/promise-deferred.png
[testling-url]: https://ci.testling.com/ljharb/promise-deferred
[npm-badge-png]: https://nodei.co/npm/promise-deferred.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/promise-deferred.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/promise-deferred.svg
[downloads-url]: http://npm-stat.com/charts.html?package=promise-deferred

