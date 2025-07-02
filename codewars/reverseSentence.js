function reverseSentence(s) {
    const words = s.split(" ");
    let reversed = [];

    for (let i = words.length; i >= 0; i--) {
        reversed.push(words[i]); 
    }
    const reversedSentence = reversed.join(" ");
    return reversedSentence;
}

const sentence = "how are you doing?";
console.log(reverseSentence(sentence));
