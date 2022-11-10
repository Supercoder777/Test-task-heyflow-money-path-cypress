/// <reference types="cypress"  />


describe('Interacting with Subscription Plans', () => {
    beforeEach(() => {
        cy.visit('https://heyflow.app/pricing')     
})

it('Heyflow app pricing page opens', () => {
    cy.title().should('eq', 'Pricing | Heyflow')
    cy.get(':nth-child(5) > .pt-4').should('exist')
   
})

it('Heyflow Basic Redirects to SignUp page', () => {
    cy.get(':nth-child(5) > .pt-4')
    cy.get(':nth-child(1) > :nth-child(3) > .btn > span').click({force: true})
    cy.get('.css-1ads3l9 > .css-19dnr8j > span')
    .should('exist')
    cy.title().should('eq', 'Heyflow • Signup')
    cy.get('[data-testid="signup-form"]')
    .should('contain', 'Create account')
    
})

it('Heyflow Pro Redirects to SignUp page', () => {
    cy.get(':nth-child(5) > .pt-4')
    cy.get('.pricing-plan-highlight > :nth-child(3) > .btn').click({force: true})
    cy.get('.css-1ads3l9 > .css-19dnr8j > span')
    .should('exist')
    cy.title().should('eq', 'Heyflow • Signup')
    cy.get('[data-testid="signup-form"]')
    .should('contain', 'Create account')
    
})

it('Heyflow Business Redirects to SignUp page', () => {
    cy.get(':nth-child(5) > .pt-4')
    cy.get(':nth-child(3) > :nth-child(3) > .btn').click({force: true})
    cy.get('.css-1ads3l9 > .css-19dnr8j > span')
    .should('exist')
    cy.title().should('eq', 'Heyflow • Signup')
    cy.get('[data-testid="signup-form"]')
    .should('contain', 'Create account')
    
})

})