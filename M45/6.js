async function fetchTodo() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching the TODO:', error);
    }
}

// Example:
fetchTodo();
