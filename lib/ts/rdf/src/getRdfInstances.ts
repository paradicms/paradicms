import {BlankNode, Dataset, NamedNode} from "@rdfjs/types";
import TermSet from "@rdfjs/term-set";
import {getRdfInstanceQuads} from "./getRdfInstanceQuads";

/**
 * Get all unique RDF instances of a given class in the given dataset.
 */
export const getRdfInstances = (kwds: {
  class_: NamedNode;
  dataset: Dataset;
  instanceOfPredicate?: NamedNode;
  subClassOfPredicate?: NamedNode;
}): TermSet<BlankNode | NamedNode> => {
  const instances = new TermSet<BlankNode | NamedNode>();
  for (const instanceQuad of getRdfInstanceQuads(kwds)) {
    instances.add(instanceQuad.subject as BlankNode | NamedNode);
  }
  return instances;
};
