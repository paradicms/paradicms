import {ShapeParameters} from "./ShapeParameters";
import {Model} from "./Model";
import {NamedNode, Store, Term} from "n3";
import {RDF, RDFS, SH} from "@paradicms/vocabularies";

export class Shape extends Model {
  constructor(kwds: ShapeParameters) {
    super(kwds);
  }

  private classTargets(dataGraph: Store): readonly Term[] {
    const targets: Term[] = [];
    for (const targetClass of this.getObjects(SH.targetClass)) {
      if (targetClass.termType !== "NamedNode") {
        continue;
      }
      targets.push(...this.classTargetsRecursive(dataGraph, targetClass));
    }
    return targets;
  }

  /**
   * Get instances of the targetClass or its sub-classes
   */
  private classTargetsRecursive(
    dataGraph: Store,
    targetClass: NamedNode
  ): readonly Term[] {
    const targets: Term[] = [];

    // Get instances of the targetClass
    dataGraph.forSubjects(
      (subject) => {
        switch (subject.termType) {
          case "BlankNode":
          case "NamedNode":
            targets.push(subject);
            break;
        }
      },
      RDF.type,
      targetClass,
      null
    );

    // Recurse into targetClass's sub-classes
    dataGraph.forSubjects(
      (childClass) => {
        if (childClass.termType !== "NamedNode") {
          return;
        }
        targets.push(...this.classTargetsRecursive(dataGraph, childClass));
      },
      RDFS.subClassOf,
      targetClass,
      null
    );

    return targets;
  }

  private implicitClassTargets(dataGraph: Store): readonly Term[] {
    const targets: Term[] = [];

    const isRdfsClass = (rdfType: NamedNode) => {
      if (rdfType.equals(RDFS.Class)) {
        return true;
      }
      for (const parentRdfType of this.store.getObjects(
        rdfType,
        RDFS.subClassOf,
        this.shapesGraph.graph
      )) {
        if (isRdfsClass(parentRdfType)) {
          return true;
        }
      }
      return false;
    };

    // If the shape has an rdf:type of rdfs:Class or a sub-class of rdfs:Class,
    // all data graph instances of the shape or its sub-classes are targets.
    for (const rdfType of this.getObjects(RDF.type)) {
      if (rdfType.termType !== "NamedNode") {
        continue;
      }
      if (isRdfsClass(rdfType)) {
        targets.push(this.classTargetsRecursive(dataGraph, rdfType));
      }
    }
    return targets;
  }

  private nodeTargets(dataGraph: Store): readonly Term[] {
    const targets: Term[] = [];
    // A node target is specified using the sh:targetNode predicate. Each value of sh:targetNode in a shape is either an IRI or a literal.
    for (const targetNode of this.getObjects(SH.targetNode)) {
      switch (targetNode.termType) {
        case "Literal":
          targets.push(targetNode);
          break;
        case "NamedNode":
          if (dataGraph.some(() => true, targetNode, null, null, null)) {
            targets.push(targetNode);
          }
          break;
      }
    }
    return targets;
  }

  objectsOfTargets(dataGraph: Store): readonly Term[] {}

  subjectsOfTargets(dataGraph: Store): readonly Term[] {}

  targets(dataGraph: Store): readonly Term[] {
    const targets: Term[] = [];

    // Target declarations
    targets.push(...this.nodeTargets(dataGraph));
    targets.push(...this.classTargets(dataGraph));
    targets.push(...this.subjectsOfTargets(dataGraph));
    targets.push(...this.objectsOfTargets(dataGraph));
    Deduplicate targets

    return targets;
  }
}
