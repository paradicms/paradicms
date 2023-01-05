import {BlankNode, Dataset, NamedNode} from "@rdfjs/types";
import {rdfs, skos} from "@tpluscode/rdf-ns-builders";

const labelPredicates: readonly NamedNode[] = [rdfs.label, skos.prefLabel];

export const getRdfNodeLabel = (kwds: {
  dataset: Dataset;
  node: BlankNode | NamedNode;
}): string | null => {
  const {dataset, node} = kwds;

  for (const labelPredicate of labelPredicates) {
    for (const labelQuad of dataset.match(node, labelPredicate, null, null)) {
      if (
        labelQuad.object.termType === "Literal" &&
        labelQuad.object.value.length > 0
      ) {
        return labelQuad.object.value;
      }
    }
  }

  return null;
};
