import {
  BlankNode,
  Dataset,
  DefaultGraph,
  Literal,
  NamedNode,
} from "@rdfjs/types";
import {rdf} from "@tpluscode/rdf-ns-builders";

export const getRdfList = (kwds: {
  dataset: Dataset;
  graph?: BlankNode | DefaultGraph | NamedNode;
  node: BlankNode | NamedNode;
}): (BlankNode | NamedNode | Literal)[] => {
  const {dataset, graph, node} = kwds;

  if (node.equals(rdf.nil)) {
    return [];
  }

  const firstDataset = dataset.match(node, rdf.first, null, graph);
  if (firstDataset.size === 0) {
    throw new RangeError("RDF list has no rdf:first quad");
    1;
  } else if (firstDataset.size > 1) {
    throw new RangeError("RDF list has multiple rdf:first quads");
  }
  const firstTerm = firstDataset.toArray()[0].object;
  switch (firstTerm.termType) {
    case "BlankNode":
    case "Literal":
    case "NamedNode":
      break;
    default:
      throw new RangeError(
        "rdf:first must point to a blank or named node or a literal"
      );
  }

  const restDataset = dataset.match(node, rdf.rest, null, graph);
  if (restDataset.size === 0) {
    throw new RangeError("RDF list has no rdf:rest quad");
  } else if (restDataset.size > 1) {
    throw new RangeError("RDF list has multiple rdf:rest quads");
  }
  const restTerm = restDataset.toArray()[0].object;
  switch (restTerm.termType) {
    case "BlankNode":
    case "NamedNode":
      break;
    default:
      throw new RangeError("rdf:rest must point to a blank or named node");
  }

  return [firstTerm].concat(
    getRdfList({
      dataset,
      graph,
      node: restTerm,
    })
  );
};
