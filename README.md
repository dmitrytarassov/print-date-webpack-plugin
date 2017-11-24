# print-date-webpack-plugin

Plugin can print date before and after bundle info, also can print some lines before compilation started.

## Install

``` bash
npm i print-date-webpack-plugin --save-dev
```

## Usage

``` javascript
const printDate = require('print-date-webpack-plugin');

module.exports = {
 
  plugins: [ 
    new printDate(options) 
  ]
 
};
```

## Options

``` javascript
let options = {
	lines 		// default: 0, quantity to lines to print before compilation
	print_begin // default: false, print start time
	print_end	// default: true, print end time
}
```
