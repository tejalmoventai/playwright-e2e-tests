/**
 * Create a page class
 */

class Page {
   static runDate = ""

    constructor(){
       
    }

    //Resuable methods
    navigateToURL(url){
        console.log(`>>> Navigating to the given url: ${url}`)
    }

    click(ele){
        console.log(`>>>> CLicking the given ele: ${ele}`)
    }
}

module.exports = Page