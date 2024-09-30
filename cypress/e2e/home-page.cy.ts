/// <reference types="cypress" />

describe.skip("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("display header", () => {
    cy.get("h1").contains("Wishlist For Friends");
  });
});
