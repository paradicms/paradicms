import {Page} from "./Page";
import {InstitutionPage} from "./InstitutionPage";

export class HomePage extends Page {
  readonly relativeUrl = "/";

  institutionLink(institutionUri: string) {
    return cy.get(`[data-cy="institution-link-${institutionUri}"]`).first();
  }
}
