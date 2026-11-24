/**
 * Callback function
 */

// function a(){
//     console.log("function a...")
// }

// function b(){
//     setTimeout(()=>{
//        console.log("function b...")
//     }, 2000)
// }

// function c(){
//     console.log("function c...")
// }

// //Calling
// a()
// b()
// c()

function printMessage(msg){
    console.log(`Calling the callback function`)
    console.log(msg)
}

function greet(name, greeter) {
    console.log(`Calling the main function...`)
    let greetMsg = `Hello, ${name}` // action of async operations
    let outputOfCallBackFn = greeter(greetMsg) // the processed value will be attached to the call back function
    return outputOfCallBackFn
}

//option 1
//greet("Dhanraj", printMessage)

//option 2
// greet("Dhanraj" , function(val){
//     console.log(`The received value from the main function: ${val}`);
// })

//option 3
let result = greet("Dhanraj", res => {
    return `The received value from the main function: ${res}`
})
console.log(result);

// return statement in callback functions

// let res = printMessage("Hello")
// console.log(res)