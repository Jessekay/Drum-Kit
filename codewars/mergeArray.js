function mergeAndSortUnique(arr1, arr2) {
    const merged = [...arr1, ...arr2]
}

const result = [...new Set(merged)].sort((a, b) => a - b);

return result;

console.log(mergeAndSortUnique([1,2,3,4], [5,6,7,8,9]));
