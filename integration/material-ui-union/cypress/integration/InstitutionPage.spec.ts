import {InstitutionPage} from "../support/pages/InstitutionPage";
import {CollectionPage} from "../support/pages/CollectionPage";
import {HomePage} from "../support/pages/HomePage";
import {Collection, Institution, Object} from "@paradicms/models";
import {TestData} from "../support/TestData";

describe("Institution page", () => {
  let institution: Institution;
  let institutionCollections: readonly Collection[];
  let page: InstitutionPage;

  before(() => {
    TestData.fixture.then(testData => {
      institution = testData.institutions[0];
      page = new InstitutionPage(institution.uri);
      institutionCollections = testData.collectionsByInstitutionUri[
        institution.uri
      ]!;
    });
  });

  beforeEach(() => page.visit());

  it("should show the institution name in the frame", () => {
    page.frame.cardTitle.should(
      "have.text",
      institution.name + " - Collections"
    );
  });

  it("should have breadcrumbs to the institution", () => {
    page.frame.breadcrumbItem(1).should("have.text", "Home");
    page.frame.breadcrumbItem(2).should("have.text", "Institutions");
    page.frame.breadcrumbItem(3).should("have.text", institution.name);
  });

  it("should have a collection link that leads to the collection overview page", () => {
    const collection = institutionCollections[0];
    page.collectionLink(collection.uri).click();
    cy.url().should(
      "eq",
      new CollectionPage({
        institutionUri: institution.uri,
        collectionUri: collection.uri,
      }).absoluteUrl
    );
  });

  it("should return home via breadcrumb", () => {
    page.frame.breadcrumbItem(1).click();
    cy.url().should("eq", new HomePage().absoluteUrl);
  });
});
