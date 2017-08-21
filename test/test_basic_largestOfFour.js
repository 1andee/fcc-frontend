const assert = require('chai').assert;
const expect = require('chai').expect;

const largestOfFour = require('../algorithms/basic/largestOfFour');

describe('Largest Of Four', (() => {
  it('Function should return an array', (() => {
    let array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    assert.isArray(largestOfFour(array));
  }));

  it('[[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]] should return [27,5,39,1001]', (() => {
    let array = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    let result = [27,5,39,1001];
    expect(largestOfFour(array)).to.have.same.members(result);
  }));

  it('[[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]] should return [9, 35, 97, 1000000]', (() => {
    let array = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];
    let result = [9, 35, 97, 1000000];
    expect(largestOfFour(array)).to.have.same.members(result);
  }));

}));
