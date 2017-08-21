factorialize = (num) => {

  let factorial = 1;

  for (let n = 2; n <= num; n++) {
    factorial *= n;
  };

  return factorial;
};

module.exports = factorialize;
