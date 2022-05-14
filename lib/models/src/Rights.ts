import {Model} from "./Model";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Agent} from "./Agent";
import {NamedNode} from "n3";
import {Memoize} from "typescript-memoize";
import {Mixin} from "ts-mixer";
import {HasCreators} from "./mixins/HasCreators";
import {HasContributors} from "./mixins/HasContributors";
import {DCTERMS} from "@paradicms/vocabularies";

export class Rights extends Mixin(Model, HasContributors, HasCreators) {
  private agentsOrStrings(property: NamedNode) {
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

  @Memoize()
  get agents(): readonly Agent[] {
    return this.agentUris.map(agentUri => this.dataset.agentByUri(agentUri));
  }

  @Memoize()
  get agentUris(): readonly string[] {
    return this.contributorAgentUris
      .concat(this.creatorAgentUris)
      .concat(this.holderAgentUris);
  }

  get holderAgents(): readonly Agent[] {
    return this.holderAgentUris.map(agentUri =>
      this.dataset.agentByUri(agentUri)
    );
  }

  @Memoize()
  get holderAgentUris(): readonly string[] {
    return this.propertyObjects(DCTERMS.rightsHolder)
      .filter(term => term.termType === "NamedNode")
      .map(term => term.value);
  }

  @Memoize()
  get holders(): readonly (Agent | string)[] {
    return this.agentsOrStrings(DCTERMS.rightsHolder);
  }

  @Memoize()
  get license(): License | string | null {
    const term = this.propertyObjects(DCTERMS.license).find(
      term => term.termType === "Literal" || term.termType === "NamedNode"
    );
    if (!term) {
      return null;
    }
    switch (term.termType) {
      case "Literal":
        return term.value;
      case "NamedNode":
        return this.dataset.licenseByUri(term.value);
      default:
        throw new EvalError();
    }
  }

  @Memoize()
  get statement(): RightsStatement | string | null {
    const term = this.propertyObjects(DCTERMS.rights).find(
      term => term.termType === "Literal" || term.termType === "NamedNode"
    );
    if (!term) {
      return null;
    }
    switch (term.termType) {
      case "Literal":
        return term.value;
      case "NamedNode":
        return this.dataset.rightsStatementByUri(term.value);
      default:
        throw new EvalError();
    }
  }
}
