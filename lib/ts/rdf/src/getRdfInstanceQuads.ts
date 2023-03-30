import {Dataset, NamedNode, Quad} from "@rdfjs/types";
import TermSet from "@rdfjs/term-set";
import {rdf, rdfs} from "@tpluscode/rdf-ns-builders";

/**
 * Get all unique RDF instanceQuads of a given class in the given dataset.
 *
 * Returns the quads declaring an instance to be of the given class or one of its subclasses.
 */
export const getRdfInstanceQuads = (kwds: {
  class_: NamedNode;
  dataset: Dataset;
}): TermSet<Quad> => {
  const instanceQuads: TermSet<Quad> = new TermSet();
  getRdfInstanceQuadsRecursive({
    ...kwds,
    instanceQuads,
    visitedClasses: new TermSet<NamedNode>(),
  });
  return instanceQuads;
};

const getRdfInstanceQuadsRecursive = (kwds: {
  class_: NamedNode;
  dataset: Dataset;
  instanceQuads: TermSet<Quad>;
  visitedClasses: TermSet<NamedNode>;
}): void => {
  const {class_, dataset, instanceQuads, visitedClasses} = kwds;

  // Get instanceQuads of the class
  dataset.match(null, rdf.type, class_).forEach(quad => {
    switch (quad.subject.termType) {
      case "BlankNode":
      case "NamedNode":
        instanceQuads.add(quad);
        break;
      default:
        break;
    }
  });
  visitedClasses.add(class_);

  // Recurse into class's sub-classes that haven't been visited yet.
  dataset.match(null, rdfs.subClassOf, class_, null).forEach(quad => {
    if (quad.subject.termType !== "NamedNode") {
      return;
    } else if (visitedClasses.has(quad.subject)) {
      return;
    }
    getRdfInstanceQuadsRecursive({
      class_: quad.subject,
      dataset,
      instanceQuads,
      visitedClasses,
    });
  });
};
