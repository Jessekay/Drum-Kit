function multiplyArray(x) {
    const initialValue = 1;
    return x.reduce((accumulator, currentValue) => accumulator * currentValue, initialValue);
}

console.log(multiplyArray([1, 2, 3, 4]));
