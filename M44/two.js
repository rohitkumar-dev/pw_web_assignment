function getPerson(person) {
    try {
        if (typeof person !== 'object' || !person.name || !person.age) {
            throw new Error("Invalid parameter type");
        }
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        return error.message;
    }
}

// Examples:
console.log(getPerson({ name: "John", age: 30 })); // Name: John, Age: 30
console.log(getPerson({ name: "John" })); // Invalid parameter type
console.log(getPerson("John")); // Invalid parameter type
