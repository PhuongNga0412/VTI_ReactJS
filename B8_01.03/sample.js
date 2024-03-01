// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const isDone = true;
//         if (isDone) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const isDone = true;
//         if (isDone) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1000);
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const isDone = true;
//         if (isDone) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1000);
// });
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const isDone = true;
//         if (isDone) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1000);
// });

// // function delay(time) {
// //     return new Promise((resolve) => setTimeout(resolve, time));
// // }
// // async function promise1() {
// //     console.log("dang chay promise 1");
// //     await delay(2000);
// //     console.log("chay xong promise 1");
// // }
// // async function promise3() {
// //     console.log("dang chay promise 3");
// //     await delay(2000);
// //     console.log("chay xong promise 3");
// // }
// // async function promise4() {
// //     console.log("dang chay promise 4");
// //     await delay(2000);
// //     console.log("chay xong promise 4");
// // }
// // async function promise2() {
// //     console.log("dang chay promise 2");
// //     await delay(2000);
// //     console.log("chay xong promise 2");
// // }
// // async function execute() {
// //     await promise1();
// //     await promise3();
// //     await promise4();
// //     await promise2();
// // }
// // execute();

// ---------------------------------------------------------------

const getUserList = async () => {
    // gọi BE để lấy danh sách user
    // response là tất cả nội dung mà BE trả về trong đó danh sách user là 1 property
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userList = response.json();
    return userList;
};
getUserList().then((data) => console.log("user list: ", data.length));

const getPostList = async () => {
    // gọi BE để lấy danh sách user
    // response là tất cả nội dung mà BE trả về trong đó danh sách user là 1 property
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postList = response.json();
    return postList;
};
getPostList().then((data) => console.log("post list: ", data.length));

const getCommentList = async () => {
    // gọi BE để lấy danh sách comment
    // response là tất cả nội dung mà BE trả về trong đó danh sách comment là 1 property
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
    );
    const commentList = response.json();
    return commentList;
};
getCommentList().then((data) => console.log("comment list: ", data.length));

const getAlbumList = async () => {
    // gọi BE để lấy danh sách album
    // response là tất cả nội dung mà BE trả về trong đó danh sách album là 1 property
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albumList = response.json();
    return albumList;
};
getAlbumList().then((data) => console.log("album list: ", data.length));

const getPhotoList = async () => {
    // gọi BE để lấy danh sách photo
    // response là tất cả nội dung mà BE trả về trong đó danh sách photo là 1 property
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photoList = response.json();
    return photoList;
};
getPhotoList().then((data) => console.log("photo list: ", data.length));

const getTodoList = async () => {
    // gọi BE để lấy danh sách todo
    // response là tất cả nội dung mà BE trả về trong đó danh sách todo là 1 property
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todoList = response.json();
    return todoList;
};
getTodoList().then((data) => console.log("todo list: ", data.length));
