/// <reference types="cypress"/>

describe("task management", () => {
  it("should open and close the new task modal", () => {
    cy.visit("http://127.0.0.1:5173/");
    //open and close in backdrop
    cy.contains("Add Task").click();
    cy.get(".backdrop").click({ force: true });
    //check backdrop and modal are gone
    cy.get(".backdrop").should("not.exist");
    cy.get(".dialog.modal").should("not.exist");
    //open and close in cancel button
    cy.contains("Add Task").click();
    cy.contains("Cancel").click();
    //check backdrop and modal are gone
    cy.get(".backdrop").should("not.exist");
    cy.get(".dialog.modal").should("not.exist");
  });

  it("should create a new task", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get("#title").type("New Task");
    cy.get("#summary").type("Some description");
    cy.get(".modal button").contains("Add Task").click();
    cy.get(".task").should("have.length", 1);
    cy.get(".task h2").contains("New Task");
    cy.get(".task p").contains("Some description");
  });

  it("should validate user input", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get(".modal button").contains("Add Task").click();
    cy.get(".modal").find(".error-message");
  });

  it("should filter task", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get("#title").type("New Task");
    cy.get("#summary").type("Some description");
    cy.get("#category").select("urgent");
    cy.get(".modal button").contains("Add Task").click();
    cy.get(".task").should("have.length", 1);
    cy.get("#filter").select("moderate");
    cy.get(".task").should("have.length", 0);
    cy.get("#filter").select("all");
    cy.get(".task").should("have.length", 1);
  });
  it("should add multiple tasks", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get("#title").type("task 1");
    cy.get("#summary").type("first task");
    cy.get(".modal button").contains("Add Task").click();
      cy.get('.task').should('have.length', 1);
    
    cy.contains("Add Task").click();
    cy.get("#title").type("task 2");
    cy.get("#summary").type("second task");
    cy.get(".modal button").contains("Add Task").click();
    cy.get('.task').should('have.length', 2);
   ///cy.get('.task').eq(1 or 2 or n)
    cy.get('.task').first().contains('first task')
    cy.get('.task').last().contains('second task')

  });
});
