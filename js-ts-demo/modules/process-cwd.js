/**
 * process.cwd()
 */

// console.log(process.cwd()) // Where the node command is passed
// console.log(__dirname) // the file where it is currently sitting

let filePath = `${process.cwd()}/data/sampleData.json`
console.log(`The file path is: ${filePath}`)