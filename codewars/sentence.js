const sentenceReversing = (sentence) => {
    const words = sentence.split(" ");
    let reversedSentence = [];

    for (let i = words.length; i >= 0; i--) {
        reversedSentence.push(words[i]);
    }
    const reversed = reversedSentence.join("");
    return reversed;
}

const sent = "I am a boy!";
console.log(sentenceReversing(sent));
 