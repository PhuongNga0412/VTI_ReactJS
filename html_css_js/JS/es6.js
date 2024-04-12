// 1. let, const
// {
//     let x1 = ...
//     const y1 = ...
//     console.log(x1)
//     console.log(y1)
// }
//     console.log(x1)
//     console.log(y1)
// ---------------------------------------------------------------

// 2. arrow function
// const intro = () => console.log("hello world");
// const sum = (a, b) => {
//     return a + b;
// };
// ---------------------------------------------------------------

// 3. template string
// const myName = "Nga";
// console.log(`Hello ${myName}`);
// ---------------------------------------------------------------

// 4. destructuring
// const product = {
//     id: 1,
//     productName: "laptop abc",
//     productType: "pc",
//     price: 1000,
//     quantity: 5,
// };
// // const id = product.id;
// // const productName = product.productName;
// // const productType = product.productType;
// // const price = product.price;
// // const quantity = product.quantity;
// const { id, productName, productType, price, quantity } = product;
// console.log(`id: ${id}`);
// console.log(`productName: ${productName}`);
// console.log(`productType: ${productType}`);
// console.log(`price: ${price}`);
// console.log(`quantity: ${quantity}`);

// const myArr = ["a", "b", "c", "d"];
// // const firstItem = myArr[0];
// const [firstItem, secondItem, thirdItem, fourthItem] = myArr;
// console.log(`first item: ${firstItem}`);
// console.log(`second item: ${secondItem}`);
// console.log(`third item: ${thirdItem}`);
// console.log(`fourth item: ${fourthItem}`);
// ---------------------------------------------------------------

// 5. spread operator ...
const person = {
    fullName: "Phuong Nga",
    age: 50,
};

const car = {
    id: 1,
    carName: "bmw",
};

const house = {
    location: "hanoi",
    price: 1_000_000_000,
};

const myCar = {
    ...person,
    ...car,
    ...house,
};
console.log(myCar);

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr12 = [...arr1, ...arr2];
console.log(arr12);

// ---------------------------------------------------------------
