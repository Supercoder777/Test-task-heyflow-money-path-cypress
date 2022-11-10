/// <reference types="cypress"  />


describe('Interacting with Subscription Plans', () => {
    beforeEach(() => {
        cy.visit('https://heyflow.app/pricing')     
})

it('Heyflow app pricing page opens', () => {
    cy.title().should('eq', 'Pricing | Heyflow')
    cy.get('.pt-24').should('exist')

})
   
it('User Clicks on Monthly subscription plan', () => {
    cy.get('.pb-12 > .active').click({force: true})
    cy.get('.pricing-plan-highlight')
        .should('contain', '€108')     
    cy.get(':nth-child(5) > .pt-4')
        .should('contain', '€48')
        .should('contain', 'Basic' )
        .should('contain', 'Pro')
        .should('contain', 'Business')
    cy.get('.mb-12')
        .should('contain', 'Basic' )
        .should('contain', 'Pro')
        .should('contain', 'Business')
})
    
it('User Clicks on Yearly subscription plan', () => {
    cy.get('.pt-24 > .pb-12 > :nth-child(2)').click({force: true})
    cy.get('.pricing-plan-highlight')
        .should('contain', '€89')     
    cy.get(':nth-child(5) > .pt-4')
        .should('contain', '€39')
        .should('contain', 'Basic' )
        .should('contain', 'Pro')
        .should('contain', 'Business')
    cy.get('.mb-12')
        .should('contain', 'Basic' )
        .should('contain', 'Pro')
        .should('contain', 'Business')
})

})