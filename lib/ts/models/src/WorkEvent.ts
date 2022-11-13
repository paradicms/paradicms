import {Event} from "./Event";
import {requireDefined} from "./requireDefined";
import {Work} from "./Work";
import {CMS} from "@paradicms/vocabularies";

export class WorkEvent extends Event {
  get work(): Work {
    return this.modelSet.workByUri(this.workUri);
  }

  get workUri(): string {
    return requireDefined(
      this.getObjects(CMS.work).find(term => term.termType === "NamedNode")
    ).value;
  }
}
