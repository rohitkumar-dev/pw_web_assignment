function doubleArray(arr, callback) {
    return arr.map(callback);
}

function double(num) {
    return num * 2;
}

// Example:
let numbers = [1, 2, 3, 4];
console.log(doubleArray(numbers, double)); // [2, 4, 6, 8]
