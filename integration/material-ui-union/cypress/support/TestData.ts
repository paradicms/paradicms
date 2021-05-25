import {RdfData} from "@paradicms/rdf";
import {parse, graph} from "rdflib";

export class TestData extends RdfData {
  static get fixture(): Cypress.Chainable<TestData> {
    return cy.fixture("data.ttl").then(ttl => {
      const store = graph();
      parse(ttl, store, "http://example.org", "text/turtle");
      return new TestData(store);
    });
  }
}
