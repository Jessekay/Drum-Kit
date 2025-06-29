function isValidMessage(message) {
    if (message === "") return true;

  let i = 0;

  while (i < message.length) {
    let numStr = "";

    // 🧮 Extract the number (could be more than one digit)
    while (i < message.length && isDigit(message[i])) {
      numStr += message[i];
      i++;
    }

     if (numStr === "") return false; // No number found, invalid format

    let num = Number(numStr);

    // 📦 Grab the substring with exactly 'num' characters
    let word = message.slice(i, i + num);

    if (word.length !== num) return false; // mismatch = invalid
    i += num; // jump past the word
  }

  return true;
}

function isDigit(char) {
  return char >= '0' && char <= '9';
}