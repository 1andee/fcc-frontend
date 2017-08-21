const assert = require('chai').assert;
const expect = require('chai').expect;

const factorialize = require('../algorithms/basic/factorialize');

describe('Factorialize', (() => {
  it('Function should return a number', (() => {
    assert.isNumber(factorialize(5));
  }));

  it('factorialize(5) should return 120', (() => {
    expect(factorialize(5)).to.be.equal(120);
  }));

  it('factorialize(10) should return 3628800', (() => {
    expect(factorialize(10)).to.be.equal(3628800);
  }));

  it('factorialize(20) should return 2432902008176640000', (() => {
    expect(factorialize(20)).to.be.equal(2432902008176640000);
  }));

  it('factorialize(0) should return 1', (() => {
    expect(factorialize(0)).to.be.equal(1);
  }));

}));
