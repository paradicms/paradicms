import {Dataset, DefaultGraph, NamedNode, Term} from "@rdfjs/types";
import {rdfs} from "@tpluscode/rdf-ns-builders";
import {TermSet} from "./TermSet";

export const hasRdfSuperClass = (kwds: {
  dataset: Dataset;
  graph?: DefaultGraph | NamedNode;
  subClass: NamedNode;
  superClass: NamedNode;
}): boolean => {
  return hasRdfSuperClassRecursive({...kwds, visited: new TermSet()});
};

const hasRdfSuperClassRecursive = (kwds: {
  dataset: Dataset;
  graph?: DefaultGraph | NamedNode;
  subClass: NamedNode;
  superClass: NamedNode;
  visited: TermSet<Term>;
}): boolean => {
  const {dataset, graph, subClass, superClass, visited} = kwds;

  for (const subClassOfQuad of dataset.match(
    subClass,
    rdfs.subClassOf,
    null,
    graph
  )) {
    const immediateSuperClass = subClassOfQuad.object;
    if (immediateSuperClass.termType !== "NamedNode") {
      continue;
    }

    if (superClass.equals(immediateSuperClass)) {
      return true;
    }

    if (!visited.add(immediateSuperClass)) {
      // Already visited
      continue;
    }

    // Go up the chain
    if (
      hasRdfSuperClassRecursive({
        dataset,
        graph,
        subClass: immediateSuperClass,
        superClass,
        visited,
      })
    ) {
      return true;
    }
  }

  return false;
};
