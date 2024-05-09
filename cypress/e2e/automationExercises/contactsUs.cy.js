import contactPage from "../pageObjects/contactUs";
import logInPage from "../pageObjects/login";


describe('As a registered user, I can contact the customer service', () => {
  
    it('Verify that a user can contact the customer service', () => {

       logInPage.homePage() 
       contactPage.navigateToContactUspage()
       contactPage.verifyTheContactUsUrl()
       contactPage.enterTheDetailsAndSubmit()
       contactPage.verifySuccessMessage()
       contactPage.navigateToHome()

    })
})