import {requireDefined} from "./requireDefined";
import {DCTERMS} from "./vocabularies";
import {WorkEvent} from "./WorkEvent";
import {Agent} from "./Agent";

export class WorkCreation extends WorkEvent {
  get creator(): Agent {
    return this.dataset.agentByUri(this.creatorUri);
  }

  get creatorUri(): string {
    return requireDefined(
      this.propertyObjects(DCTERMS.creator).find(
        term => term.termType === "NamedNode"
      )
    ).value;
  }
}
