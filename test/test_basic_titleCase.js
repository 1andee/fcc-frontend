const assert = require('chai').assert;
const expect = require('chai').expect;

const titleCase = require('../algorithms/basic/titleCase');

describe('Title Case', (() => {
  it('Function should return a string', (() => {
    assert.isString(titleCase("I'm a little tea pot"));
  }));

  it('titleCase("I\'m a little tea pot") should return "I\'m A Little Tea Pot"', (() => {
    let string = "I'm a little tea pot";
    let result = "I'm A Little Tea Pot";
    expect(titleCase(string)).to.be.equal(result);
  }));

  it('titleCase("sHoRt AnD sToUt") should return "Short And Stout"', (() => {
    let string = "sHoRt AnD sToUt";
    let result = "Short And Stout";
    expect(titleCase(string)).to.be.equal(result);
  }));

  it('titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout"', (() => {
    let string = "HERE IS MY HANDLE HERE IS MY SPOUT";
    let result = "Here Is My Handle Here Is My Spout";
    expect(titleCase(string)).to.be.equal(result);
  }));

}));
