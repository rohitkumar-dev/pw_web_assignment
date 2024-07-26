async function fetchMultiple() {
    try {
        let [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);
        
        let todo = await todoResponse.json();
        let post = await postResponse.json();

        console.log({ todo, post });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example:
fetchMultiple();
