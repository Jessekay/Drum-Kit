function scoreboard(sentence) {
  const wordToNum = {
    "nil": 0,
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
  };

  let result = [];

  // Split the sentence into words
  const words = sentence.toLowerCase().split(" ");

  for (let word of words) {
    if (wordToNum.hasOwnProperty(word)) {
      result.push(wordToNum[word]);
    }

    if (result.length === 2) break; // We only need the first two number words
  }

  return result;
}
