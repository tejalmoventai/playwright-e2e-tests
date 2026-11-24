/**
 * Real time promise
 */

const fetch = require("node-fetch")

// function getAPIResponse(){
//     fetch("https://api.github.com/users/github").then((res)=>{
//         return res.json();
//     }).then((updateRes)=>{
//         console.log(updateRes)
//     }).catch((err)=>{
//         console.log(err)
//     })
// }

// async function getAPIResponse(){
//     let response = await fetch("https://api.github.com/users/github")
//     let data = await response.json()
//     console.log(data)
// }

// getAPIResponse();

function addTwoNumbers(num1, num2){
    let sum = num1 + num2
    return sum
}

console.log(addTwoNumbers.length)
console.log(addTwoNumbers.toString())