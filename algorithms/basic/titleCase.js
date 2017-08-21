titleCase = (str) => {
  let stringArray = str.split(" ");
  let newArray = [];

  stringArray.forEach((word) => {
    let firstChar = word[0].toUpperCase();
    let restOfWord = word.substring(1).toLowerCase();
    newArray.push(firstChar + restOfWord);
  });

  return newArray.join(" ");
};

module.exports = titleCase;
