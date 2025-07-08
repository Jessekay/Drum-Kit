function checkArray(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        } 
    }
    return false;
}

console.log(checkArray([1,2,3],2));
