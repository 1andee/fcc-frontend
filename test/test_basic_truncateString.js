const expect = require('chai').expect;

const truncateString = require('../algorithms/basic/truncateString');

describe('Truncate a String', (() => {
  it('truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket..."', (() => {
    let str = "A-tisket a-tasket A green and yellow basket";
    let num = 11;
    let result = "A-tisket...";
    expect(truncateString(str, num)).to.be.equal(result);
  }));

  it('truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper..."', (() => {
    let str = "Peter Piper picked a peck of pickled peppers";
    let num = 14;
    let result = "Peter Piper...";
    expect(truncateString(str, num)).to.be.equal(result);
  }));

  it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the entire string', (() => {
    let str = "A-tisket a-tasket A green and yellow basket";
    let num = "A-tisket a-tasket A green and yellow basket".length;
    let result = "A-tisket a-tasket A green and yellow basket";
    expect(truncateString(str, num)).to.be.equal(result);
  }));

  it('truncateString("A-", 1) should return "A..."', (() => {
    let str = "A-";
    let num = 1;
    let result = "A...";
    expect(truncateString(str, num)).to.be.equal(result);
  }));

  it('truncateString("Absolutely Longer", 2) should return "Ab..."', (() => {
    let str = "Absolutely Longer";
    let num = 2;
    let result = "Ab...";
    expect(truncateString(str, num)).to.be.equal(result);
  }));

}));
