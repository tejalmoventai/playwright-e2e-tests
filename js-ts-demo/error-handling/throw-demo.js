/**
 * throw
 * 
 * @syntax
 * throw expression
 * 
 */
const fs = require('fs')

// let err = new Error('Error message')
// console.log(err)

//throw 'Failed due to ....'
//console.log('next execution')



function readFile(filePath){
    if(!fs.existsSync(filePath)){
        throw Error(`Given path: ${filePath} does not exist...`)
    }
    let data = fs.readFileSync(filePath, "utf-8")
    return data
}

// let filePath = `${process.cwd()}/dat/sampleData.json`
// let data = readFile(filePath)
// console.log(data)

module.exports = {
    readFile
}