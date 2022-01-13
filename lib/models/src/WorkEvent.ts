import {Event} from "./Event";
import {requireDefined} from "./requireDefined";
import {CMS} from "./vocabularies";

export abstract class WorkEvent extends Event {
  get workUri(): string {
    return requireDefined(
      this.propertyObjects(CMS.work).find(term => term.termType === "NamedNode")
    ).value;
  }
}
