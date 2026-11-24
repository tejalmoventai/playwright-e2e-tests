/**
 * Get the api response
 */

const fetchUrl = require("fetch").fetchUrl;

fetchUrl("https://api.github.com/users/github", (error, meta, body) =>{
    console.log(body.toString());
})