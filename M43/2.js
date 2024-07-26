function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example:
let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5]
