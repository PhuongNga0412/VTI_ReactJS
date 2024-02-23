let numbers = [1, 2, 3, 4, 5];

// 1. forEach: Interates through each element of the array = for
numbers.forEach(function (num) {
    console.log(num);
});

// 2. map: Tranforms each element of the array and returns a new array
let squaredNumbers = numbers.map(function (num) {
    return num * num;
});
console.log(numbers);
console.log(squaredNumbers);
