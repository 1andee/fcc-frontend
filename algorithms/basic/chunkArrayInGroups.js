chunkArrayInGroups = (arr, size) => {

  let placeholderArr = [];

  for (i = 0; arr.length > 0; i++) {
    placeholderArr[i] = arr.splice(0, size);
  };

  return placeholderArr;

};

module.exports = chunkArrayInGroups;
