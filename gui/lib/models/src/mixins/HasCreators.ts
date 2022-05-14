import {Memoize} from "typescript-memoize";
import {Agent} from "../Agent";
import {DCTERMS} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class HasCreators extends ModelMixin {
  @Memoize()
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

  get creatorAgents(): readonly Agent[] {
    return this.creatorAgentUris.map(agentUri =>
      this.dataset.agentByUri(agentUri)
    );
  }

  @Memoize()
  get creatorAgentUris(): readonly string[] {
    return this.propertyObjects(DCTERMS.creator)
      .filter(term => term.termType === "NamedNode")
      .map(term => term.value);
  }
}
