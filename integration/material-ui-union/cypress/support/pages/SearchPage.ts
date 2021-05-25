import {Page} from "./Page";
import * as qs from "qs";
import {
  Fixtures,
  InstitutionFixture,
  ObjectFixture,
} from "../../integration/Fixtures";
import {ObjectPage} from "./ObjectPage";

class StringFacet {
  constructor(private readonly id: string) {}

  toggleOpen() {
    return cy
      .get(
        '[data-cy="' +
          this.id +
          '-facet"] .MuiButtonBase-root.MuiAccordionSummary-root'
      )
      .click();
  }

  toggleValue(value: string) {
    return cy
      .get(`[data-cy="${this.id}-facet"]`)
      .find(`[data-cy="facet-value-${value}"]`)
      .find('input[type="checkbox"]')
      .click();
  }
}

export class ObjectFacets {
  readonly creator = new StringFacet("http://purl.org/dc/terms/creator");
  readonly subject = new StringFacet("http://purl.org/dc/terms/subject");
}

export class ObjectsGallery {
  getObjectLink(kwds: {object: ObjectFixture; stripTrailingSlash?: boolean}) {
    const {object, stripTrailingSlash} = kwds;
    let objectLink = new ObjectPage({
      institutionUri: object.institutionUri,
      objectTitle: object.title,
      objectUri: object.uri,
    }).relativeUrl;
    if (stripTrailingSlash) {
      objectLink = objectLink.substr(0, objectLink.length - 1);
    }
    return cy.get('.MuiCardHeader-title a[href="' + objectLink + '"]');
  }
}

export class SearchPage extends Page {
  constructor(readonly text: string) {
    super();
  }

  get objectsCount() {
    return cy.get("[data-cy=objects-count]");
  }

  readonly objectFacets = new ObjectFacets();
  readonly objectsGallery = new ObjectsGallery();

  get queryText() {
    return cy.get("[data-cy=query-text]");
  }

  readonly relativeUrl =
    "/search/?" + qs.stringify({query: JSON.stringify({text: this.text})});
}
