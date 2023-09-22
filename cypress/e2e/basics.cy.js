/// <reference types="cypress"/>

describe('task page', () => {
  it('should render the main image', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.get('.main-header').find('img') // nested element // find always be after get()
  })
  it('should display the page title', ()=> {
    cy.visit('http://127.0.0.1:5173/');
    cy.get('h1').should('have.length', 1);
    cy.get('.main-header h1').contains('Cypress React Tasks')
  })
  
})