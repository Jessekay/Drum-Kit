function removeFirstAndLast(str) {
    const parts = str.split(",");

    if (parts.length <= 2) {
        return null;
    }

    const middle = parts.slice(1, -1);

    
}