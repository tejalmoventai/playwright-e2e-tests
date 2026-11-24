/**
 * Rest parameter and arguments object
 * @definition
 * 1. the rest param is denoted by ...<parameName>
 * The rest parameter syntax allows us to represent an indefinite number of arguments as an array
 * 
 * 2. arguments object made vailable within the function body
 * 3. The arguments can be access by array-like notation arguments[i]
 * 4. it has an length property
 */

function sum(...numN){
    console.log(arguments);
    console.log(arguments[2])
    console.log(arguments.length)
    let total = 0;
    for (let index = 0; index < arguments.length; index++) {
        total +=arguments[index]        
    }
    return total
}

console.log(sum(2,2,6));