// number1, number2 thuoc kieu du lieu primititive

let number1 = 1;
let number2 = number1;
number1 += 10;
console.log("number1: ", number1);
console.log("number2: ", number2);

let str1 = "hello";
let str2 = str1;
str1 = "hi";
console.log(str1);
console.log(str2);

let bool1 = true;
let bool2 = bool1;
bool1 = false;
console.log(bool1);
console.log(bool2);

let student1 = { id: 1 };
let student2 = student1;
student1.id = 2;
console.log(student1);
console.log(student2);

// let arr1 = [1];
// let arr2 = arr1;
// arr1.push(2);
// console.log(arr1);
// console.log(arr2);

const arr1 = [1];
const arr2 = arr1;
const arr3 = structuredClone(arr1);
arr1 = [1, 2];
console.log(arr1);
console.log(arr2);

console.log(arr3);
