import {Model} from "./Model";
import {RDF, RDFS, SH} from "@paradicms/vocabularies";
import {Literal, NamedNode} from "n3";

export class Shape extends Model {
  get implicitClassTargets(): readonly NamedNode[] {
    const isRdfsClass = (rdfType: NamedNode) => {
      if (rdfType.equals(RDFS.Class)) {
        return true;
      }
      for (const parentRdfType of this.store.getObjects(
        rdfType,
        RDFS.subClassOf,
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

    return this.getObjects(RDF.type)
      .filter((term) => term.termType === "NamedNode")
      .map((term) => term as NamedNode)
      .filter(isRdfsClass);
  }

  get targetClasses(): readonly NamedNode[] {
    return this.getObjects(SH.targetClass)
      .filter((term) => term.termType === "NamedNode")
      .map((term) => term as NamedNode);
  }

  get targetNodes(): readonly (Literal | NamedNode)[] {
    return this.getObjects(SH.targetNode)
      .filter(
        (term) => term.termType === "Literal" || term.termType === "NamedNode"
      )
      .map((term) => term as Literal | NamedNode);
  }

  get targetObjectsOf(): readonly NamedNode[] {
    return this.getObjects(SH.targetObjectsOf)
      .filter((term) => term.termType === "NamedNode")
      .map((term) => term as NamedNode);
  }

  get targetSubjectsOf(): readonly NamedNode[] {
    return this.getObjects(SH.targetSubjectsOf)
      .filter((term) => term.termType === "NamedNode")
      .map((term) => term as NamedNode);
  }
}
