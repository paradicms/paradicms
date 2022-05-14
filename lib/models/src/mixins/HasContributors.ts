import {Memoize} from "typescript-memoize";
import {Agent} from "../Agent";
import {DCTERMS} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class HasContributors extends ModelMixin {
  @Memoize()
  get contributors(): readonly (Agent | string)[] {
    return this.propertyObjects(DCTERMS.contributor).flatMap(term => {
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

  get contributorAgents(): readonly Agent[] {
    return this.contributorAgentUris.map(agentUri =>
      this.dataset.agentByUri(agentUri)
    );
  }

  @Memoize()
  get contributorAgentUris(): readonly string[] {
    return this.propertyObjects(DCTERMS.contributor)
      .filter(term => term.termType === "NamedNode")
      .map(term => term.value);
  }
}
