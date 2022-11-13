import {Event} from "./Event";
import {requireDefined} from "./requireDefined";
import {Work} from "./Work";
import {cms} from "@paradicms/vocabularies";

export class WorkEvent extends Event {
  get work(): Work {
    return this.modelSet.workByUri(this.workUri);
  }

  get workUri(): string {
    return requireDefined(
      this.getObjects(cms.work).find(term => term.termType === "NamedNode")
    ).value;
  }
}
