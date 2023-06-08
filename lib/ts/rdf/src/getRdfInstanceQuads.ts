import {DatasetCore, NamedNode, Quad} from "@rdfjs/types";
import TermSet from "@rdfjs/term-set";
import {rdf, rdfs} from "@tpluscode/rdf-ns-builders";

/**
 * Get all unique RDF instanceQuads of a given class in the given dataset.
 *
 * Returns the quads declaring an instance to be of the given class or one of its subclasses.
 */
export const getRdfInstanceQuads = (kwds: {
  class_: NamedNode;
  dataset: DatasetCore;
  instanceOfPredicate?: NamedNode;
  subClassOfPredicate?: NamedNode;
}): TermSet<Quad> => {
  const instanceQuads: TermSet<Quad> = new TermSet();
  getRdfInstanceQuadsRecursive({
    class_: kwds.class_,
    dataset: kwds.dataset,
    instanceOfPredicate: kwds.instanceOfPredicate ?? rdf.type,
    instanceQuads,
    subClassOfPredicate: kwds.subClassOfPredicate ?? rdfs.subClassOf,
    visitedClasses: new TermSet<NamedNode>(),
  });
  return instanceQuads;
};

const getRdfInstanceQuadsRecursive = (kwds: {
  class_: NamedNode;
  dataset: DatasetCore;
  instanceOfPredicate: NamedNode;
  instanceQuads: TermSet<Quad>;
  subClassOfPredicate: NamedNode;
  visitedClasses: TermSet<NamedNode>;
}): void => {
  const {
    class_,
    dataset,
    instanceOfPredicate,
    instanceQuads,
    subClassOfPredicate,
    visitedClasses,
  } = kwds;

  // Get instanceQuads of the class
  for (const quad of dataset.match(null, instanceOfPredicate, class_)) {
    switch (quad.subject.termType) {
      case "BlankNode":
      case "NamedNode":
        instanceQuads.add(quad);
        break;
      default:
        break;
    }
  }
  visitedClasses.add(class_);

  // Recurse into class's sub-classes that haven't been visited yet.
  for (const quad of dataset.match(null, subClassOfPredicate, class_, null)) {
    if (quad.subject.termType !== "NamedNode") {
      continue;
    } else if (visitedClasses.has(quad.subject)) {
      continue;
    }
    getRdfInstanceQuadsRecursive({
      class_: quad.subject,
      dataset,
      instanceOfPredicate,
      instanceQuads,
      subClassOfPredicate,
      visitedClasses,
    });
  }
};
