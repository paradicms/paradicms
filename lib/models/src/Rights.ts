import {Model} from "./Model";
import {DCTERMS} from "./vocabularies";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Agent} from "./Agent";
import {Dataset} from "./Dataset";
import {BlankNode, NamedNode} from "n3";
import {Memoize} from "typescript-memoize";

export class Rights extends Model {
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

  get agentUris(): readonly string[] {
    return this.creatorAgentUris.concat(this.holderAgentUris);
  }

  @Memoize()
  get creators(): readonly (Agent | string)[] {
    return this.agentsOrStrings(DCTERMS.creator);
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

  static optional(kwds: {
    dataset: Dataset;
    graphNode: NamedNode;
    node: BlankNode | NamedNode;
  }): Rights | null {
    const rights = new Rights(kwds);

    if (
      rights.propertyObjects(DCTERMS.creator).length > 0 ||
      rights.propertyObjects(DCTERMS.license).length > 0 ||
      rights.propertyObjects(DCTERMS.rights).length > 0 ||
      rights.propertyObjects(DCTERMS.rightsHolder).length > 0
    ) {
      return rights;
    } else {
      return null;
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
