import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Resource} from "@paradicms/rdf";
import {Model} from "./Model";
import {ModelToRdfTriple} from "./ModelToRdfTriple";
import {ModelSet} from "./ModelSet";

export class ResourceBackedModel extends Resource implements Model {
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
}
