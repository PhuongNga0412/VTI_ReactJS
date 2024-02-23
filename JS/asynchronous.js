// console.log("first");
// console.log("second");
// console.log("third");

// console.log("first");
// setTimeout(function () {
//     console.log("second");
// }, 0); //đợi 1 khoảng thời gian theo ms, hết khoảng thời gian đấy thì chạy code trong function
// console.log("third");

// ==== Call back
function greet(name) {
    console.log(`Hello ${name}`);
}
function greetFEClass(fn) {
    const className = "VTI FE 2043";
    fn(className);
}
greetFEClass(greet);
