import logInPage from "../pageObjects/login";

describe('As a registered user, I can login into the website', () => {
  
    it('Verify that a registered user can login to the website', () => {

        logInPage.homePage()
        logInPage.navigateToLoginPage()
        logInPage.enterUserCreds()
        logInPage.clickLoginButton()
        logInPage.validateuserLoggedIn


    })

})