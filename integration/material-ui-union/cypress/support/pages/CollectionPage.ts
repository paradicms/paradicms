import {Page} from "./Page";
import {ObjectFacets, ObjectsGallery} from "./SearchPage";
import {encodeFileName} from "../../../../../lib/base/src";

export class CollectionPage extends Page {
  constructor(kwds: {collectionUri: string; institutionUri: string}) {
    super();
    this.collectionUri = kwds.collectionUri;
    this.institutionUri = kwds.institutionUri;
  }

  get collectionTitle() {
    return cy.get("[data-cy=collection-title]");
  }

  readonly collectionUri: string;
  readonly institutionUri: string;

  readonly objectFacets = new ObjectFacets();

  get objectsCount() {
    return cy.get("[data-cy=objects-count]");
  }

  readonly objectsGallery = new ObjectsGallery();

  get relativeUrl() {
    return `/institution/${encodeFileName(
      this.institutionUri
    )}/collection/${encodeFileName(this.collectionUri)}/`;
  }
}
