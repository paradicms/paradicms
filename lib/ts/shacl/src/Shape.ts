import {Model} from "./Model";
import {rdf, rdfs, sh} from "@paradicms/vocabularies";
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
      for (const parentRdfTypeQuad of this.dataset.match(
        rdfType,
        rdfs.subClassOf,
        null,
        this.shapesGraph.graphNode
      )) {
        if (
          parentRdfTypeQuad.object.termType === "NamedNode" &&
          isRdfsClass(parentRdfTypeQuad.object)
        ) {
          return true;
        }
      }
      return false;
    };

    return this.filterAndMapObjects(rdf.type, term =>
      term.termType === "NamedNode" && isRdfsClass(term) ? term : null
    );
  }

  get targetClasses(): readonly NamedNode[] {
    return this.filterAndMapObjects(sh.targetClass, term =>
      term.termType === "NamedNode" ? term : null
    );
  }

  get targetNodes(): readonly (Literal | NamedNode)[] {
    return this.filterAndMapObjects(sh.targetNode, term =>
      term.termType === "Literal" || term.termType === "NamedNode" ? term : null
    );
  }

  get targetObjectsOf(): readonly NamedNode[] {
    return this.filterAndMapObjects(sh.targetObjectsOf, term =>
      term.termType === "NamedNode" ? term : null
    );
  }

  get targetSubjectsOf(): readonly NamedNode[] {
    return this.filterAndMapObjects(sh.targetSubjectsOf, term =>
      term.termType === "NamedNode" ? term : null
    );
  }
}
