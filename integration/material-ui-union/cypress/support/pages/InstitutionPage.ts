import {Page} from "./Page";
import {CollectionPage} from "./CollectionPage";
import {encodeFileName} from "../../../../../lib/ts/base/src";

export class InstitutionPage extends Page {
  constructor(readonly institutionUri: string) {
    super();
  }

  collectionLink(collectionUri: string) {
    return cy.get(`[data-cy="collection-link-${collectionUri}"]`).first();
  }

  readonly relativeUrl = `/institution/${encodeFileName(this.institutionUri)}/`;
}
