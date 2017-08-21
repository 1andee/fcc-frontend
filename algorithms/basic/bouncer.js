bouncer = (arr) => {

  placeholderArr = [];

  arr.forEach((e) => {

    // Check for "truthy" value
    if (e) {
      placeholderArr.push(e);
    }
  });

  return placeholderArr;
};

module.exports = bouncer;
