function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;
    return function() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
}

// Example:
let person = { firstName: "John", lastName: "Doe", age: 30 };
let logAgeInDays = ageInDays(person);
logAgeInDays(); // The person's full name is John Doe and their age in days is 10950.
