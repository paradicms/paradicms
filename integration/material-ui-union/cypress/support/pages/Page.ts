class Footer {
  get privacyLink() {
    return cy.get('[data-cy=frame] footer a[href="/privacy"]');
  }
}

class Frame {
  get cardTitle() {
    return cy.get('[data-cy="frame-card-header"]');
  }

  breadcrumbItem(n: number) {
    return cy.get(
      '[data-cy="breadcrumbs"] li:nth-of-type(' + (n * 2 - 1) + ")"
    );
  }

  readonly footer = new Footer();
  readonly navbar = new Navbar();
}

class Navbar {
  get homeLink() {
    return cy.get('[data-cy=navbar] a[href="/"]');
  }

  get searchButton() {
    return cy.get('[data-cy=navbar] [data-cy="search-button"]');
  }

  search(text: string) {
    this.searchInput.type(text);
    this.searchButton.click();
  }

  get searchInput() {
    return cy.get('[data-cy=navbar] [data-cy="search-input"]');
  }
}

export abstract class Page {
  get absoluteUrl() {
    return Cypress.config().baseUrl + this.relativeUrl;
  }

  readonly frame = new Frame();

  abstract readonly relativeUrl: string;

  visit(): void {
    cy.visit(this.relativeUrl);
    cy.url().should("eq", this.absoluteUrl);
  }
}
