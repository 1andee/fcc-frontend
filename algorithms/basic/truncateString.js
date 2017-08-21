truncateString = (str, num) => {

  let length = str.length;
  let dots = '...';

  if (length <= num) {
    return str;
  } else if (num < 4) {
    let newStr = str.substring(0, num);
    return newStr.concat(dots);
  } else {
    let indexToEnd = num - 3;
    let newStr = str.substring(0, indexToEnd);
    return newStr.concat(dots);
  };

};

module.exports = truncateString;
