module.exports = function(input_file, callback){
  var XLSX = require("xlsx");
  var d3 = require("d3-dsv");

  var sheets = XLSX.readFile(input_file).Sheets;
  var sheet_keys = Object.keys(sheets);

  var response = [];

  sheet_keys.forEach((sheet_key, sheet_index) => {

    var data = d3.csvParse(XLSX.utils.sheet_to_csv(sheets[sheet_key]));

    if (sheet_keys.length > 1) {
      response.push({sheet: sheet_key, json: data});
    } else {
      response = data;
    }
    
  });

  callback(response);
}