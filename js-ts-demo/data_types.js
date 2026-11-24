
//string
let str = 'Hello';
let str2 = "Hello";

let str3 = `${str}, World!`;
let str4 = `${str}, Uday`;

//console.log(str3);

//number
let num = 5;
let num1 = 5.5;

//boolean
let bool = false;

//Object
let obj = {}

//Array
let arr = []

//Regexp
let reg = /abc/

//undefined
let val1;

let tempObj = null;

// console.log(`the type of str is: ${typeof str}`);
// console.log(`the type of num is: ${typeof num}`);
// console.log(`the type of bool is: ${typeof bool}`);
// console.log(`the type of obj is: ${typeof obj}`);
// console.log(`the type of arr is: ${typeof arr}`);
// console.log(`the type of reg is: ${typeof reg}`);
// console.log(`the type of val1 is: ${typeof val1}`);
// console.log(`the type of tempObj is: ${typeof tempObj}`);

// console.log("Hello, World!");

//console.log(true);
let bool1 = true;
// console.log(bool1);
// console.log(1<2);

function sum(num1, num2){
    return num1 + num2; //return type is a number
}

//console.log(sum(3, 4)); // Expected output: 7
//console.log(typeof(sum(3, 4)));

/**
 * false
 * undefined
 * null
 * 0
 * NaN
 * ""
 */


let val = undefined;

// if(val){
//     console.log("val is true");
// } else{
//     console.log(`Given value ${val} is falsy values...`);
// }

// let val2 = 5 + undefined;
// console.log(`The value of val2 is: ${val2}`); 

// let val3 = 5 + null;
// console.log(`The value of val3 is: ${val3}`); 

let val4 = "5"
let val5 = "5.5"

// console.log(`The type of val4 is: ${typeof val4}`);
// console.log(`The type of val5 is: ${typeof val5}`);

// Converting string to number

// numval1 = parseInt(val4);
// numval2 = parseFloat(val5);

//unary plus operator
// numval1 = +val4;
// numval2 = +val5;
// console.log(`The type of val4 is: ${typeof numval1}`);
// console.log(`The type of val5 is: ${typeof numval2}`);

// let strVal = numval1.toString();

// console.log(`The type of val4 is: ${typeof strVal}`);

let day = "Monday";
console.log(day);
console.log(day.toUpperCase());
console.log(day);

// let a = 0;


// a = "10";

// Stack               Heap(pool of objects --> string pool)

// |a| ref1| -------> "10"

// a = "20"
// |a| ref2| -------> "20"
//                    "10"


