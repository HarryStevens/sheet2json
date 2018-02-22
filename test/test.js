var sheet2json = require("../index");
var expect = require("chai").expect;

describe("#sheet2json", () => {
  it ("should covert an excel file with one sheet to json", () => {
    sheet2json("test/test2.xlsx", response => {
      expect(response[0].name).to.equal("John");
      expect(response.columns.length).to.equal(2);
    });    
  });

  it ("should covert an excel file with two sheet to jsons", () => {
    sheet2json("test/test.xlsx", response => {
      expect(response.length).to.equal(2);
    });    
  });
});