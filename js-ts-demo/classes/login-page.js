const Page = require("./page")

/**
 * Login class
 * 
 * @terminology
 * super -> sub
 * base -> derived
 * parent -> child
 */

class LoginPage extends Page {
    constructor(){
        super()
        console.log(`Calling child class constructor...`)
       // this.runDate = "2026-11-03"
        console.log(`The rundate is:${this.runDate}`)
    }

    //Getter property
    get loginBtn(){
        return 'loginBtn'
    }

    //Click a login button
    clickOnLoginButton(){
        this.click(this.loginBtn)
    }
}

//Object creation
let loginPage = new LoginPage()
console.log(typeof loginPage)
loginPage.navigateToURL("amazon.com")
loginPage.clickOnLoginButton()
