function correct(text) {
  let corrected = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char === '5') {
      corrected += 'S';
    } else if (char === '0') {
      corrected += 'O';
    } else if (char === '1') {
      corrected += 'I';
    } else {
      corrected += char;
    }
  }

  return corrected;
}
