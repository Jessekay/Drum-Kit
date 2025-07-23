function mergeAndSortUnique(arr1, arr2) {
    const merged = [...arr1, ...arr2];

    const uniqueArr = [];
    for (let i = 0; i < merged.length; i++) {
        if(!uniqueArr.includes(merged[i])) {
            uniqueArr.push(merged[i]);
        }
    }

}



console.log(mergeAndSortUnique([], []));
