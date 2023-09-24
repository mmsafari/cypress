/// <reference types="cypress"/>

describe("contact form", () => {
  it("should submit the form", () => {
    cy.visit("http://127.0.0.1:5173/about");
    cy.get('[data-cy="contact-input-message"]').type("Hello world");
    cy.get('[data-cy="contact-input-name"]').type("mahdi");
    cy.get('[data-cy="contact-input-email"]').type("test@test.com");
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el.attr("disabled")).to.be.undefined;
      expect(el.text()).to.eq("Send Message");
    });

    //  cy.get('[data-cy="contact-input-email"]').type("test@test.com{enter}");
    //  cy.get('[data-cy="contact-btn-submit"]').should('not.have.attr', 'disabled');
    cy.get('[data-cy="contact-btn-submit"]').as("submitBtn");
    cy.get("@submitBtn").click();
    cy.get("@submitBtn").contains("Sending...");
    cy.get("@submitBtn").should("have.attr", "disabled");
  });
  it("should validate the form input", () => {
    cy.visit("http://127.0.0.1:5173/about");
    cy.get('[data-cy="contact-btn-submit"]').click();
    
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el).to.not.have.attr('disabled');
      expect(el.text()).to.not.eq("Sending...");
    });
    cy.get('[data-cy="contact-btn-submit"]').contains("Send Message");
  });
});
