import {NamedNode, Term} from "@rdfjs/types";
import {Model} from "./Model";
import {DateTimeUnion} from "./DateTimeUnion";
import {DateTimeDescription} from "./DateTimeDescription";
import {xsd} from "@paradicms/vocabularies";
import {Location} from "./Location";

export class NamedModel extends Model {
  protected mapDateTimeUnionObject(term: Term): DateTimeUnion | null {
    switch (term.termType) {
      case "BlankNode":
        return new DateTimeDescription({
          modelSet: this.modelSet,
          graphNode: this.graphNode,
          node: term,
        });
      case "Literal":
        if (term.datatype.value === xsd.integer.value) {
          return parseInt(term.value);
        } else {
          return term.value;
        }
      default:
        return null;
    }
  }

  protected mapLocationObject(term: Term): Location | string | null {
    switch (term.termType) {
      case "BlankNode":
        return new Location({
          modelSet: this.modelSet,
          graphNode: this.graphNode,
          node: term,
        });
      case "Literal":
        return term.value;
      default:
        return null;
    }
  }

  override get node(): NamedNode {
    return this._node as NamedNode;
  }

  get uri(): string {
    return this.node.value;
  }
}
