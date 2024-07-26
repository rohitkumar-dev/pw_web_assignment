class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

// Example:
let myCar = new Car("Toyota", "Corolla", 2021);
console.log(myCar.getDescription()); // This is a 2021 Toyota Corolla
