import {NamedModel} from "./NamedModel";
import {DCTERMS, FOAF, PARADICMS} from "./vocabularies";
import {Collection} from "./Collection";
import {Institution} from "./Institution";
import {Property} from "./Property";
import {Rights} from "./Rights";
import {Image} from "./Image";

export class Object extends NamedModel {
  get abstract(): string | null {
    return this.optionalString(DCTERMS.abstract);
  }

  get collections(): readonly Collection[] {
    return this.collectionUris.map(collectionUri =>
      this.dataset.collectionByUri(collectionUri)
    );
  }

  get collectionUris(): readonly string[] {
    return this.parentNamedNodes(PARADICMS.collection).map(node => node.value);
  }

  get images(): readonly Image[] {
    return this.dataset.imagesByDepictsUri(this.uri);
  }

  get institution(): Institution {
    return this.dataset.institutionByUri(this.institutionUri);
  }

  get institutionUri(): string {
    return this.requiredParentNamedNode(PARADICMS.institution).value;
  }

  get page(): string | null {
    return this.optionalString(FOAF.page);
  }

  get properties(): readonly Property[] {
    return this._properties;
  }

  get rights(): Rights | null {
    return this._rights;
  }

  get title(): string {
    return this.requiredString(DCTERMS.title);
  }
}
