
//1. retrun a single premitive value
//2. return an expression
//3. return an object

// function addTwoNumbers(num1, num2){
//     let sum = num1 + num2
//     return {total: sum}
// }

// let totalOfNum = addTwoNumbers(3,4)
// console.log(totalOfNum.total)

//4. retun a function itself
// returning a function
// function addTwoNumbers(num1, num2){
//     return function () {
//         return num1 + num2
//     }
// }
// let total = addTwoNumbers(5,8)
// console.log(total());

//5. retun statement in conditional statement

function addTwoNumbers(num1, num2){
    if(!num2) return 0
    return num1 + num2
}
console.log(addTwoNumbers(3));