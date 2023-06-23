import {BlankNode, DatasetCore, DefaultGraph, NamedNode} from "@rdfjs/types";
import {rdf} from "@paradicms/vocabularies";

export const getNamedRdfTypes = (kwds: {
  dataset: DatasetCore;
  graph?: BlankNode | DefaultGraph | NamedNode;
  subject: BlankNode | NamedNode;
}): readonly NamedNode[] => {
  const namedRdfTypes: NamedNode[] = [];
  const {dataset, graph, subject} = kwds;
  for (const rdfTypeQuad of dataset.match(subject, rdf.type, null, graph)) {
    if (rdfTypeQuad.object.termType !== "NamedNode") {
      continue;
    }
    namedRdfTypes.push(rdfTypeQuad.object);
  }
  return namedRdfTypes;
};
