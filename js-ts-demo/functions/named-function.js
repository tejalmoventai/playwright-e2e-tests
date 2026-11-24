
//1. Function that returns a value
function addTwoNumbers(num1, num2){
    let sum = num1 + num2
    //console.log(sum);
    return sum
}

//2. function that does an action
function click(ele){
    console.log(`Clicking the given ele: ${ele}`)
    //ele.click()
}

//3. Calling
//let sum = addTwoNumbers(2,3);
addTwoNumbers(2,3);
//console.log(sum);
click("loginBtn");

//4. any type of data can be provided and no type checking is done
//let sum = addTwoNumbers("Two",3);
//console.log(sum);

//5. more or less args can be provided
//let sum = addTwoNumbers(3);
// let sum = addTwoNumbers();
let sum = addTwoNumbers(2, 3, 5);
console.log(sum);

console.log(typeof addTwoNumbers(2, 3))