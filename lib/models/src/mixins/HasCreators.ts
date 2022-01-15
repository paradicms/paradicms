import {Memoize} from "typescript-memoize";
import {Agent} from "../Agent";
import {DCTERMS} from "../vocabularies";
import {NamedNode, Term} from "n3";
import {Dataset} from "../Dataset";

export abstract class HasCreators {
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

  protected abstract readonly dataset: Dataset;
  protected abstract propertyObjects(property: NamedNode): readonly Term[];
}
