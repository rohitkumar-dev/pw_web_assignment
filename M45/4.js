function arrangeBooks(books, callback) {
    const titles = books.map(book => book.title);
    callback(titles.sort());
}

// Example:
let books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 }
];

arrangeBooks(books, (sortedTitles) => {
    console.log(sortedTitles); // ["1984", "The Catcher in the Rye", "To Kill a Mockingbird"]
});
