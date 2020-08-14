import { Page } from "./Page";

export class ObjectOverviewPage extends Page {
  constructor(kwds: {collectionUri: string, institutionUri: string, objectUri: string}) {
    super();
    this.collectionUri = kwds.collectionUri;
    this.institutionUri = kwds.institutionUri;
    this.objectIndex = parseInt(kwds.objectUri.charAt(kwds.objectUri.length - 1));
    this.objectUri = kwds.objectUri;
  }

  readonly collectionUri: string;
  readonly institutionUri: string;
  readonly objectIndex: number;
  readonly objectUri: string;

  get carouselThumbnail() {
    return cy.get("img[src=\"https://place-hold.it/600x600?text=Object" + this.objectIndex + "Image0\"]");
  }

  get subjects() {
    cy.get("[data-cy=\"subjects-section\"] .MuiCardHeader-title").should("have.text", "Subjects");
    return cy.get("[data-cy=\"subjects-section\"] ul div");
  }

  get relativeUrl() {
    return "/institution/" + encodeURIComponent(this.institutionUri) + "/collection/" + encodeURIComponent(this.collectionUri) + "/object/" + encodeURIComponent(this.objectUri);
  }
}
