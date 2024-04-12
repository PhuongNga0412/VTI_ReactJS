// 1
// function scope

// 2
// function printName() {
//     console.log("FE");
// }
// var myName = printName;
// myName();

// 3
// function getGreeting(firstName, lastName) {
//     function greeting() {
//         return `${firstName} ${lastName}`;
//     }
//     return greeting();
// }
// console.log(getGreeting("Phuong", "Nga"));

// // 4
// function printNumbers() {
//     for (let i = 1; i <= 6; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
// }

// printNumbers();

// // 5
// const cal = {
//     square: (x) => x * x,
//     squareRoot: (x) => Math.sqrt(x),
// };
// console.log(cal.square(4));
// console.log(cal.squareRoot(4));

// // 6
// const generateObject = () => {
//     let id = 0;
//     return {
//         getId: () => {
//             return id;
//         },
//         setId: (newID) => {
//             id = newID;
//         },
//     };
// };
// const obj = generateObject();
// console.log(obj, typeof obj);
// obj.setId(12);
// console.log(obj.getId());

// // detrucsturing
// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];
// const arr3 = [...arr1, ...arr2];

// function spread(a, b) {
//     console.log(a, b);
// }
// spread(2, 3, 4, 5); // Output: 2, 3

// function spread1(a, ...rest) {
//     console.log("result", a, rest);
// }
// spread1(2, 3, 4, 5); // Output: 2, 3, 4, 5

// // VD
// const obj2 = {
//     namee: "dao tuan anh",
//     gender: "female",
//     age: 12,
//     city: "Ha Noi",
// };
// // const { namee, gender } = obj2;
// const { namee, gender, ...rest } = obj2;
// console.log(namee, gender);

// // VD4
// const date = [2020, 12, 8];
// const [year, month, day, ...resting] = date;
// console.log(`${day}/${month}/${year}`);
// console.log(resting);

// // Variable
// // 1. var
// var name = "Global";
// function printName() {
//     var name1 = "Local";
//     console.log(name1);
//     console.log(name);
// }
// printName();

// // 2. let
// let name2 = "Global";
// function printName() {
//     let name3 = "Local";
//     console.log(name2);
//     console.log(nam3);
// }
// printName();

//
const array1 = [2, 4, 6, 8, 10];
const array2 = [...array1, 5, 6, 7, 8, 9];
console.log(array2);

// 6. Arrow function
// (a) => a + 100;
// (a, b) => a + b + 100;
// (a, b) => a + b + 42;
// const bob = (a) => a + 100;

// 9. Currying function
// function multiply(a) {
//     return (b) => {
//         return (c) => {
//             return a * b * c;
//         };
//     };
// }
// let result = multiply(2)(3)(5);
// console.log(result);

// 10. Parameter
// const multiply = (a, b = 1) => a * b;
// console.log(5, 3);
// console.log(5);

// const multiply = (...number) => {
//     return number.reduce((a, b) => a * b);
// };
// console.log(multiply(4, 5, 6));

function printInformation(name, email = "tôi chưa có email") {
    // if (email === undefined) console.log(`Tôi là ${name}. ${email}`);
    // else console.log(`Tôi là ${name}. Tôi chưa có email`);
    switch (email) {
        case "tôi chưa có email":
            console.log(`tôi là ${name}. ${email}`);
            break;

        default:
            console.log(`tôi là ${name}. Email của tôi là ${email}`);
            break;
    }
}
printInformation("Nam", "Namvv20@gmail.com");
printInformation("Nam");

// function add(a) {
//     return function (b) {
//         return a + b;
//     };
// }
// const valueA = add(10);
// const valueB = valueA(10);
// console.log(valueA);
// console.log(valueB);
