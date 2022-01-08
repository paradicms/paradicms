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

  @Memoize()
  get creators(): readonly (Agent | string)[] {
    return this.agentsOrStrings(DCTERMS.creator);
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
      rights.creators.length > 0 ||
      rights.holders.length > 0 ||
      rights.license ||
      rights.statement
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
