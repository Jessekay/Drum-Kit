function removeExclamation(s) {
    let result = '';

    for (i = 0; i < s.length; i++) {
        if(s[i] !== "!") {
            result += s[i];
        }
    }
    return result;
}

const hello = "Hello World!";
console.log(removeExclamation(hello));
