
/**
 * Assignment Operators
 * =, +=, -=, *=, /=, %=, **=
 */

let a = 10; // Assignment operator (=)

let x = b = 10; // Chained assignment operator
//console.log(x); // Output the value of x after chained assignment
//console.log(b); // Output the value of b after chained assignment

a += 5;
//console.log(a); // Output the value of a after addition




// a -= 3; // Subtraction assignment operator (-=)
// a *= 2; // Multiplication assignment operator (*=)
// a /= 4; // Division assignment operator (/=)
// a %= 3; // Modulus assignment operator (%=)
a **= 2; // Exponentiation assignment operator (**=)
//console.log(a); // Output the value of a after all assignment operations

/**
 * Arithmetic operators
 * +, -, *, /, %, **
 * %, ++, --
 */

// console.log(5/2); // Division operator (/)
// console.log(5%2); // Modulus operator (%)
// console.log(5**2); // Exponentiation operator (**)

// console.log(++a); // Increment operator (++)
// console.log(--a); // Decrement operator (--)

// for (let i=0;i<5;i++){
//     console.log(i); // Output the value of i in each iteration
// }

// for (let i=5;i>0;i--){
//     console.log(i); // Output the value of i in each iteration
// }

//console.log(+"Hello" + 4);

/**
 * Comparison operators
 * ==, ===, !=, !==, >, <, >=, <=
 */

let p = "Five";
let q = 5;

// console.log(p == q);

// console.log(p === q); // Strict equality operator (===)
// console.log(p != q); // Inequality operator (!=)
// console.log(p !== q); // Strict inequality operator (!==)
// console.log(p > q); // Greater than operator (>)
// console.log(p < q); // Less than operator (<)
// console.log(p >= q); // Greater than or equal to operator (>=)
// console.log(p <= q); // Less than or equal to operator (<=)

/**
 * Logical operators
 * &&, ||, !
 */

let val = "";

// if(typeof val === "string" || val.length > 1){
//     console.log("The value is a non-empty string.");
// } else {
//     console.log("The value is either not a string or an empty string.");
// }

let day = "Saturday";

// if(day === "Saturday" || day === "Sunday"){
//     console.log("It's Weekend.");
// } else {
//     console.log("It's a Weekday.");
// }

let firstName = "";

// if(!firstName){
//     console.log("Error: First name is not provided.");
// }

/**
 * Logical operator - OR(||)
 * @use
 * To assign a default value
 */

let targetBrowser = "abc";

let browser = targetBrowser || "Chrome"; // Assign a default value using OR(||) operator
//console.log(browser); // Output the value of browser after assigning the default value

/**
 * Ternary operator (?:)
 * @use
 * To assign a value based on a condition
 * @syntax
 * condition ? valueIfTrue : valueIfFalse
 */

let runner = "cloud";
 
// let logLevel = runner === "local" ? "Info" : "Error";
// console.log(logLevel); // Output the value of logLevel after using the ternary operator

let logLevel = runner === "local" ? "Info" : runner === "cloud" ? "Warning" : "Error";
console.log(logLevel); // Output the value of logLevel after using the ternary operator
