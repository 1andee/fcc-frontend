const expect = require('chai').expect;

const destroyer = require('../algorithms/basic/destroyer');

describe('Seek and Destroy', (() => {
  it('destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]', (() => {
    let result = [1, 1];
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).eql(result);
  }));

  it('destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]', (() => {
    let result = [1, 5, 1];
    expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).eql(result);
  }));

  it('destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1]', (() => {
    let result = [1];
    expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).eql(result);
  }));

  it('destroyer([2, 3, 2, 3], 2, 3) should return []', (() => {
    let result = [];
    expect(destroyer([2, 3, 2, 3], 2, 3)).eql(result);
  }));

  it('destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"]', (() => {
    let result = ["hamburger"];
    expect(destroyer(["tree", "hamburger", 53], "tree", 53)).eql(result);
  }));

}));
