const logo = '.logo'
const login = 'fa-lock'
const loginEmail = '[data-qa="login-email]'
const loginPassword ='[data-qa="login-password"]'
const loginBtn = '[data-qa="login-button"]'
const loginUser = '.fa-user'

class logInPage{

    static homePage(){

        cy.visit(`${Cypress.env('baseUrl')}`);
        cy.get(logo).should('be.visible');

    }
    
    static navigateToLoginPage(){
        cy.get(login).click()
    }

    static enterUserCreds(){
        cy.get(loginEmail).type(`${Cypress.env('QaAutomationUser')}`)
        cy.get(loginPassword).type(`${Cypress.env('QaAutomationPassword')}`)
        
    }

    static clickLoginButton(){
        cy.get(loginBtn).click()
    }

    static validateuserLoggedIn(){
        cy.get(loginUser).should('be.visible')
    }
}

export default logInPage;