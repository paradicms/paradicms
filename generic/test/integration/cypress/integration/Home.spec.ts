import { HomePage } from "../support/pages/HomePage";
import { InstitutionOverviewPage } from "../support/pages/InstitutionOverviewPage";
import { TestData } from "./TestData";

describe("Home", () => {
  const page = new HomePage();

  beforeEach(() => page.visit());

  it("should open the home page", () => {
    page.frame.cardTitle.should("have.text", "Institutions");
  });

  it ("should show institutions", () => {
    page.institutionLink(TestData.institution.uri).should("have.text", TestData.institution.name);
  });

  it("should go to the institution page when clicking on an institution", () => {
    page.institutionLink(TestData.institution.uri).click();
    cy.url().should("eq", new InstitutionOverviewPage(TestData.institution.uri).absoluteUrl);
  });
});
