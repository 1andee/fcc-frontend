largestOfFour = (arr) => {

  largestArr = [];

  arr.forEach((array) => {
    let largestNum = 0;

    for (i in array) {
      if (array[i] > largestNum) {
        largestNum = array[i];
      };
    };

    largestArr.push(largestNum);
  });

  return largestArr;
};

module.exports = largestOfFour;
