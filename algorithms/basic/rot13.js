rot13 = (str) => {

  let placeholderArr = [];

  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        placeholderArr.push("N");
        break;
      case "B":
        placeholderArr.push("O");
        break;
      case "C":
        placeholderArr.push("P");
        break;
      case "D":
        placeholderArr.push("Q");
        break;
      case "E":
        placeholderArr.push("R");
        break;
      case "F":
        placeholderArr.push("S");
        break;
      case "G":
        placeholderArr.push("T");
        break;
      case "H":
        placeholderArr.push("U");
        break;
      case "I":
        placeholderArr.push("V");
        break;
      case "J":
        placeholderArr.push("W");
        break;
      case "K":
        placeholderArr.push("X");
        break;
      case "L":
        placeholderArr.push("Y");
        break;
      case "M":
        placeholderArr.push("Z");
        break;
      case "N":
        placeholderArr.push("A");
        break;
      case "O":
        placeholderArr.push("B");
        break;
      case "P":
        placeholderArr.push("C");
        break;
      case "Q":
        placeholderArr.push("D");
        break;
      case "R":
        placeholderArr.push("E");
        break;
      case "S":
        placeholderArr.push("F");
        break;
      case "T":
        placeholderArr.push("G");
        break;
      case "U":
        placeholderArr.push("H");
        break;
      case "V":
        placeholderArr.push("I");
        break;
      case "W":
        placeholderArr.push("J");
        break;
      case "X":
        placeholderArr.push("K");
        break;
      case "Y":
        placeholderArr.push("L");
        break;
      case "Z":
        placeholderArr.push("M");
        break;
      default:
        placeholderArr.push(str[i]);
        break;
    };
  };

  return placeholderArr.join("");

};

module.exports = rot13;
