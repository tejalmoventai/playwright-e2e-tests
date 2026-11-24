/**
 * Merging objects
 */

let obj1 = {
    a:1,
    b:2,
    c:3
}

let obj2 = {
    d:4,
    e:5,
    f:6
}

let obj3 = {
    g:4,
    h:5,
    i:6
}

//Approach 1
// let obj = Object.assign(obj1, obj2)
// console.log(obj)
//  obj1 = Object.assign(obj2, obj3)
//  console.log(obj1)

//Approach 2 - use spread operator
 obj1 = {
    ...obj1,
    ...obj2,
    ...obj3
}
console.log(obj1);