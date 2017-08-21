const expect = require('chai').expect;

const repeatStringNumTimes = require('../algorithms/basic/repeatStringNumTimes');

describe('Repeat a String', (() => {
  it('repeatStringNumTimes("*", 3) should return "***"', (() => {
    let str = "*";
    let num = 3;
    let result = "***";
    expect(repeatStringNumTimes(str, num)).to.be.equal(result);
  }));

  it('repeatStringNumTimes("abc", 3) should return "abcabcabc"', (() => {
    let str = "abc";
    let num = 3;
    let result = "abcabcabc";
    expect(repeatStringNumTimes(str, num)).to.be.equal(result);
  }));

  it('repeatStringNumTimes("abc", 4) should return "abcabcabcabc"', (() => {
    let str = "abc";
    let num = 4;
    let result = "abcabcabcabc";
    expect(repeatStringNumTimes(str, num)).to.be.equal(result);
  }));

  it('repeatStringNumTimes("abc", 1) should return "abc"', (() => {
    let str = "abc";
    let num = 1;
    let result = "abc";
    expect(repeatStringNumTimes(str, num)).to.be.equal(result);
  }));

  it('repeatStringNumTimes("*", 8) should return "********"', (() => {
    let str = "*";
    let num = 8;
    let result = "********";
    expect(repeatStringNumTimes(str, num)).to.be.equal(result);
  }));

  it('repeatStringNumTimes("abc", -2) should return ""', (() => {
    let str = "abc";
    let num = -2;
    let result = "";
    expect(repeatStringNumTimes(str, num)).to.be.equal(result);
  }));

}));
