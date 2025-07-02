function removeExclamatioMark(s) {
    let result = '';

    for (i = 0; i < s.length; i++) {
        if (s[i] !== "!") {
            result += s[i];
        }
    }

    return result;
}

const hello = "hello world!!";
console.log(removeExclamatioMark(hello));
