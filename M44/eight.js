function Student(name) {
    this.name = name;
}

Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Example:
let student = new Student("Mithun");
student.printDetails(); // Hello, my name is Mithun
