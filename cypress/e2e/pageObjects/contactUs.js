/// <reference types="Cypress" />

import {faker} from "@faker-js/faker"

const contactUs = '.fa-envelope'
const contactUsUrl = 'contact_us'
const userName = '[data-qa="name"]'
const userEmail = '[data-qa="email"]'
const subject = '[data-qa="subject"]'
const message = '#message'
const file = '[name="upload_file"]'
const submitBtn = '[data-qa="submit-button"]'
const successMessage = '.alert-success'
const home = '.btn-success'

class contactPage{

    static navigateToContactUspage()
    {
        cy.get(contactUs).click()
    }

    static verifyTheContactUsUrl()
    {
        cy.url().should('contains',contactUsUrl)
    }

    static enterTheDetailsAndSubmit()
    {
        cy.get(userName).type(faker.person.firstName())
        cy.get(userEmail).type(faker.internet.email())
        cy.get(subject).type('test contact details')
        cy.get(message).type('This is a test message')
        cy.get(file).selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'file.jpeg',
            lastModified: Date.now(),
        })
        cy.get(submitBtn).click()
    }

    static verifySuccessMessage()
    {

        cy.get(successMessage).should('be.visible')
    }

    static navigateToHome()
    {
        cy.get(home).click()
    }
}
export default contactPage;