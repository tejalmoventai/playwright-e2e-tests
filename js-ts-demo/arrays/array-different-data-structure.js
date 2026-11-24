/**
 * DIfferent Data structure
 */

//.1 Same type of data
//let arr = ["apple", "orange", "banana"]

//2. Different types of data

//let arr = [1, "Two", true]

//3. array containing an object
let arr = [{
    name: "Dhanraj",
    age: 25
}, 
{
    name: "Abhi",
    age: 30
}]

//4. Array containing an array
let arr1 = [[1,2,3],["one", "two"]]

// console.log(arr[1].age)
// console.log(arr1[1][0])

let book = [
    {
        category: "reference",
        author: "abc",
        price: 8.95
    },
    {
        category: "reference1",
        author: "def",
        price: 12.99
    },
    {
        category: "reference2",
        author: "efg",
        price: 8.99
    }
]

let priceArr = []

for(let i = 0; i<book.length; i++){
    let price = book[i].price
    priceArr.push(price)
}

//console.log(priceArr)

let arr2 = [...arr, ...arr1]

// console.log(arr2)
// console.log(arr2.length)

//map method

let givenArr = ["123", "35", "566", "122"]

let modifiedArr = givenArr.map(ele => +ele)

console.log(modifiedArr)

//filter method

//Get a book which are > 10

let res = book.filter(ele => ele.price > 10)
console.log(res)

