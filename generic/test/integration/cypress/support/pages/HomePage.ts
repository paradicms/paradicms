import { Page } from "./Page";
import { InstitutionOverviewPage } from "./InstitutionOverviewPage";

export class HomePage extends Page {
  readonly relativeUrl = "/";

  institutionLink(institutionUri: string) {
    const institutionHref = new InstitutionOverviewPage(institutionUri).relativeUrl;
    return cy.get("a[href=\"" + institutionHref + "\"]");
  }
}