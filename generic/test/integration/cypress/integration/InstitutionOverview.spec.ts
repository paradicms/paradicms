import {InstitutionOverviewPage} from "../support/pages/InstitutionOverviewPage";
import {CollectionOverviewPage} from "../support/pages/CollectionOverviewPage";
import {HomePage} from "../support/pages/HomePage";
import {TestData} from "./TestData";

describe("Institution overview", () => {
  const page = new InstitutionOverviewPage(TestData.institution.uri);

  beforeEach(() => page.visit());

  it("should show the institution name in the frame", () => {
    page.frame.cardTitle.should(
      "have.text",
      TestData.institution.name + " - Collections"
    );
  });

  it("should have breadcrumbs to the institution", () => {
    page.frame.breadcrumbItem(1).should("have.text", "Home");
    page.frame.breadcrumbItem(2).should("have.text", "Institutions");
    page.frame.breadcrumbItem(3).should("have.text", TestData.institution.name);
  });

  it("should have a collection link that leads to the collection overview page", () => {
    const kwds = {
      collectionUri: TestData.collection.uri,
      institutionUri: TestData.institution.uri,
    };
    page.collectionLink(kwds).click();
    cy.url().should("eq", new CollectionOverviewPage(kwds).absoluteUrl);
  });

  it("should return home via breadcrumb", () => {
    page.frame.breadcrumbItem(1).click();
    cy.url().should("eq", new HomePage().absoluteUrl);
  });
});
