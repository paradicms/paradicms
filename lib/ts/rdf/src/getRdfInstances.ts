import {BlankNode, Dataset, NamedNode} from "@rdfjs/types";
import TermSet from "@rdfjs/term-set";
import {rdf, rdfs} from "@tpluscode/rdf-ns-builders";

/**
 * Get all unique RDF instances of a given class in the given dataset.
 */
export const getRdfInstances = (kwds: {
  class_: NamedNode;
  dataset: Dataset;
}): TermSet<BlankNode | NamedNode> => {
  const instances: TermSet<BlankNode | NamedNode> = new TermSet();
  getRdfInstancesRecursive({...kwds, instances});
  return instances;
};

const getRdfInstancesRecursive = (kwds: {
  class_: NamedNode;
  dataset: Dataset;
  instances: TermSet<BlankNode | NamedNode>;
}): void => {
  const {class_, dataset, instances} = kwds;

  // Get instances of the class
  dataset.match(null, rdf.type, class_).forEach(quad => {
    switch (quad.subject.termType) {
      case "BlankNode":
      case "NamedNode":
        instances.add(quad.subject as BlankNode | NamedNode);
        break;
      default:
        break;
    }
  });

  // Recurse into class's sub-classes
  dataset.match(null, rdfs.subClassOf, class_, null).forEach(quad => {
    if (quad.subject.termType !== "NamedNode") {
      return;
    }
    getRdfInstancesRecursive({
      class_: quad.subject,
      dataset,
      instances,
    });
  });
};
