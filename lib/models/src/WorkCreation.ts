import {requireDefined} from "./requireDefined";
import {DCTERMS} from "./vocabularies";
import {WorkEvent} from "./WorkEvent";
import {Agent} from "./Agent";

export class WorkCreation extends WorkEvent {
  get creators(): readonly (Agent | string)[] {
    return this.propertyObjects(DCTERMS.creator).flatMap(term => {
      switch (term.termType) {
        case "Literal":
          return term.value;
        case "NamedNode":
          return this.dataset.agentByUri(term.value);
        default:
          return [];
      }
    });
  }

  get creatorUri(): string {
    return requireDefined(
      this.propertyObjects(DCTERMS.creator).find(
        term => term.termType === "NamedNode"
      )
    ).value;
  }
}
