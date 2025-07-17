function logicalCalc(array, operator) {
    if (operator === "AND") {
        return array.every(val => val);
    } else if (operator === "OR") {
        return array.some(val => val);
    } else if (operator === "XOR") {
        return array.reduce((acc, val) => acc !== val, false);
    }
}
