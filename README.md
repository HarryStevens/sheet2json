# sheet2json
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