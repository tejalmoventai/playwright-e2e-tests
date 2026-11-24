import { resolve } from "node:dns";
import defaultConfig from "./config";
import { OrderStatus, Order } from "./models";
import type { User } from "./models";
import { error } from "node:console";

//console.log(defaultConfig.baseUrl)

let testUser : User = {
   id: 1,
   name: "Uday",
   email: "test@gmail.com",
   isActive: true
}

let testOrder: Order ={
    orderId: "ORD-1001",
    user: testUser,
    amount: 2000,
    status: OrderStatus.Shipped
}

//console.log(`Order ${testOrder.orderId} is ${testOrder.status} of user ${testOrder.user.email}`)

function wait (ms: number) : Promise<string> {
    return new Promise((resolve) =>{
        setTimeout(()=> resolve(`waited ${ms}ms`), ms)
    })
}

wait(200).then((result)=> console.log(result))

function checkElementVisible() : Promise<String>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(Math.random() > 0.5) {
                resolve("visible")
            } else {
                reject(new Error("not found"))
            }
        }, 50)
    })
}

async function run() : Promise<void>{
    try{
        const result = await checkElementVisible()
        console.log("Success:", result)
    } catch (error){
        console.log("Failed:", (error as Error).message)
    }
}

run()