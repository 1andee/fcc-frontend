const assert = require('chai').assert;

const mutation = require('../algorithms/basic/mutation');

describe('Mutations', (() => {
  it('mutation(["hello", "hey"]) should return false', (() => {
    let array = ["hello", "hey"];
    assert.isFalse(mutation(array));
  }));

  it('mutation(["hello", "Hello"]) should return true.', (() => {
    let array = ["hello", "Hello"];
    assert.isTrue(mutation(array));
  }));

  it('mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true', (() => {
    let array = ["zyxwvutsrqponmlkjihgfedcba", "qrstu"];
    assert.isTrue(mutation(array));
  }));

  it('mutation(["Mary", "Army"]) should return true', (() => {
    let array = ["Mary", "Army"];
    assert.isTrue(mutation(array));
  }));

  it('mutation(["Mary", "Aarmy"]) should return true', (() => {
    let array = ["Mary", "Aarmy"];
    assert.isTrue(mutation(array));
  }));

  it('mutation(["Alien", "line"]) should return true', (() => {
    let array = ["Alien", "line"];
    assert.isTrue(mutation(array));
  }));

  it('mutation(["floor", "for"]) should return true', (() => {
    let array = ["floor", "for"];
    assert.isTrue(mutation(array));
  }));

}));
