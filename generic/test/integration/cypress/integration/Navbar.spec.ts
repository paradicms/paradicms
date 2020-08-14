import {HomePage} from "../support/pages/HomePage";
import {SearchResultsPage} from "../support/pages/SearchResultsPage";

describe("Navbar", () => {
  const page = new HomePage();

  beforeEach(() => page.visit());

  it("should search with typing and hitting enter", () => {
    const text = "test";
    page.frame.navbar.searchInput.type(text + "{enter}");
    cy.url().should("eq", new SearchResultsPage(text).absoluteUrl);
  });

  it("should search with typing and clicking the search button", () => {
    const text = "test";
    page.frame.navbar.searchInput.type(text);
    page.frame.navbar.searchButton.click();
    cy.url().should("eq", new SearchResultsPage(text).absoluteUrl);
  });

  it("should have a login link", () => {
    // Cypress doesn't allow you to navigate to a URL outside of the origin within a test.
    // You have to go to the login directly.
    page.frame.navbar.loginLink;
  });

  it("should go back home after going elsewhere", () => {
    const text = "test";
    page.frame.navbar.search(text);
    const newPage = new SearchResultsPage(text);
    cy.url().should("eq", newPage.absoluteUrl);
    newPage.frame.navbar.homeLink.click();
    cy.url().should("eq", page.absoluteUrl);
  });
});
