/**
 * Self Invoking function
 */

// (function addTwoNumbers(num1, num2){
//     let sum = num1 + num2
//     console.log(sum);
//     return sum
// })(4,5)

(function greet(name, greeting = "Hello"){
    console.log(`${greeting},${name}`);
})("Dhanraj")