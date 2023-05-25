import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {ModelToRdfTriple} from "./ModelToRdfTriple";

export const getGraphTriples = (kwds: {
  dataset: Dataset;
  graph: BlankNode | DefaultGraph | NamedNode;
}): readonly ModelToRdfTriple[] => {
  const {dataset, graph} = kwds;
  const triples: ModelToRdfTriple[] = [];
  for (const quad of dataset.match(null, null, null, graph)) {
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
};
