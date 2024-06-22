const getPosts = () => {
    let fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
    let allPosts = '<h2>Posts</h2><hr>';

    fetchPosts.then((response) => {
        response.json().then((data) => {
            //console.log(data)
            for (let i = 0; i < data.length; i++) {
                let posts = data[i];
                // debugger;
                // console.log(posts);
                allPosts += `<strong>Post ID:</strong> ${posts.id} <br><strong>Post Title:</strong> ${posts.title} <br><strong>Post Body:</strong> ${posts.body}<hr>`;
            }
            document.querySelector('#posts').innerHTML = allPosts;
        });
    });
}