function findMinMax(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

// Example:
let numbersArray = [5, 2, 7, 1, 9];
console.log(findMinMax(numbersArray)); // { max: 9, min: 1 }
