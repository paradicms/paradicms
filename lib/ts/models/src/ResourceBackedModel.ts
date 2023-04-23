import {Resource} from "@paradicms/rdf";
import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {Model} from "./Model";
import {ModelSet} from "./ModelSet";
import {ModelToRdfTriple} from "./ModelToRdfTriple";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";

export abstract class ResourceBackedModel extends Resource implements Model {
  readonly dataset: Dataset;
  readonly modelSet: ModelSet;
  readonly graphNode: BlankNode | DefaultGraph | NamedNode;

  constructor(kwds: ResourceBackedModelParameters) {
    super({node: kwds.node});
    this.dataset = kwds.dataset;
    this.modelSet = kwds.modelSet;
    this.graphNode = kwds.graphNode;
  }

  toRdf(): readonly ModelToRdfTriple[] {
    const triples: ModelToRdfTriple[] = [];
    for (const quad of this.dataset.match(null, null, null, this.graphNode)) {
      switch (quad.subject.termType) {
        case "BlankNode":
        case "NamedNode":
          break;
        default:
          continue;
      }
      if (quad.predicate.termType !== "NamedNode") {
        continue;
      }
      switch (quad.object.termType) {
        case "BlankNode":
        case "Literal":
        case "NamedNode":
          break;
        default:
          continue;
      }
      triples.push({
        subject: quad.subject,
        predicate: quad.predicate,
        object: quad.object,
      });
    }
    return triples;
  }

  override toString(): string {
    throw new EvalError("should never call toString()");
  }

  get uri(): string | null {
    return this.node.termType === "NamedNode" ? this.node.value : null;
  }
}
