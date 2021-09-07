import {NamedModel} from "./NamedModel";
import {DCTERMS} from "./vocabularies";

export class License extends NamedModel {
  get identifier(): string {
    return this.requiredString(DCTERMS.identifier);
  }

  get title(): string {
    return this.requiredString(DCTERMS.title);
  }

  toString() {
    return this.title;
  }
}
