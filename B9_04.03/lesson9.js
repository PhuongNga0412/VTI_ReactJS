const getUserList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userList = response.json();
    return userList;
};

const getPostList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postList = response.json();
    return postList;
};

const getCommentList = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
    );
    const commentList = response.json();
    return commentList;
};

const getAlbumList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albumList = response.json();
    return albumList;
};

const getPhotoList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photoList = response.json();
    return photoList;
};

const getTodoList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todoList = response.json();
    return todoList;
};

// getUserList().then((data) => console.log("user list: ", data.length));
// getPostList().then((data) => console.log("post list: ", data.length));
// getCommentList().then((data) => console.log("comment list: ", data.length));
// getAlbumList().then((data) => console.log("album list: ", data.length));
// getPhotoList().then((data) => console.log("photo list: ", data.length));
// getTodoList().then((data) => console.log("todo list: ", data.length));

Promise.all([
    getUserList(),
    getPostList(),
    getCommentList(),
    getAlbumList(),
    getPhotoList(),
    getTodoList(),
])
    .then((data) => {
        console.log("User list: ", data[0].length);
        console.log("Post list: ", data[1].length);
        console.log("Comment list: ", data[2].length);
        console.log("Album list: ", data[3].length);
        console.log("Photo list: ", data[4].length);
        console.log("Todo list: ", data[5].length);
        // console.log(data);
    })
    .catch((error) => {
        console.error(error.message);
    });

// 2. gọi tất cả APIs 1 lúc và hiển thị tổng số phần tử mà các APIs trả về
const getAllItems = async () => {
    const [item1, item2, item3, item4, item5] = await Promise.all([
        getPostList(),
        getCommentList(),
        1,
        "a",
        { id: "001" },
    ]);
    console.log({
        numberOfPostList: item1.length,
        numberOfComment: item2.length,
        item3,
        item4,
        item5,
    });
};
getAllItems();

// Promise
const mockAPI1 = new Promise((resolve, reject) => {
    // xu li cac hanh dong bat dong bo
    // setTimeout(resolve, 2000, { id: 1 });
    setTimeout(() => resolve([{ id: 1 }, { id: 2 }]), 2000);
});
const mockAPI2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve([{ id: 11 }, { id: 21 }]), 1000);
});
const myNumber = 123;

Promise.all([mockAPI1, myNumber, mockAPI2])
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
