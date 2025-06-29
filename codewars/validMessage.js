function isValidMessage(message) {
    if (message === "") return true;
}

  let i = 0;

  while (i < message.length) {
    let numStr = "";

    // 🧮 Extract the number (could be more than one digit)
    while (i < message.length && isDigit(message[i])) {
      numStr += message[i];
      i++;
    }
}