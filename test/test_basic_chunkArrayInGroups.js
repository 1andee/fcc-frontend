const expect = require('chai').expect;

const chunkArrayInGroups = require('../algorithms/basic/chunkArrayInGroups');

describe('Chunky Monkey', (() => {
  it('chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]', (() => {
    let arr = ["a", "b", "c", "d"];
    let size = 2;
    let result = [["a", "b"], ["c", "d"]];
    expect(chunkArrayInGroups(arr, size)).eql(result);
  }));

  it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]', (() => {
    let arr = [0, 1, 2, 3, 4, 5];
    let size = 3;
    let result = [[0, 1, 2], [3, 4, 5]];
    expect(chunkArrayInGroups(arr, size)).eql(result);
  }));

  it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]]', (() => {
    let arr = [0, 1, 2, 3, 4, 5];
    let size = 2;
    let result = [[0, 1], [2, 3], [4, 5]];
    expect(chunkArrayInGroups(arr, size)).eql(result);
  }));

  it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]', (() => {
    let arr = [0, 1, 2, 3, 4, 5];
    let size = 4;
    let result = [[0, 1, 2, 3], [4, 5]];
    expect(chunkArrayInGroups(arr, size)).eql(result);
  }));

  it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]]', (() => {
    let arr = [0, 1, 2, 3, 4, 5, 6];
    let size = 3;
    let result = [[0, 1, 2], [3, 4, 5], [6]];
    expect(chunkArrayInGroups(arr, size)).eql(result);
  }));

  it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]', (() => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let size = 4;
    let result = [[0, 1, 2, 3], [4, 5, 6, 7], [8]];
    expect(chunkArrayInGroups(arr, size)).eql(result);
  }));

  it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]', (() => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let size = 2;
    let result = [[0, 1], [2, 3], [4, 5], [6, 7], [8]];
    expect(chunkArrayInGroups(arr, size)).eql(result);
  }));

}));
