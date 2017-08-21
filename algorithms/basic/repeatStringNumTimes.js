repeatStringNumTimes = (str, num) => {
  let newStr = '';
  for (i = 0; i < num; i++) {
    newStr += str
  };
  return newStr;
};

module.exports = repeatStringNumTimes;
