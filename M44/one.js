function convertToNumber(str) {
    try {
        let number = Number(str);
        if (isNaN(number)) {
            throw new Error("Invalid number");
        }
        return number;
    } catch (error) {
        return "Invalid number";
    }
}

// Examples:
console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // Invalid number
