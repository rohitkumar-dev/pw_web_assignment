class Person {
    constructor(name = "Unknown", age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Examples:
let person1 = new Person("Bob", 25);
console.log(person1.getDetails()); // Name: Bob, Age: 25

let person2 = new Person();
console.log(person2.getDetails()); // Name: Unknown, Age: 0
