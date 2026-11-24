/**
 * Try Catch demo
 */

const helper = require("./throw-demo")

let filePath
try {
    filePath = `${process.cwd()}/data/sampleData.json`
    let data = helper.readFile(filePath)
    let dataObj = JSON.parse(data)
    console.log(dataObj) 
} catch (error) {
    console.log('Handle the error')

    /**
     * Retry
     * Log the error message
     * Custom error
     */

    console.log(typeof error)
    console.log(error.name)
    console.log(error.message)
    let customeErr = `Error reading the file: ${filePath}. ${error}`
    throw customeErr
}