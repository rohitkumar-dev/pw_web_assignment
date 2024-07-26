async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Example:
fetchPosts();
