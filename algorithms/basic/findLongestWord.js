findLongestWord = (str) => {
  stringArray = str.split(' ');
  longestWord = stringArray[0];

  for (var word in stringArray) {
    if (stringArray[word].length > longestWord.length) {
      longestWord = stringArray[word];
    };
  };

  return longestWord.length;
};

module.exports = findLongestWord;
