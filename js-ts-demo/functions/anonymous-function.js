
//1. Function without name is assigned to a variable

// let addTwoNumbers =  function (num1, num2){
//     let sum = num1 + num2
//     return sum
// }

// console.log(typeof addTwoNumbers)
// let val = addTwoNumbers(2,3);
// console.log(val);

// Function with name is assigned to a variable
let addTwoNumbers =  function add(num1, num2){
    let sum = num1 + num2
    return sum
}

let val = addTwoNumbers(2,3);
console.log(val);