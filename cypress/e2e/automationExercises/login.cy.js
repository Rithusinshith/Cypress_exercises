import logInPage from "../pageObjects/login";

describe('As a registered user, I can login into the website', () => {
  
    it('Verify that a non registered user can register to the website', () => {

        logInPage.homePage()
        logInPage.navigateToLoginPage()
        logInPage.enterUserCreds()
        logInPage.clickLoginButton()
        logInPage.validateuserLoggedIn


    })

})