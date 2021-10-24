import {NamedModel} from "./NamedModel";
import {FOAF} from "./vocabularies";

export class Agent extends NamedModel {
  get name(): string {
    return this.requiredString(FOAF.name_);
  }

  toString() {
    return this.name;
  }
}
