
//1. Default param

// function greet(name, greeting = "Hello"){
//     console.log(`${greeting},${name}`);
// }

// greet("Dhanraj","Hi");

//2. passing undefined/any falsy values if not known

// function printFullName(fName, mName, lName){
//     console.log(`${fName} ${mName} ${lName}`)
//     if(mName){
//         console.log(`${fName} ${mName} ${lName}`)
//     } else{
//         console.log(`${fName} ${lName}`)
//     }
// }

// printFullName("Dhanraj", "", "Kamble")

//3. passing primitives, object type as arg
function printFullName (personObj){
    console.log(`${personObj.firstName}, ${personObj.lastName}`)
}

printFullName({
   firstName: "Dhanraj",
   lastName: "Kamble" 
})