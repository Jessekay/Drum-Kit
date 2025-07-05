function removeFirstAndLast(str) {
    const parts = str.split(",");

    if (parts.length <= 2) {
        return null;
    }

    const middle = parts.slice(1, -1);

    return middle.join(" ");
}

console.log(removeFirstAndLast("1,2,3"));
