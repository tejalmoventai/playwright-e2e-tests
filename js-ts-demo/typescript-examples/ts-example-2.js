"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
//console.log(defaultConfig.baseUrl)
let testUser = {
    id: 1,
    name: "Uday",
    email: "test@gmail.com",
    isActive: true
};
let testOrder = {
    orderId: "ORD-1001",
    user: testUser,
    amount: 2000,
    status: models_1.OrderStatus.Shipped
};
//console.log(`Order ${testOrder.orderId} is ${testOrder.status} of user ${testOrder.user.email}`)
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`waited ${ms}ms`), ms);
    });
}
wait(200).then((result) => console.log(result));
function checkElementVisible() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("visible");
            }
            else {
                reject(new Error("not found"));
            }
        }, 50);
    });
}
async function run() {
    try {
        const result = await checkElementVisible();
        console.log("Success:", result);
    }
    catch (error) {
        console.log("Failed:", error.message);
    }
}
run();
