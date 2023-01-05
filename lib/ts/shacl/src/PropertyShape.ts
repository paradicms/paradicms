import {Shape} from "./Shape";
import {BlankNode, Literal, NamedNode, Term} from "@rdfjs/types";
import {dash, sh, xsd} from "@paradicms/vocabularies";
import {PropertyGroup} from "./PropertyGroup";
import {
  parseFloatOrNull,
  parseIntOrNull,
  requireNonNull,
} from "@paradicms/utilities";
import {readRdfList} from "@paradicms/rdf";
import {NodeShape} from "./NodeShape";

type PropertyShapeValue = BlankNode | Literal | NamedNode;

const hasPropertyShapeValueTermType = (term: Term): boolean => {
  switch (term.termType) {
    case "BlankNode":
    case "NamedNode":
    case "Literal":
      return true;
    default:
      return false;
  }
};

export class PropertyShape extends Shape {
  get classes(): readonly NamedNode[] {
    return this.filterAndMapObjects(sh.class, term =>
      term.termType === "NamedNode" ? term : null
    );
  }

  get datatype(): NamedNode | null {
    return this.findAndMapObject(sh.datatype, term =>
      term.termType === "NamedNode" ? term : null
    );
  }

  get defaultValue(): PropertyShapeValue | null {
    return this.findAndMapObject(sh.defaultValue, term =>
      hasPropertyShapeValueTermType(term) ? (term as PropertyShapeValue) : null
    );
  }

  get editor(): NamedNode | null {
    return this.findAndMapObject(dash.editor, term =>
      term.termType === "NamedNode" ? term : null
    );
  }

  get group(): PropertyGroup | null {
    return this.findAndMapObject(sh.group, term =>
      term.termType === "NamedNode"
        ? this.shapesGraph.propertyGroupByNode(term)
        : null
    );
  }

  get hasValue(): PropertyShapeValue | null {
    return this.findAndMapObject(sh.hasValue, term =>
      hasPropertyShapeValueTermType(term) ? (term as PropertyShapeValue) : null
    );
  }

  get in_(): readonly PropertyShapeValue[] | null {
    return this.findAndMapObject(sh.in, term => {
      switch (term.termType) {
        case "BlankNode":
        case "NamedNode":
          return readRdfList({
            dataset: this.dataset,
            node: term,
          });
        default:
          return null;
      }
    });
  }

  get maxCount(): number | null {
    return this.findAndMapObject(sh.maxCount, term =>
      term.termType == "Literal" &&
      (!term.datatype || term.datatype.equals(xsd.integer))
        ? parseIntOrNull(term.value)
        : null
    );
  }

  get minCount(): number | null {
    return this.findAndMapObject(sh.minCount, term =>
      term.termType == "Literal" &&
      (!term.datatype || term.datatype.equals(xsd.integer))
        ? parseIntOrNull(term.value)
        : null
    );
  }

  get nodeShapes(): readonly NodeShape[] {
    return this.filterAndMapObjects(sh.node, term => {
      switch (term.termType) {
        case "BlankNode":
        case "NamedNode":
          return this.shapesGraph.nodeShapeByNode(term);
        default:
          return null;
      }
    });
  }

  get or(): readonly PropertyShape[] {
    const propertyShapes: PropertyShape[] = [];
    for (const orQuad of this.dataset.match(
      this.node,
      sh.or,
      null,
      this.shapesGraph.graphNode
    )) {
      switch (orQuad.object.termType) {
        case "BlankNode":
        case "NamedNode":
          break;
        default:
          continue;
      }

      for (const propertyShapeNode of readRdfList({
        dataset: this.dataset,
        graph: this.shapesGraph.graphNode,
        node: orQuad.object,
      })) {
        switch (propertyShapeNode.termType) {
          case "BlankNode":
          case "NamedNode":
            propertyShapes.push(
              this.shapesGraph.propertyShapeByNode(propertyShapeNode)
            );
            break;
        }
      }
    }
    return propertyShapes;
  }

  get order(): number | null {
    return this.findAndMapObject(sh.maxCount, term =>
      term.termType == "Literal" ? parseFloatOrNull(term.value) : null
    );
  }

  get path(): NamedNode {
    return requireNonNull(
      this.findAndMapObject(sh.path, term =>
        term.termType === "NamedNode" ? (term as NamedNode) : null
      )
    );
  }

  get singleLine(): boolean | null {
    return this.findAndMapObject(dash.singleLine, term => {
      if (term.termType !== "Literal") {
        return null;
      } else if (!term.datatype.equals(xsd.boolean)) {
        return null;
      }
      switch (term.value.toLowerCase()) {
        case "1":
        case "true":
          return true;
        case "0":
        case "false":
          return false;
        default:
          return null;
      }
    });
  }

  get viewer(): NamedNode | null {
    return this.findAndMapObject(dash.viewer, term =>
      term.termType === "NamedNode" ? (term as NamedNode) : null
    );
  }
}
