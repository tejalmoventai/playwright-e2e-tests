"use strict";
class Counter {
    constructor(startAt) {
        this.count = startAt;
    }
    increment() {
        this.count += 1;
    }
    getCount() {
        return this.count;
    }
}
let c = new Counter(5);
c.increment(); //6
c.increment(); //7
console.log(c.getCount()); //7
class BankAccount {
    constructor(accounHolder, startingBalance) {
        this.accountHolder = accounHolder;
        this.balance = startingBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
let acct = new BankAccount("Dhanraj", 1000);
acct.deposit(5000);
console.log(acct.getBalance());
console.log(acct.accountHolder);
//console.log(acct.balance)
