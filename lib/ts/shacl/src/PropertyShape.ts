import {Shape} from "./Shape";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {dash, sh, xsd} from "@paradicms/vocabularies";
import {PropertyGroup} from "./PropertyGroup";
import {
  parseFloatOrNull,
  parseIntOrNull,
  requireNonNull,
} from "@paradicms/utilities";
import {readRdfList} from "@paradicms/rdf";

export class PropertyShape extends Shape {
  get datatype(): NamedNode | null {
    return this.findAndMapObject(sh.datatype, term =>
      term.termType === "NamedNode" ? term : null
    );
  }

  get defaultValue(): BlankNode | NamedNode | Literal | null {
    return this.findAndMapObject(sh.defaultValue, term => {
      switch (term.termType) {
        case "BlankNode":
        case "NamedNode":
        case "Literal":
          return term;
        default:
          return null;
      }
    });
  }

  get description(): string | null {
    return this.findAndMapObject(sh.description, term =>
      term.termType === "Literal" ? term.value : null
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

  get name(): string | null {
    return this.findAndMapObject(sh.name, term =>
      term.termType === "Literal" ? term.value : null
    );
  }

  get or(): readonly PropertyShape[] {
    const propertyShapes: PropertyShape[] = [];
    for (const orQuad of this.dataset.match(
      this.node,
      sh.or,
      null,
      this.shapesGraph.graphNode
    )) {
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
