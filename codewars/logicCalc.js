function logicalCalc(array, operator) {
    let result = array[0]; // Start with the first value

    for (let i = 1; i < array.length; i++) {
        switch (operator) {
            case "AND":
                result = result && array[i];
                break;
            case "OR":
                result = result || array[i];
                break;
            case "XOR":
                result = result !== array[i];
                break;
        }
    }

    return result;
}
