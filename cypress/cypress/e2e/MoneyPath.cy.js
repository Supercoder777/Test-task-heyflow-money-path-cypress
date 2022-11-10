/// <reference types="cypress"  />

describe('Cypress Studio Demo', () => {
    beforeEach(() => {

        cy.visit('https://heyflow.app')
    
    })
    
it('Homepage contains text Get started', () => {
    cy.get('.inline-block > .flex > .btn').should('exist')

})

it('Get started button should redirect to Signup page', () => {
    cy.get('.inline-block > .flex > .btn > span')
    .click({force:true})
    cy.get('.css-1ads3l9 > .css-19dnr8j > span')
    .should('exist')
    cy.title().should('eq', 'Heyflow • Signup')
    cy.url().should('eq', 'https://go.heyflow.app/signup?ref=hero')
    cy.get('[data-testid="signup-form"]')
    .should('contain', 'Create account')
    
})



})



