/// <reference types="cypress" />

describe('QA Challenge - Money path', () => {
  cy.visit('https://heyflow.app')
  })

it('Cookies pop up Accept Heyflow Privacy settings', ()=>{
  cy.get('.sc-gsDKAQ.chNGXR').should('exist').click()

})

it('SignUp page should appear', () => {
  cy.get('.css-1ads3l9 > .css-19dnr8j > span').should('exist')

})



  
