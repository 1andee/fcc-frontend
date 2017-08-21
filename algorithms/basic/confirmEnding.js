confirmEnding = (str, target) => {
  let strToCompare = str.substr(-target.length);
  return strToCompare === target;
};

module.exports = confirmEnding;
