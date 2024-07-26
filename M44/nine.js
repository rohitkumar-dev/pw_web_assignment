function numberChecker(numbers) {
    return function(num) {
        return numbers.includes(num);
    };
}

// Example:
let checkNumber = numberChecker([1, 2, 3, 4, 5]);
console.log(checkNumber(3)); // true
console.log(checkNumber(6)); // false
