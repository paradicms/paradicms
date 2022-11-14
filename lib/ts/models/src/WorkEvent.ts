import {Event} from "./Event";
import {Work} from "./Work";
import {cms} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";

export class WorkEvent extends Event {
  get work(): Work {
    return this.modelSet.workByUri(this.workUri);
  }

  get workUri(): string {
    return requireNonNull(
      this.findAndMapObject(cms.work, term =>
        term.termType === "NamedNode" ? term.value : null
      )
    );
  }
}
