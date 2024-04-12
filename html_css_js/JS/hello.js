// console.log("Hello World");
// var num = 1;
// let intro = "hello world";
// const NUMBER_OF_STUDENT = 100;
// console.log("number: ", num);
// console.log("intro: ", intro);
// console.log("NUMBER_OF_STUDENT: ", NUMBER_OF_STUDENT);

/* 
var:
  - global hoặc block
let & const:
  - block scope
*/

// {
//     var x1 = 1;
//     console.log("in block: ", x1);
// }
// console.log("global: ", x1);

// {
//     let x1 = 1; //block scope
//     console.log("in block: ", x1);
// }
// console.log("global: ", x1); //lỗi

// {
//     const x1 = 1; //block scope
//     console.log("in block: ", x1);
// }
// console.log("global: ", x1); //lỗi

// var x1 = 1;
// var x1 = 5;
// console.log(x1);

// let x1 = 5;
// let x1 = 1;
// console.log(x1);

// Phân biệt var - let -const:
// - var: global scope, let & const: block scope
// -var, let: có thể thay đổi, const: không thể thay đổi được
// - var: redeclared, let & const: không thể redeclared
// - var: co hoisting, let & const: khong co hoising
// (hoisting la viec cac dong code khai bao se duoc dich chuyen len tren cung)

// console.log(x);
// var x = 100;

// let person1 = { name: "nga", age: 22 };
// let person2 = person1;
// person2 = { name: "son", age: 19 };
// console.log(person1);
// console.log(person2);

function show() {
    var x = 2;
    console.log(x);
}
console.log(x);
