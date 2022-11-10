/// <reference types="cypress"  />


describe('Interacting with Subscription Plans', () => {
    beforeEach(() => {
        cy.visit('https://heyflow.app/pricing')     
})

it('Heyflow app pricing page opens', () => {
    cy.title().should('eq', 'Pricing | Heyflow')
    cy.get(':nth-child(5) > .pt-4').should('exist')
   
})

it('User find the € EUR-$ USD Section', () => {
    cy.get('.pb-4').scrollIntoView
})

it('User Clicks the € EUR Section', () => {
    cy.get('.pb-4').contains('EUR').click({force: true})
    cy.get(':nth-child(5) > .pt-4').should('contain', '€')
    cy.get('.mb-12').should('contain', '€')
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

it('User Clicks the $ USD Section', () => {
    cy.get('.pb-4').contains('USD').click({force: true})
    cy.get(':nth-child(5) > .pt-4').should('contain', '$')
    cy.get('.mb-12').should('contain', '$')
    cy.get('.pb-4').contains('USD').click({force: true})
    cy.get(':nth-child(5) > .pt-4').should('contain', '$')
    // cy.get('.pricing-plan-highlight').should('contain', '$119')     
    cy.get(':nth-child(5) > .pt-4').should('contain', '$51').should('contain', 'Basic' ).should('contain', 'Pro').should('contain', 'Business')
    cy.get('.mb-12')
        .should('contain', 'Basic' )
        .should('contain', 'Pro')
        .should('contain', 'Business')
    cy.get('.pt-24 > .pb-12 > :nth-child(2)').click({force: true})
    // cy.get('.pricing-plan-highlight').should('contain', '$99')     
    cy.get(':nth-child(5) > .pt-4')
         .should('contain', '$42')
         .should('contain', 'Basic' )
         .should('contain', 'Pro')
         .should('contain', 'Business')
    cy.get('.mb-12')
         .should('contain', 'Basic' )
         .should('contain', 'Pro')
         .should('contain', 'Business')

})

})