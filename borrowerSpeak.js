function borrowerSpeak(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i].toLowerCase();
    
    if (char >= 'a' && char <= 'z' || char === ' ') {
      result += char;
    }
    // else ignore punctuation, numbers, symbols etc.
  }

  return result;
}
