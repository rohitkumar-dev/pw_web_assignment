function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
}

// Example:
let person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
console.log(extractNameAndStreet(person)); // { name: "John Doe", street: "123 Main St" }
