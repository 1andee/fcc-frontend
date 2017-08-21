const expect = require('chai').expect;

const slasher = require('../algorithms/basic/slasher');

describe('Slasher Flick', (() => {
  it('slasher([1, 2, 3], 2) should return [3]', (() => {
    let arr = [1, 2, 3];
    let howMany = 2;
    let result = [3];
    expect(slasher(arr, howMany)).eql(result);
  }));

  it('slasher([1, 2, 3], 0) should return [1, 2, 3]', (() => {
    let arr = [1, 2, 3];
    let howMany = 0;
    let result = [1, 2, 3];
    expect(slasher(arr, howMany)).eql(result);
  }));

  it('slasher([1, 2, 3], 9) should return []', (() => {
    let arr = [1, 2, 3];
    let howMany = 9;
    let result = [];
    expect(slasher(arr, howMany)).eql(result);
  }));

  it('slasher([1, 2, 3], 4) should return []', (() => {
    let arr = [1, 2, 3];
    let howMany = 4;
    let result = [];
    expect(slasher(arr, howMany)).eql(result);
  }));

}));
