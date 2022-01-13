import {Event} from "./Event";
import {requireDefined} from "./requireDefined";
import {PROV} from "./vocabularies";

export class WorkEvent extends Event {
  get workUri(): string {
    return requireDefined(
      this.propertyObjects(PROV.generated).find(
        term => term.termType === "NamedNode"
      )
    ).value;
  }
}
