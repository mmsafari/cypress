describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('li').should('have.length', 6)
  })
})