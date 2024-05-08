import registerPage from "../PageObjects/registrationPage";


describe('As a user I want to register on the page', () => {
  
    it('Verify that a non registered user can register to the website', () => {

        registerPage.homepage()
        registerPage.navigateToRegister()
        registerPage.enterUserInformationAndSignup()
        registerPage.gender()
        registerPage.enterPassword()
        registerPage.enterBirth()
        registerPage.checkNewsletterAndOffers()
        registerPage.enterFirstNameAndLastName()
        registerPage.enterCompany()
        registerPage.enterAddress()
        registerPage.enterMobile()
        registerPage.checkNewsletterAndOffers()
        registerPage.clickCreateBtn()
        registerPage.accountCreatedConfirmation()
        registerPage.clickContinueBtn()
        registerPage.deleteAccountBtn()
    })

})  