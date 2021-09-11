import { NamedModel } from "./NamedModel";
import { DC } from "./vocabularies";

export class License extends NamedModel {
  get identifier(): string {
    return this.requiredString(DC.identifier);
  }

  get title(): string {
    return this.requiredString(DC.title);
  }

  toString() {
    return this.title;
  }
}
