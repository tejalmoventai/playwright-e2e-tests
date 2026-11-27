
// let message : string = "Hello"

//import test from "node:test"

// let age = 20
// let isActive : boolean = false

// let message1 : any = "Hello"

// message1 = 2

// console.log(message)

// let numArr : number[] = [1, 2, 3, 4]

// console.log(numArr[3])

// let user : {name:string, age:number} = {name:"Dhanraj", age:25}

// function addTwoNum1(a :number,b: number) : number {
//    return a+b
// }

// console.log(addTwoNum1(3,4))

interface User {
   id: number,
   name: string,
   email: string,
   isActive: boolean
}

const testUser : User = {
   id: 1,
   name: "Uday",
   email: "test@gmail.com",
   isActive: true
}

interface Order {
   orderId: string,
   user: User,
   amount: number
}

/**
 * Enums
 */

enum OrderStatus {
   Pending = "PENDING",
   Shipped = "SHIPPED",
   Delivered = "DELIVERED",
   Cancelled = "CANCELLED"
}

const status1: OrderStatus = OrderStatus.Shipped
 console.log(status1)

console.log(testUser.name)

// const {name, email} = testUser

//  console.log(name)

const {name: userName, email: userEmail} = testUser

console.log(userName)

console.log(userEmail)

