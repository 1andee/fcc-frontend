const expect = require('chai').expect;

const rot13 = require('../algorithms/basic/rot13');

describe('Caesar\'s Cipher', (() => {
  it('rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"', (() => {
    let string = "SERR PBQR PNZC";
    let result = "FREE CODE CAMP";
    expect(rot13(string)).to.be.equal(result);
  }));

  it('rot13("SERR CVMMN!") should decode to "FREE PIZZA!"', (() => {
    let string = "SERR CVMMN!";
    let result = "FREE PIZZA!";
    expect(rot13(string)).to.be.equal(result);
  }));

  it('rot13("SERR YBIR?") should decode to "FREE LOVE?"', (() => {
    let string = "SERR YBIR?";
    let result = "FREE LOVE?";
    expect(rot13(string)).to.be.equal(result);
  }));

  it('rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."', (() => {
    let string = "GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.";
    let result = "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.";
    expect(rot13(string)).to.be.equal(result);
  }));

}));
