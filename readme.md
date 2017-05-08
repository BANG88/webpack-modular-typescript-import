# webpack-modular-typescript-import [![Build Status](https://travis-ci.org/bang88/webpack-modular-typescript-import.svg?branch=master)](https://travis-ci.org/bang88/webpack-modular-typescript-import)

> modular-typescript-import for webpack


## Install

```
$ npm install --save webpack-modular-typescript-import

# or

$ yarn add webpack-modular-typescript-import
```


## Usage

```js
{
	loader: 'webpack-modular-typescript-import',
	options: {
		/*
			moduleName: 'antd',
			components: 'lib',
			style: 'css',
			camel2Dash: true,
		*/
		style: false
	}
}
```

Before:
```sh
$ webpack
Hash: 22832b19c031baddc417
Version: webpack 2.2.0
Time: 5979ms
    Asset     Size  Chunks                    Chunk Names
bundle.js  4.42 MB       0  [emitted]  [big]  main
  [18] ./~/antd/lib/icon/index.js 1.59 kB {0} [built]
 [445] ./~/antd/lib/index.js 10.8 kB {0} [built]
 [508] ./~/antd/lib/steps/index.js 1.64 kB {0} [built]
 [509] ./~/antd/lib/switch/index.js 2.5 kB {0} [built]
 [517] ./~/antd/lib/table/index.js 338 bytes {0} [built]
 [519] ./~/antd/lib/tabs/index.js 8.02 kB {0} [built]
 [521] ./~/antd/lib/tag/index.js 5.78 kB {0} [built]
 [522] ./~/antd/lib/time-picker/index.js 5.53 kB {0} [built]
 [524] ./~/antd/lib/timeline/index.js 518 bytes {0} [built]
 [526] ./~/antd/lib/transfer/index.js 17.2 kB {0} [built]
 [530] ./~/antd/lib/tree-select/index.js 4 kB {0} [built]
 [531] ./~/antd/lib/tree/index.js 3.1 kB {0} [built]
 [534] ./~/antd/lib/upload/index.js 484 bytes {0} [built]
 [536] ./~/antd/lib/version/index.js 195 bytes {0} [built]
 [961] ./index.tsx 127 bytes {0} [built]
    + 947 hidden modules
```

After:

```sh
$ webpack
{ style: false }

const Button = require('antd/lib/button')
Hash: 6ce8c0b756528832b14c
Version: webpack 2.2.0
Time: 887ms
    Asset    Size  Chunks             Chunk Names
bundle.js  210 kB       0  [emitted]  main
  [25] ./~/babel-runtime/helpers/defineProperty.js 540 bytes {0} [built]
  [26] ./~/babel-runtime/helpers/extends.js 544 bytes {0} [built]
  [40] ./~/classnames/index.js 1.1 kB {0} [built]
  [45] ./~/react/react.js 56 bytes {0} [built]
  [58] ./~/omit.js/index.js 244 bytes {0} [built]
  [65] ./~/antd/lib/button/index.js 503 bytes {0} [built]
  [66] ./~/antd/lib/button/button-group.js 1.96 kB {0} [built]
  [67] ./~/antd/lib/button/button.js 7.75 kB {0} [built]
  [68] ./~/antd/lib/icon/index.js 1.59 kB {0} [built]
  [75] ./~/babel-runtime/helpers/classCallCheck.js 208 bytes {0} [built]
  [76] ./~/babel-runtime/helpers/inherits.js 1.11 kB {0} [built]
  [77] ./~/babel-runtime/helpers/possibleConstructorReturn.js 542 bytes {0} [built]
 [116] ./~/prop-types/index.js 1.08 kB {0} [built]
 [119] ./~/react/lib/React.js 3.32 kB {0} [built]
 [130] ./index.tsx 65 bytes {0} [built]
    + 116 hidden modules

```
## License

MIT © [bang](https://github.com/bang88)
