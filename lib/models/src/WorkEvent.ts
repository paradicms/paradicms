import {Event} from "./Event";
import {requireDefined} from "./requireDefined";
import {CMS} from "./vocabularies";
import {Work} from "./Work";

export abstract class WorkEvent extends Event {
  get work(): Work {
    return this.dataset.workByUri(this.workUri);
  }

  get workUri(): string {
    return requireDefined(
      this.propertyObjects(CMS.work).find(term => term.termType === "NamedNode")
    ).value;
  }
}
