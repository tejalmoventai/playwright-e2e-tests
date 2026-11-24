/**
 * process.env
 * it is a global module - can be accessed directly
 * 
 * @usecase
 * set environment variable
 * 
 * @scenarios
 * 1. set env variable at run time
 * 2. to read .env file
 * 
 * @note
 * the env variabl is in UPPER CASE
 */

const process = require("process")

//console.log(process.env)

console.log(process.env["TARGET"])