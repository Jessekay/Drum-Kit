function smash(words) {
    let sentence = "";

    for (let i = 0; i < words.length; i++) {
        sentence += words[i];

        if (i < words.length - 1) {
            sentence += " ";
        }
    }
    return sentence;
}

console.log(smash(['hello', 'world', 'this', 'is', 'great']));