const assert = require('chai').assert;
const expect = require('chai').expect;

const reverseString = require('../algorithms/basic/reverseString');

describe('Reverse a String', (() => {
  it('Function should return a string', (() => {
    assert.isString(reverseString("hello"));
  }));

  it('reverseString("hello") should become "olleh"', (() => {
    let string = "hello";
    let result = "olleh";
    expect(reverseString(string)).to.be.equal(result);
  }));

  it('reverseString("Howdy") should return "ydwoH"', (() => {
    let string = "Howdy";
    let result = "ydwoH";
    expect(reverseString(string)).to.be.equal(result);
  }));

  it('reverseString("Greetings from Earth") should return "htraE morf sgniteerG"', (() => {
    let string = "Greetings from Earth";
    let result = "htraE morf sgniteerG";
    expect(reverseString(string)).to.be.equal(result);
  }));

}));
