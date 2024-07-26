function filterByCategory(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

// Example:
let products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Apple", category: "Food" },
    { name: "Orange", category: "Food" }
];

let filterClothing = filterByCategory(products);
console.log(filterClothing("Clothing")); // [{ name: "Shirt", category: "Clothing" }, { name: "Pants", category: "Clothing" }]
console.log(filterClothing("Food")); // [{ name: "Apple", category: "Food" }, { name: "Orange", category: "Food" }]
