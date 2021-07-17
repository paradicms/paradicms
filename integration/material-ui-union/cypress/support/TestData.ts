import {RdfData} from "@paradicms/rdf";

export class TestData extends RdfData {
  static get fixture(): Cypress.Chainable<TestData> {
    return cy.fixture("data.ttl").then(ttl => {
      return new TestData(RdfData.parseTurtle(ttl));
    });
  }
}
