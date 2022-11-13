import {Model} from "./Model";
import {rdf, sh} from "@paradicms/vocabularies";
import {Literal, NamedNode} from "@rdfjs/types";

export class Shape extends Model {
  /**
   * The rdf:Class's this shape is or is a subClassOf.
   */
  get implicitClassTargets(): readonly NamedNode[] {
    const isRdfsClass = (rdfType: NamedNode) => {
      if (rdfType.equals(rdfs.Class)) {
        return true;
      }
      for (const parentRdfType of this.dataset.getObjects(
        rdfType,
        rdfs.subClassOf,
        this.shapesGraph.graph
      )) {
        if (
          parentRdfType.termType === "NamedNode" &&
          isRdfsClass(parentRdfType)
        ) {
          return true;
        }
      }
      return false;
    };

    return this.getObjects(rdf.type)
      .filter(term => term.termType === "NamedNode")
      .map(term => term as NamedNode)
      .filter(isRdfsClass);
  }

  get targetClasses(): readonly NamedNode[] {
    return this.getObjects(sh.targetClass)
      .filter(term => term.termType === "NamedNode")
      .map(term => term as NamedNode);
  }

  get targetNodes(): readonly (Literal | NamedNode)[] {
    return this.getObjects(sh.targetNode)
      .filter(
        term => term.termType === "Literal" || term.termType === "NamedNode"
      )
      .map(term => term as Literal | NamedNode);
  }

  get targetObjectsOf(): readonly NamedNode[] {
    return this.getObjects(sh.targetObjectsOf)
      .filter(term => term.termType === "NamedNode")
      .map(term => term as NamedNode);
  }

  get targetSubjectsOf(): readonly NamedNode[] {
    return this.getObjects(sh.targetSubjectsOf)
      .filter(term => term.termType === "NamedNode")
      .map(term => term as NamedNode);
  }
}
