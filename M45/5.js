function greet(name) {
    return new Promise((resolve) => {
        resolve(`Hello, ${name}!`);
    });
}

// Example:
greet("Mithun").then(message => {
    console.log(message); // Hello, Mithun!
});
