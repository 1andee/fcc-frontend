const expect = require('chai').expect;

const bouncer = require('../algorithms/basic/bouncer');

describe('Falsy Bouncer', (() => {
  it('bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9]', (() => {
    let arr = [7, "ate", "", false, 9];
    let result = [7, "ate", 9];
    expect(bouncer(arr)).eql(result);
  }));

  it('bouncer(["a", "b", "c"]) should return ["a", "b", "c"]', (() => {
    let arr = ["a", "b", "c"];
    let result = ["a", "b", "c"];
    expect(bouncer(arr)).eql(result);
  }));

  it('bouncer([false, null, 0, NaN, undefined, ""]) should return []', (() => {
    let arr = [false, null, 0, NaN, undefined, ""];
    let result = [];
    expect(bouncer(arr)).eql(result);
  }));

  it('bouncer([1, null, NaN, 2, undefined]) should return [1, 2]', (() => {
    let arr = [1, null, NaN, 2, undefined];
    let result = [1, 2];
    expect(bouncer(arr)).eql(result);
  }));

}));
