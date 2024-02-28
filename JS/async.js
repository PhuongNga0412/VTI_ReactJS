// es6
// - arrow function

// const { reject } = require("async");

// function sum(a,b){
//     return a+b;
// }

// function intro(){
//     console.log('hello world');
// }

// const sum1 = () => {};
// const intro1 = () => {
//     console.log("hello world");
// };
// intro1();

// const introWithName = (name1) => {
//     console.log("Hello", name1);
// };
// introWithName("Nga");

// const syncFunction = () => {
//     console.log("first");
//     console.log("second");
//     console.log("third");
// };
// const asyncFunction = () => {
//     console.log("first");
//     setTimeout(() => console.log("second"), 1000);
//     console.log("third");
// };
// asyncFunction();
// ---------------------------------------------------------------

// câu hỏi pv liên quan đến async (bất đồng bộ)
// - js là đơn luồng hay đa luồng
// - event loop là gì
// - phân biệt callback- promise- async/await
// - callback hell là gì
// - promise chain là gì

// setTimeout(() => {
//     console.log("an toi");
//     setTimeout(() => {
//         console.log("rua bat");
//         setTimeout(() => {
//             console.log("choi game");
//             setTimeout(() => console.log("..."), 1000);
//         });
//     }, 1000);
// }, 1000);
// ---------------------------------------------------------------

// promise thuộc es7
// khai báo:
// - promise bản chất là 1 js Object
// - nó gồm 3 status: pending, funfilled, rejected

// ban đầu: pending
// th1: fullfiled --> trả về data
// th2:

// VD1:
// const myPromise = new Promise((resolve, reject) => {});
// console.log(typeof myPromise);
// console.log(myPromise);
// ---------------------------------------------------------------

// VD2:
// const promise = new Promise((resolve, reject) => {
//     //xử lý bất đồng bộ ở đây
//     // fulfilled - xử lý bất đồng bộ thành công thì chạy resolve()
//     setTimeout(() => resolve(1500), 2000);
// });
// const fulfilledCallback = (data) =>
//     console.log("Xử lý bất đồng bộ thành công: ", data);
// const rejectCallback = () => console.log("Xử lý bất đồng bộ thất bại");
// const finalCallback = () => console.log("Chắc chắn sẽ vào đây");

// promise.then(fulfilledCallback).catch(rejectCallback).finally(finalCallback);
// ---------------------------------------------------------------

// - promise la 1 js object
// - promise co 3 trang thai: pending(default), fulfilled / rejected
// const promise = new Promise((resolve, reject) => {
//     // xu ly bat dong bo, nhung cong viec ton thoi gian
//     const isSuccessful = true;

//     if (isSuccessful) {
//         // xu ly bat dong bo that bai ---> rejected ---> chay reject()
//         // resolve();
//         resolve({ id: 1, user: "son" });
//     } else {
//         // neu xu ly bat dong bo thanh cong ---> fulfilled ---> chay resolve()
//         reject();
//         reject("some error!!!");
//     }
// });
// promise
//     .then((data) => {
//         // xu ly tiep sau khi nhan duoc data
//         console.log("xu ly thanh cong", data); // xu ly thanh cong: undefined
//         // xu ly thanh cong: { id: 1, user: "son" }
//     })
//     .catch((err) => {
//         // hien thi loi
//         console.log("xu ly that bai: ", err); // xu ly that bai: undefined
//         // xu ly that bai: some error!!!
//     })
//     .finally(() => {});
// console.log(typeof promise);
// console.log(promise);
// ---------------------------------------------------------------

// VD3: promise chain
// const promise = new Promise((resolve, reject) => {
//     // xu ly bat dong bo
//     setTimeout(resolve, 1000, 0);
//     // setTimeout(() => {}, 1000, 0);
// });
// promise
//     .then((data) => {
//         console.log("first", data); // first: 0
//         return 1;
//     })
//     .then((data) => {
//         console.log("second", data); // first: 1
//         return 2;
//     })
//     .then((data) => {
//         console.log("third", data); // first: 2
//     })
//     .then((data) => {
//         console.log(".....");
//     })
//     .catch((err) => console.log("err: ", err))
//     .finally(() => console.log("finally"));
// ---------------------------------------------------------------

// async:
// const promise = new Promise((resolve, reject) => {
//     // mo phong viec xu ly bat dong bo
//     console.log("an toi");
//     setTimeout(() => {
//         resolve("da an toi xong");
//     }, 1000);
// });
// promise
//     .then((data) => {
//         console.log(data);
//         console.log("rua bat");
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("da rua bat xong");
//             }, 1000);
//         });
//     })
//     .then((data) => {
//         console.log(data);
//         console.log("choi game");
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(".....");
//             }, 1000);
//         });
//     })
//     .catch((err) => console.log("err: ", err))
//     .finally(() => console.log("finally"));
// ---------------------------------------------------------------

// async - await
// const eatingDinner = () => {
//     console.log("an toi");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("da an toi xong");
//         }, 1000);
//     });
// };

// const washingDishes = () => {
//     console.log("rua bat");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("da rua bat xong");
//         }, 1000);
//     });
// };

// const playingGame = () => {
//     console.log("choi game");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(".....");
//         }, 1000);
//     });
// };

// const eveningActivities = async () => {
//     const activityResult = await eatingDinner();
//     console.log(activityResult);
//     const activity2Result = await washingDishes();
//     console.log(activity2Result);
//     const activity3Result = await playingGame();
//     console.log(activity3Result);
// };

// // console.log(eveningActivities);
// eveningActivities().then(() => console.log("done"));
// ---------------------------------------------------------------

// VD4:
// get
