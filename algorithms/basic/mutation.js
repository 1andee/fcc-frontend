mutation = (arr) => {

  let str = arr[0].toLowerCase();
  let strToCompare = arr[1].toLowerCase();

  for (i = 0; i < strToCompare.length; i++) {
    if (!str.includes(strToCompare[i])) {
      return false;
    };
  };
  return true;
};

module.exports = mutation;
