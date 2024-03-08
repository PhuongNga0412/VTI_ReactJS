function handleUser() {
    fetchAndDisplay(
        "https://jsonplaceholder.typicode.com/users",
        generateUserCard
    );
}

function handleTodo() {
    fetchAndDisplay(
        "https://jsonplaceholder.typicode.com/todos",
        generateToDoListCard
    );
}

function handlePhoto() {
    fetchAndDisplay(
        "https://jsonplaceholder.typicode.com/photos",
        generatePhotoListCard
    );
}

function handleAlbum() {
    fetchAndDisplay(
        "https://jsonplaceholder.typicode.com/albums",
        generateAlbumListCard
    );
}

function handlePost() {
    fetchAndDisplay(
        "https://jsonplaceholder.typicode.com/posts",
        generatePostListCard
    );
}

function handleComment() {
    fetchAndDisplay(
        "https://jsonplaceholder.typicode.com/comments",
        generateCommentListCard
    );
}

function fetchAndDisplay(url, cardGenerator) {
    const contentDiv = document.querySelector(".modal");
    contentDiv.innerHTML = `<h1>Loading...</h1>`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then((data) => {
            contentDiv.innerHTML = data.map(cardGenerator).join("");
        })
        .catch((error) => {
            contentDiv.innerHTML = `<h1>${error}</h1>`;
        });
}

function generateUserCard(userInfo) {
    return `
        <div class='card'>
            <p>name: ${userInfo.name}</p>
            <p>email: ${userInfo.email}</p>
            <p>username: ${userInfo.username}</p>
            <p>phone: ${userInfo.phone}</p>
            <button onclick='showDetail1(${JSON.stringify(
                userInfo
            )})'>Show Detail</button>
        </div>
    `;
}

function generateCommentListCard(comment) {
    return `
        <div class='card'>
            <p>postId: ${comment.postId}</p>
            <p>id: ${comment.id}</p>
            <p>name: ${comment.name}</p>
            <p>email: ${comment.email}</p>
            <p>body: ${comment.body}</p>
            <button onclick='showDetail(${JSON.stringify(
                comment
            )})'>Show Detail</button>
        </div>
    `;
}

function generateToDoListCard(todo) {
    return `
        <div class='card'>
            <p>User ID: ${todo.userId}</p>
            <p>ID: ${todo.id}</p>
            <p>username: ${todo.title}</p>
            ${todo.completed ? "<p>Completed</p>" : "<p>Not Completed</p>"}
            <button onclick='showDetail(${JSON.stringify(
                todo
            )})'>Show Detail</button>
        </div>
    `;
}

function generatePhotoListCard(photo) {
    return `
        <div class='card'>
            <p>Album ID: ${photo.albumId}</p>
            <p>ID: ${photo.id}</p>
            <p>Title: ${photo.title}</p>
            <img src=${photo.url} alt="Photo" width="100" height="100">
            <p>Thumbnail URL: ${photo.thumbnailUrl}</p>
            <button onclick='showDetail(${JSON.stringify(
                photo
            )})'>Show Detail</button>
        </div>
    `;
}

function generateAlbumListCard(album) {
    return `
        <div class='card'>
            <p>User ID: ${album.userId}</p>
            <p>ID: ${album.id}</p>
            <p>Title: ${album.title}</p>
            <button onclick='showDetail(${JSON.stringify(
                album
            )})'>Show Detail</button>
        </div>
    `;
}

function generatePostListCard(post) {
    return `
        <div class='card'>
            <p>User ID: ${post.userId}</p>
            <p>ID: ${post.id}</p>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
            <button onclick='showDetail(${JSON.stringify(
                post
            )})'>Show Detail</button>
        </div>
    `;
}

const showDetail1 = (user) => {
    const userInfoDiv = document.getElementById("userInfo");
    const userString = JSON.stringify(user);
    userInfoDiv.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <button onclick='logUserInfo(${userString})'>Log User Info</button>
        `;
    document.getElementById("modal").style.display = "block";
};

function closeModal() {
    document.getElementsByClassName("modal").style.display = "none";
}
