function mergeAndSortUnique(arr1, arr2) {
    const merged = [...arr1, ...arr2];

    const uniqueArr = [];
    for (let i = 0; i < merged.length; i++) {
        if(!uniqueArr.includes(merged[i])) {
            uniqueArr.push(merged[i]);
        }
    }

    for (let i = 0; i < uniqueArr.length; i++) {
        for (let j = i; j < uniqueArr.length; j++) {
            if(uniqueArr[i] > uniqueArr) {
                let temp = uniqueArr[i];
                uniqueArr[i] = uniqueArr[j];
                uniqueArr[j] = temp;
            }
        }
    }
    return uniqueArr;

}



console.log(mergeAndSortUnique([], []));
