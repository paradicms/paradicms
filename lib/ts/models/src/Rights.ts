import {Model} from "./Model";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Agent} from "./Agent";
import {NamedNode} from "@rdfjs/types";
import {Memoize} from "typescript-memoize";
import {Mixin} from "ts-mixer";
import {HasCreators} from "./mixins/HasCreators";
import {HasContributors} from "./mixins/HasContributors";
import {dcterms} from "@paradicms/vocabularies";

export class Rights extends Mixin(Model, HasContributors, HasCreators) {
  private agentsOrStrings(property: NamedNode) {
    return this.getObjects(dcterms.creator).flatMap(term => {
      switch (term.termType) {
        case "Literal":
          return term.value;
        case "NamedNode":
          return this.modelSet.agentByUri(term.value);
        default:
          return [];
      }
    });
  }

  @Memoize()
  get agents(): readonly Agent[] {
    return this.agentUris.map(agentUri => this.modelSet.agentByUri(agentUri));
  }

  @Memoize()
  get agentUris(): readonly string[] {
    return this.contributorAgentUris
      .concat(this.creatorAgentUris)
      .concat(this.holderAgentUris);
  }

  get holderAgents(): readonly Agent[] {
    return this.holderAgentUris.map(agentUri =>
      this.modelSet.agentByUri(agentUri)
    );
  }

  @Memoize()
  get holderAgentUris(): readonly string[] {
    return this.getObjects(dcterms.rightsHolder)
      .filter(term => term.termType === "NamedNode")
      .map(term => term.value);
  }

  @Memoize()
  get holders(): readonly (Agent | string)[] {
    return this.agentsOrStrings(dcterms.rightsHolder);
  }

  @Memoize()
  get license(): License | string | null {
    const term = this.getObjects(dcterms.license).find(
      term => term.termType === "Literal" || term.termType === "NamedNode"
    );
    if (!term) {
      return null;
    }
    switch (term.termType) {
      case "Literal":
        return term.value;
      case "NamedNode":
        return this.modelSet.licenseByUri(term.value);
      default:
        throw new EvalError();
    }
  }

  @Memoize()
  get statement(): RightsStatement | string | null {
    const term = this.getObjects(dcterms.rights).find(
      term => term.termType === "Literal" || term.termType === "NamedNode"
    );
    if (!term) {
      return null;
    }
    switch (term.termType) {
      case "Literal":
        return term.value;
      case "NamedNode":
        return this.modelSet.rightsStatementByUri(term.value);
      default:
        throw new EvalError();
    }
  }
}
