function countOccurrences(text) {
    let words = text.split(' ');
    let wordCount = new Map();

    for (let word of words) {
        word = word.toLowerCase();
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        } else {
            wordCount.set(word, 1);
        }
    }

    return wordCount;
}

// Example:
let text = "This is a test. This test is only a test.";
console.log(countOccurrences(text));
