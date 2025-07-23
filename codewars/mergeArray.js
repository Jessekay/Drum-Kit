function mergeAndSortUnique(arr1, arr2) {
    const merged = [...arr1, ...arr2]
}

const result = [...new Set(merged)].sort((a, b) => a - b);

return result;