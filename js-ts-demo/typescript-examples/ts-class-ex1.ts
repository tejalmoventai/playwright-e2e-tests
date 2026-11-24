// class Counter {
//     count: number

//     constructor(startAt: number){
//         this.count = startAt
//     }

//     increment() : void {
//         this.count +=1
//     }

//     getCount(): number {
//         return this.count
//     }
// }

// let c = new Counter(5)

// c.increment() //6
// c.increment() //7
// console.log(c.getCount()) //7

// class BankAccount {
//     public accountHolder : string
//     private balance: number

//     constructor(accounHolder: string, startingBalance: number){
//         this.accountHolder = accounHolder
//         this.balance = startingBalance
//     }

//     deposit(amount: number): void{
//         this.balance += amount
//     }

//     getBalance() : number {
//         return this.balance
//     }
// }

// let acct = new BankAccount("Dhanraj", 1000)
// acct.deposit(5000)
// console.log(acct.getBalance())
// console.log(acct.accountHolder)
// //console.log(acct.balance)

class BasePage {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  describe(): string {
    return `A page at ${this.url}`;
  }
}

// class LoginPage extends BasePage {
//     constructor(){
//         super("test.com/login")
//     }
// }

class LoginPage extends BasePage {
  constructor() {
    super("test.com/login");
  }

  describe(): string {
    const baseDesc = super.describe();
    return `${baseDesc} (The login page)`;
    this.url = "";
  }
}

const login = new LoginPage();
console.log(login.describe());
//const basePage = new BasePage("")
//basePage.describe()

// /**
//  * Abstract class
//  * 1. at least one abstract method
//  * 2. it can't be instantiated
//  * 3. only extend is possible
//  */

// abstract class BasePage1 {
//     protected url: string

//     constructor(url: string){
//         this.url = url
//     }

//     abstract goto() : void

//     logCurrentUrl() : void {
//         console.log(`Currently at : ${this.url}`)
//     }
// }

// class LoginPage1 extends BasePage1 {
//     constructor(){
//         super("test.com/login")

//     }

//     goto(): void {
//         console.log(`Navigating to ${this.url}`)
//     }
// }

// const loginPage1 = new LoginPage1()
// loginPage1.goto()

/**
 * ESLint & Formatter
 * Why lint and format tooling
 * A linter (ESLint) catches real problems in your code — unused variables, unreachable code,
 * patterns known to cause bugs — before you run anything.
 * A formatter (Prettier) enforces one consistent visual style automatically,
 * so nobody spends review time debating tabs vs. spaces.
 * Together they catch mistakes early and remove an entire category of pointless disagreement
 * from code review.
 */

const a = 42;

function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Dhanraj"));

// Husky : enforcing checks before a commit can heppen
