function manipulateString(str) {
    const upperStr = str.toUpperCase();
    return function logString() {
        console.log(`The manipulated string is: ${upperStr}`);
    };
}

// Example:
let logFunc = manipulateString("hello world");
logFunc(); // The manipulated string is: HELLO WORLD
