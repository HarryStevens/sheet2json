# sheet2json
[![Build Status](https://travis-ci.org/HarryStevens/sheet2json.svg?branch=master)](https://travis-ci.org/HarryStevens/sheet2json) [![Coverage Status](https://coveralls.io/repos/github/HarryStevens/sheet2json/badge.svg?branch=master)](https://coveralls.io/github/HarryStevens/sheet2json?branch=master)

A Node.js package for converting each sheet in an .xls or .xlsx file to a .json file.

## Installation

```bash
npm i sheet2json -S
```

## Example

```js
require("sheet2json")("path/to/file.xls", response => {
  console.log(response);
});
```