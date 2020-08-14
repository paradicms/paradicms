import {Page} from "./Page";
import {CollectionOverviewPage} from "./CollectionOverviewPage";

export class InstitutionOverviewPage extends Page {
  constructor(readonly institutionUri: string) {
    super();
  }

  collectionLink(kwds: {collectionUri: string; institutionUri: string}) {
    const collectionHref = new CollectionOverviewPage(kwds).relativeUrl;
    return cy.get('a[href="' + collectionHref + '"]');
  }

  readonly relativeUrl =
    "/institution/" + encodeURIComponent(this.institutionUri);
}
