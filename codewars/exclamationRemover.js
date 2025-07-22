function removeExclamation(s) {
    while (s.includes("!")) {
        s = s.replace("!", "");
    }
    return s;
}

const hello = "mama mia!";
console.log(removeExclamation(hello));
