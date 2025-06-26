function invert(array) {
    return array.map(function(num) {
        return -num;
    });
}

console.log(invert([1, 2, 3, 4, 5]));