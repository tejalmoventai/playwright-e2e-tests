/**
 * Adding elements to array
 */

let arr = ["apple", "orange", "banana"]

//1. Assignment operator
arr[3] = "mango"

//2. Using .push() method
arr.push("Kiwi")
arr[1] = "papaya"

arr[20] = "dragon"

console.log(arr)
console.log(`Total elements: ${arr.length}`)

let count = 0
for(let i=0; i<arr.length; i++){
    if(arr[i]){
        count++
    }
}

console.log(`The actual count is: ${count}`)

let arr1 = []
arr1.length = 10
console.log(arr1)
console.log(`Total elements: ${arr1.length}`)