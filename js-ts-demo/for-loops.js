
/**
 * Standard for loop
 * 1. Define the strating point
 * 2. Difine the end or exist condition
 * 3. Define the increment/decrement step
 */

// for(let i = 10; i>=1; i--){
//     console.log(i);
// }

// Advanced use case with an array

let arr = ["Apple", 10, "Orange", 20, "Banana", 30];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

arr.push(40);
//console.log(arr[6]);

//console.log(arr.length);

let sum = 0;

// for (let i = 0; i<arr.length; i++){
//     //let sum = 0;
//     let arrEle = arr[i];
//     // if(typeof arrEle === "number"){
//     //     sum += arrEle;
//     // }
//    // console.log(sum);
//    if(typeof arrEle !== "number") continue;
//    sum += arrEle;
// }
// console.log(sum);

//let windows = ["Google", "Amazone", "Youtube"];

// for (let i=0; i<windows.length; i++){
//     let window = windows[i];

//     if(window === "Amazone"){
//         //switch to Youtube window
//         break;
//     }
//     console.log(window);
// }

/**
 * Use of forEach loop
 * 1. it can be used to iterate over each element of an array
 */

// let windows = ["Google", "Amazone", "Youtube"];

// // () => {}

// windows.forEach( (arr) => {
//     console.log(arr);
// })

/**
 * While loop
 * @when to use?
 * 1. When you don't know the number of iterations in advance
 * 2. When you want to loop until a certain condition is met
 * 
 * Scenario:
 *  Waiting for an API response, retry untill success
 */

// Syntax

// let count = 1;
// let isDataReturned = false;
// while(isDataReturned === false && count <=10){
//     console.log(count);
//     // if(count === 5) {
//     //     // We got data from api response
//     //     isDataReturned = true;
//     // }
//     count++;
// }

/**
 * Do-while loop
 * @when to use?
 * 1. When you want to execute the loop at least once
 * 2. When the condition needs to be checked after the loop body
 */
// Syntax

// let count = 1;
// do {
//     console.log(count);
//     count++;
// } while(count <= 10);

/**
 * for...in and for...of loops
 * @when to use?
 * 1. for...in is used to iterate over the properties of an Object
 * 2. for...of is used to iterate over an Array
 */

let obj = {
    a : 10,
    b : 20,
    c : 30
};
console.log(obj["a"]);

let windows = ["Google", "Amazone", "Youtube"];

console.log(windows[0]);

// for ... in loop
for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}

// for ...of loop

for (let ele of windows){
    console.log(ele);
}

//Reverse a number

let num = 123;

//output: 321

// 123 % 10 = 3 
// 123/10 = 12.3 => 12

// 12 % 10 = 2
// 12/10 = 1.2 => 1

// 1 % 10 = 1

// 3



let reverseNum = 0;

while(num > 0){
    reverseNum = reverseNum * 10 + num % 10; // 0*10+3 = 3, 3*10+2 = 32, 32*10+1 = 321
    num = Math.floor(num/10); // 123/10 = 12, 12/10 = 1, 1/10 = 0
}

    console.log(reverseNum);

// 1. Go through all Math functions and understand how they work
// Math functions include:
// Math.ceil, Math.floor, Math.max, Math.min, Math.round, Math.trunc
    

