const assert = require('chai').assert;

const confirmEnding = require('../algorithms/basic/confirmEnding');

describe('Confirm the Ending', (() => {
  it('confirmEnding("Bastian", "n") should return true', (() => {
    let string = "Bastian"
    let target = "n"
    assert.isTrue(confirmEnding(string, target));
  }));

  it('confirmEnding("Connor", "n") should return false', (() => {
    let string = "Connor";
    let target = "n";
    assert.isFalse(confirmEnding(string, target));
  }));

  it('confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false', (() => {
    let string = "Walking on water and developing software from a specification are easy if both are frozen";
    let target = "specification";
    assert.isFalse(confirmEnding(string, target));
  }));

  it('confirmEnding("He has to give me a new name", "name") should return true', (() => {
    let string = "He has to give me a new name";
    let target = "name";
    assert.isTrue(confirmEnding(string, target));
  }));

  it('confirmEnding("Open sesame", "same") should return true', (() => {
    let string = "Open sesame";
    let target = "same";
    assert.isTrue(confirmEnding(string, target));
  }));

  it('confirmEnding("Open sesame", "pen") should return false', (() => {
    let string = "Open sesame";
    let target = "pen";
    assert.isFalse(confirmEnding(string, target));
  }));

  it('confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false', (() => {
    let string = "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing";
    let target = "mountain";
    assert.isFalse(confirmEnding(string, target));
  }));

}));
