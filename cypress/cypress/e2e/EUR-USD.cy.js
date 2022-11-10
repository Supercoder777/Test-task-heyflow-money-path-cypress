/// <reference types="cypress"  />


describe('Interacting with Eur/USD Buttons', () => {
    beforeEach(() => {
        cy.visit('https://heyflow.app/pricing')
})
    
it('Heyflow app pricing page opens', () => {
    cy.title().should('eq', 'Pricing | Heyflow')

})

it('User find the € EUR-$ USD Section', () => {
    cy.get('.pb-4').scrollIntoView
})

it('User Clicks the € EUR Section', () => {
    cy.get('.pb-4').contains('EUR').click({force: true})
    cy.get(':nth-child(5) > .pt-4').should('contain', '€')
    // cy.get(':nth-child(5) > .pt-4').should('not.contain', '$')
    cy.get('.mb-12').should('contain', '€')

})

it('User Clicks the $ USD Section', () => {
    cy.get('.pb-4').contains('USD').click({force: true})
    cy.get(':nth-child(5) > .pt-4').should('contain', '$')
    // cy.get(':nth-child(5) > .pt-4').should('not.contain', '€')
    cy.get('.mb-12').should('contain', '$')

})

})
