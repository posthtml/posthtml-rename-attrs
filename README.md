<div align="center">
  <img width="150" height="150" alt="PostHTML" src="https://posthtml.github.io/posthtml/logo.svg">
  <h1>posthtml-rename-attrs</h1>
  <p>Programmatically rename HTML attributes</p>

  [![Version][npm-version-shield]][npm]
  [![Build][github-ci-shield]][github-ci]
  [![License][license-shield]][license]
  [![Downloads][npm-stats-shield]][npm-stats]
</div>

## About

This [PostHTML](https://github.com/posthtml/posthtml) plugin allows you to programmatically rename HTML attributes through a custom function.

## Installation

```sh
npm i -D posthtml posthtml-rename-attrs
```

## Usage

You simply define a function that returns the renamed attribute.

For example, let's rename all `src` attributes:

```js
const posthtml = require('posthtml');
const renameAttrs = require('posthtml-rename-attrs');

// If the attribute is 'class', rename it
const prefix = (v) => v === 'src' ? `data-${v}` : v;

posthtml([renameAtrs(prefix)])
  .process('<img src="...">')
  .then(function(result) {
    console.log(result);
  });
```

Result:

```html
<img data-src="...">
```

[npm]: https://www.npmjs.com/package/posthtml-rename-attrs
[npm-version-shield]: https://img.shields.io/npm/v/posthtml-rename-attrs.svg
[npm-stats]: http://npm-stat.com/charts.html?package=posthtml-rename-attrs
[npm-stats-shield]: https://img.shields.io/npm/dt/posthtml-rename-attrs.svg
[github-ci]: https://github.com/posthtml/posthtml-rename-attrs/actions/workflows/nodejs.yml
[github-ci-shield]: https://github.com/posthtml/posthtml-rename-attrs/actions/workflows/nodejs.yml/badge.svg
[license]: ./LICENSE
[license-shield]: https://img.shields.io/npm/l/posthtml-rename-attrs.svg
