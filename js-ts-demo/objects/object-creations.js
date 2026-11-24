/**
 * Object Creation - Different ways
 */
//1. Using object literals/initializer
let obj = {
    name: "Dhanraj",
    age: 25,
    isMarried: false
}

// console.log(obj.isMarried)

//2. Using constructor fn
// let name = "John"

// function Person(name, age, isMarried){
//     this.name = name
//     this.age = age
//     this.isMarried = isMarried
//     return `The name is: ${this.name}`
// }

// let obj1 = new Person("Uday", 30, true)

// console.log(obj1)

//3. Object create method
// let obj2 = Object.create(obj)
// console.log(Object.getPrototypeOf(obj2))
// console.log(obj2.name);
// console.log(typeof obj2);

let testRunner = "local"
let machineID = "windows12345"
let envFile = "test_config"

let reportData = {
    testID: 12345,
    status: "PASS",
    "PASS/FAIL Flag": "PASS",
    totalTest: 100,
    totalPass: 80,
    isInScope: true,
    passRate () {
        return (this.totalPass/this.totalTest)*100
    },
    runDate: new Date(),
    runner: testRunner,
    windowsID: machineID? machineID : "Unknown",
    [envFile] : {
        env: "staging",
        url: "http://staging.com"
    },
    scope: ["smoke", "reg", "e2e"],
    previousRun: {
        status: "FAIL",
        runID: 6789
    }
}

// console.log(reportData)
// console.log(reportData.isInScope)
// console.log(reportData["isInScope"])
// console.log(reportData["PASS/FAIL Flag"])
// console.log(reportData.passRate())
//console.log(reportData.test_config.env)
// console.log(reportData.scope[1])
// console.log(reportData["previousRun"]["runID"])

// let keys = Object.keys(reportData)
// console.log(keys)
// let values = Object.values(reportData)
// console.log(values)

// reportData.status = "FAIL"
// reportData.previousRun.status = "PASS"
// console.log(reportData)

// let obj1 = {}

// obj1 = reportData
// console.log(obj1)

// for(let key in reportData){
//    // console.log(reportData[key])
//    console.log(`The key: ${key}, and the value: ${JSON.stringify(reportData[key])}`)
// }

//JSON.parse()

Object

let obj4 = {}

let arr = []
let re = /abc/

console.log(obj4.constructor)
console.log(obj4.toString())
console.log(arr.constructor)
console.log(re.constructor)