import {Dataset, DefaultGraph, NamedNode, Term} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";
import {ModelParameters} from "./ModelParameters";
import {Resource} from "@paradicms/rdf";
import {DateTimeUnion} from "./DateTimeUnion";
import {DateTimeDescription} from "./DateTimeDescription";
import {xsd} from "@paradicms/vocabularies";
import {Location} from "./Location";

export class Model extends Resource {
  readonly modelSet: ModelSet;
  readonly graphNode: DefaultGraph | NamedNode;

  constructor(kwds: ModelParameters) {
    super({node: kwds.node});
    this.modelSet = kwds.modelSet;
    this.graphNode = kwds.graphNode;
  }

  get dataset(): Dataset {
    return this.modelSet.dataset;
  }

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
}
