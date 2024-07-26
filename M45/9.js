async function fetchWithErrorHandling() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/123456789');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error);
        document.body.innerHTML = `<p>An error occurred: ${error.message}</p>`;
    }
}

// Example:
fetchWithErrorHandling();
