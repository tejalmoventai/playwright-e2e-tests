
/**
 * 1. just if statement
 */

// use case 1: Just if - handling a random popup

let popupExist = true; // assuming the popup exists for demonstration purposes

//if(popupExist === true) console.log("Popup exists! Handling it now...");

// Use case 2: Just if(NOT) - checking for falsy value

let data = "Y"; // assuming no data is available for demonstration purposes

//if(!data) throw Error("No data available!");

// Use case 3: if...else: If file exist read the file, else create the file

let fileExist = "N";

// if(fileExist === "Y"){
//     console.log("Reading the file...");
// } else {
//     console.log("Creating the file...");    
// }

//Use case 4: if...else if...else: Checking multiple conditions

let err = "AssertionError";

// if(err === "Error"){
//     console.log("-----Retry------")
// } else if(err === "AssertionError"){
//     console.log("-----Assertion Failed------");
// } else if(err === "DataValidationError"){
//     console.log("-----Data Validation Failed------");
// } else {
//     console.log("-----Unknown Error------Print the error details");
// }

// Use case 5: if else [inner conditions]: Quering a database for test data

let isSuccess = false;

// if(isSuccess === true){
//  console.log("Storing the db values...");
// } else {
//     console.log("No data received");
//     let errorCode = "ACCEPT";
//     if(errorCode === "ACCEPT"){
//         console.log("Error accepted, taking appropriate action...");
//     } else {
//         console.log("Error not accepted, taking alternative action...");
//     }
// }

//Use case 6: if in loops

for(let i=1;i<=10;i++){
    if(i===6) {
        console.log("Reached 6, breaking the loop...");
    };
    console.log(i);
}