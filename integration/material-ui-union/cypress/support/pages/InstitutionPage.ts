import {Page} from "./Page";
import {encodeFileName} from "../../../../../lib/next/src";

export class InstitutionPage extends Page {
  constructor(readonly institutionUri: string) {
    super();
  }

  collectionLink(collectionUri: string) {
    return cy.get(`[data-cy="collection-link-${collectionUri}"]`).first();
  }

  readonly relativeUrl = `/institution/${encodeFileName(this.institutionUri)}/`;
}
