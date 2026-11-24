
/**
 * 1. text value -> It is a sequence of characters
 */

let text = "Hello World";
//11
//Hello World
//012345678910

// console.log(text.charAt(0)) //H

// console.log(text.charAt(6)) //W

// console.log(text.length) //11

let str = "Hello World";
let str1 = 'Hello World';
let str2 = `Hello World`;
let str3 = String("8");

/**
 * Formatting strings
 * Examples of formatting strings using template literals
 * Example:
 * SBI Bank Statement from 2026-21-09 to 2026-22-10 for account ending with 12345
 */

let startDate = "2026-21-09";
let endDate = "2026-22-10";
let accountNumber = "12345";

let emailSubject = `SBI Bank Statement from ${startDate} to ${endDate} for account ending with ${accountNumber}`;
//console.log(emailSubject); //SBI Bank Statement from 2026-21-09 to 2026-22-10 for account ending with 12345

//2. reverse a string using for loop
// abc -> cba

/**
 * Compare string
 * 1. Full match
 * 2. Partial match
 *  - inclues()
 *  - startsWith()
 *  - endsWith()
 */

// let fileName = "Invoice_456.pdf";

// //full match
// if(fileName === "invoice_456.pdf") {
//     console.log(">>>>Full match");
// }

// if(fileName.toUpperCase() === "INVOICE_456.PDF") {
//     console.log(">>>>Full match");
// }

// //partial camparision

// if(fileName.startsWith("invoice")){
//     console.log(">> yes it sarts with invoice...")
// }

// if(fileName.endsWith(".pdf")){
//     console.log(">> yes it ends with .pdf...")
// }

// if(fileName.includes("_456")){
//     console.log(">> yes it icludes with _456...")
// }

/**
 * Extract substring - use of slice method
 * 
 * @rules
 * 1. it includes start index and exclude end index
 * 2. can specify only the start index
 * 3. can specify the negative range
 */

// let date = "2026-10-23"

// //extract only yy-mm-dd format

// let yymmdd = date.slice(2, 10);
// console.log(yymmdd);

// //extract year

// let year = date.slice(0,4)
// console.log(year);

// let month = date.slice(5,7)
// console.log(month);

// //let day = date.slice(8,10)
// let day = date.slice(-2);
// console.log(day);

/**
 * Relace and replace all
 * 
 */

// let fileName = "invoice_456.pdf"
// let sql_query = `SELECT * FROM {{table_name}}`
// let dt = "2026-10-23"

// //1. Get only the file name
// console.log(fileName.replace(".pdf",""));

// //2. Rename from .pdf -> .txt
// console.log(fileName.replace("pdf","txt"));

// //3. Replace table_name with Accounts
// console.log(sql_query.replace("{{table_name}}","Account"));

// //4.convert the given date format to YYYYMMDD format
// console.log(dt.replaceAll("-",""));

/**
 * Extract string by split method
 */

// let timeStamp = "2026-10-23T18:00:00:007Z";
// let str4 = "Hello World";
// let fileName = "invoice_456.pdf"

// //1. Get only the date part of the timestamp
// let dtArr = timeStamp.split("T")
// console.log(dtArr[0]);

// //2. SPlit by space/first or last char

// let arr = str4.split("d");
// console.log(arr[0]);

// //3. Get only the filename
// let fileArr = fileName.split(".");
// console.log(fileArr[0])

/**
 * Use of indexOf method
 */

// let str5 = "Your Order # {12345} is submitted"

// let start = str5.indexOf("{")
// console.log(start);
// let end = str5.lastIndexOf("}")
// console.log(end);

// let orderNumber = str5.slice(start+1, end)
// console.log(orderNumber);

/**
 * Use of backslash(\) in string
 * Escape character
 */

let name1 = 'this isn\'t possible'

let name2 = 'this isn\"t possible'

console.log(name2);



