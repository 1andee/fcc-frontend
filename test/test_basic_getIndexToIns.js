const expect = require('chai').expect;

const getIndexToIns = require('../algorithms/basic/getIndexToIns');

describe('Where do I belong?', (() => {
  it('getIndexToIns([10, 20, 30, 40, 50], 35) should return 3', (() => {
    let arr = [10, 20, 30, 40, 50];
    let num = 35;
    let result = 3;
    expect(getIndexToIns(arr, num)).eql(result);
  }));

  it('getIndexToIns([10, 20, 30, 40, 50], 30) should return 2', (() => {
    let arr = [10, 20, 30, 40, 50];
    let num = 30;
    let result = 2;
    expect(getIndexToIns(arr, num)).eql(result);
  }));

  it('getIndexToIns([40, 60], 50) should return 1', (() => {
    let arr = [40, 60];
    let num = 50;
    let result = 1;
    expect(getIndexToIns(arr, num)).eql(result);
  }));

  it('getIndexToIns([3, 10, 5], 3) should return 0', (() => {
    let arr = [3, 10, 5];
    let num = 3;
    let result = 0;
    expect(getIndexToIns(arr, num)).eql(result);
  }));

  it('getIndexToIns([5, 3, 20, 3], 5) should return 2', (() => {
    let arr = [5, 3, 20, 3];
    let num = 5;
    let result = 2;
    expect(getIndexToIns(arr, num)).eql(result);
  }));

  it('getIndexToIns([2, 20, 10], 19) should return 2', (() => {
    let arr = [2, 20, 10];
    let num = 19;
    let result = 2;
    expect(getIndexToIns(arr, num)).eql(result);
  }));

  it('getIndexToIns([2, 5, 10], 15) should return 3', (() => {
    let arr = [2, 5, 10];
    let num = 15;
    let result = 3;
    expect(getIndexToIns(arr, num)).eql(result);
  }));

}));
