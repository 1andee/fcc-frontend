function destroyer(args) {

  let arr = arguments[0];
  let constraints = [];

  for (i = 1; i < arguments.length; i++) {
    constraints.push(arguments[i])
  };

  return arr.filter(item => !constraints.includes(item))

};

module.exports = destroyer;
