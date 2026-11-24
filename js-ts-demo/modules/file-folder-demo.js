/**
 * Folder Operation
 * @rule
 * fs module expects full path not relative path
 */

const fs = require("fs")

// let reportFolder = fs.existsSync(`${process.cwd()}/allure-reports`)
// let screenshotFolder = fs.existsSync(`${process.cwd()}/screenshot`)

// console.log(reportFolder)
// console.log(screenshotFolder)

// if(reportFolder){
//     fs.rmdirSync(`${process.cwd()}/allure-reports`)
// }

// if(!screenshotFolder){
//     fs.mkdirSync(`${process.cwd()}/screenshot`)
// }

//console.log(fs.readdirSync(`${process.cwd()}/data`))

let filePath = `${process.cwd()}/data/sampleData.json`
let data = fs.readFileSync(filePath, "utf-8")
console.log(data)

console.log(`I want to continue.....`)

// let err = {
//     testid: "TC123",
//     errDesc: "App failed to launch"
// }

//  let filePath = `${process.cwd()}/data/err.json`
// let data = JSON.stringify(err, undefined, 4)
// fs.writeFileSync(filePath, data)

// fs.unlinkSync(filePath)