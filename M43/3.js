function swapValues(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

// Example:
let x = 5, y = 10;
[x, y] = swapValues(x, y);
console.log([x, y]); // [10, 5]
