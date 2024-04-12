function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    inner();
}

outer();
outer();

function outer1() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}
const logCounter = outer1();
logCounter();
logCounter();
