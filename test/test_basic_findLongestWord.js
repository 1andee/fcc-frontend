const assert = require('chai').assert;
const expect = require('chai').expect;

const findLongestWord = require('../algorithms/basic/findLongestWord');

describe('Find Longest Word', (() => {
  it('Function should return a number', (() => {
    let string = "The quick brown fox jumped over the lazy dog"
    assert.isNumber(findLongestWord(string));
  }));

  it('"The quick brown fox jumped over the lazy dog" should return 6', (() => {
    let string = "The quick brown fox jumped over the lazy dog";
    expect(findLongestWord(string)).to.be.equal(6);
  }));

  it('"May the force be with you" should return 5', (() => {
    let string = "May the force be with you"
    expect(findLongestWord(string)).to.be.equal(5);
  }));

  it('"Google do a barrel roll" should return 6', (() => {
    let string = "Google do a barrel roll";
    expect(findLongestWord(string)).to.be.equal(6);
  }));

  it('"What is the average airspeed velocity of an unladen swallow" should return 8', (() => {
    let string = "What is the average airspeed velocity of an unladen swallow";
    expect(findLongestWord(string)).to.be.equal(8);
  }));

  it('"What if we try a super-long word such as otorhinolaryngology" should return 19', (() => {
    let string = "What if we try a super-long word such as otorhinolaryngology";
    expect(findLongestWord(string)).to.be.equal(19);
  }));

}));
