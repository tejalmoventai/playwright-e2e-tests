"use strict";
// let message : string = "Hello"
Object.defineProperty(exports, "__esModule", { value: true });
let testUser = {
    id: 1,
    name: "Uday",
    email: "test@gmail.com",
    isActive: true
};
/**
 * Enums
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
const status1 = OrderStatus.Shipped;
// console.log(status1)
//console.log(testUser.name)
const { name, email } = testUser;
// console.log(name)
const { name: userName, email: userEmail } = testUser;
console.log(userName);
console.log(userEmail);
