/**
 * Arrow functions
 */
//1. Convert a normal function to arrow function
let sum = (num1, num2) => {
    let sum = num1 + num2
    return sum
}

let total = sum(5,6);
console.log(total);

//2. No param

let arrowFn = () => 10 > 5

let res = arrowFn()
console.log(res);

// Single param

let greet = name => console.log(`Hello, ${name}`)
greet("Dhanraj")

