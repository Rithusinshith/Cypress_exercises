import {faker} from '@faker-js/faker'

const ranDay = () => Cypress._.random(0, 10);
const rdmDay = ranDay();
const ranYear = () => Cypress._.random(1940, 2000);
const rdmYear = ranYear();

const nameofUser =`${faker.person.firstName()} ${faker.person.lastName()}`
const emailofuser =faker.internet.email()

const signupPage = '.navbar-nav >li:nth-child(4) > a'
const signupName = '[data-qa="signup-name"]'
const signupEmail ='[data-qa="signup-email"]'
const signupButton = '[data-qa="signup-button"]'
const title = '#id_gender2'
const userName = '[data-qa="name]'
const userEmail = '[data-qa="email"]'
const password = '#password'
const dateOfBirth = '#days'
const monthOfBirth = '#months'
const yearOfBirth = '#years'
const signupForNewsLetter = '#newsletter'
const receiveSpecialOffer = '#optin'
const firstName = '#first_name'
const lastName = '#last_name'
const companyName = '#company'
const addessLine1 = '#address1'
const addessLine2 = '#address2'
const country = '#country'
const state = '#state'
const city = '#city'
const zipcode = '#zipcode'
const mobileNumber = '#mobile_number'
const createAccountBtn ='[data-qa="create-account"]'
const accountCreatedMessage = '.title'
const continueBtn ='[data-qa="continue-button"]'
const logOut = '.fa-lock'
const deleteAccountBtn = '.fa-trash-o'
//const confirmDeleteBtn = '.modal-footer > .button-form > .btn'



class registerPage{
    static homepage(){

        cy.visit(`${Cypress.env('baseUrl')}`)
    }

    static navigateToRegister(){
        cy.get(signupPage).click()
    }

    static enterUserInformationAndSignup(){
      
        cy.get(signupName).type(nameofUser)
        cy.get(signupEmail).type(emailofuser)
        cy.get(signupButton).click()
    }

    static gender(){
        cy.get(title).check()
    }

    static verifyTheName(){
        cy.get(userName).should('contain.text',nameofUser)

    }

    static verifyTheEmail(){
        cy.get(userEmail).should('contain.text',emailofuser)

    }

    static enterPassword() {
        cy.get(password).type(faker.internet.password());
    }

    static enterBirth() {
        cy.get(dateOfBirth).select(rdmDay);
        cy.get(monthOfBirth).select(faker.date.month());
        cy.get(yearOfBirth).select(rdmYear.toString());
    }

    static checkNewsletterAndOffers() {
        cy.get(signupForNewsLetter).check();
        cy.get(receiveSpecialOffer).check();
    }
    static enterFirstNameAndLastName() {
        cy.get(firstName).type(faker.person.firstName());
        cy.get(lastName).type(faker.person.lastName());
    }
    static enterCompany() {
        cy.get(companyName).type(faker.company.name());
    }

    static enterAddress() {
        cy.get(addessLine1).type(faker.location.street());
        cy.get(addessLine2).type(faker.location.secondaryAddress());
        cy.get(country).select('Australia');
        cy.get(state).type(faker.location.state());
        cy.get(city).type(faker.location.city());
        cy.get(zipcode).type(faker.location.zipCode());
      }
    
      static enterMobile() {
        cy.get(mobileNumber).type(faker.phone.number());
      }
    
      static clickCreateBtn() {
        cy.get(createAccountBtn).click();
      }
    
      static accountCreatedConfirmation() {
        cy.get(accountCreatedMessage).should('be.visible');
      }
    
      static checkUsernameDisplayed() {
        cy.get().should('be.visible');
      }
      static clickContinueBtn() {
        cy.get(continueBtn).click();
      }
    
      static deleteAccountBtn() {
        cy.get(deleteAccountBtn).click();
      }   
    
}
export default registerPage;



















