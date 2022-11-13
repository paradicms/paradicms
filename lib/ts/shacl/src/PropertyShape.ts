import {Shape} from "./Shape";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {sh, xsd} from "@paradicms/vocabularies";
import {PropertyGroup} from "./PropertyGroup";
import {requireDefined} from "./requireDefined";

export class PropertyShape extends Shape {
  get datatype(): NamedNode | null {
    return (
      (this.getObjects(sh.datatype).find(term => term.termType === "NamedNode")
        ?.value as NamedNode | undefined) ?? null
    );
  }

  get defaultValue(): BlankNode | NamedNode | Literal | null {
    return (
      (this.getObjects(sh.defaultValue).find(term => {
        switch (term.termType) {
          case "BlankNode":
          case "NamedNode":
          case "Literal":
            return true;
          default:
            return false;
        }
      })?.value as BlankNode | NamedNode | Literal | undefined) ?? null
    );
  }

  get description(): string | null {
    return (
      this.getObjects(sh.description).find(term => term.termType === "Literal")
        ?.value ?? null
    );
  }

  get editor(): NamedNode | null {
    return (
      (this.getObjects(dash.editor).find(
        term => term.termType === "NamedNode"
      ) as NamedNode | undefined) ?? null
    );
  }

  private getIntegerLiteralObject(property: NamedNode): number | null {
    const literal = this.getObjects(property).find(
      term =>
        term.termType === "Literal" &&
        (!term.datatype || term.datatype.equals(xsd.integer)) &&
        !Number.isNaN(Number.parseInt(term.value))
    );
    return literal ? Number.parseInt(literal.value) : null;
  }

  get group(): PropertyGroup | null {
    for (const groupObject of this.getObjects(sh.group)) {
      if (groupObject.termType === "NamedNode") {
        return this.shapesGraph.propertyGroupByNode(groupObject);
      }
    }
    return null;
  }

  get maxCount(): number | null {
    return this.getIntegerLiteralObject(sh.maxCount);
  }

  get minCount(): number | null {
    return this.getIntegerLiteralObject(sh.minCount);
  }

  get name(): string | null {
    return (
      this.getObjects(sh.name_).find(term => term.termType === "Literal")
        ?.value ?? null
    );
  }

  get order(): number | null {
    for (const orderObject of this.getObjects(sh.order)) {
      if (orderObject.termType !== "Literal") {
        continue;
      }
      const order = Number.parseFloat(orderObject.value);
      if (!Number.isNaN(order)) {
        return order;
      }
    }
    return null;
  }

  get path(): NamedNode {
    return requireDefined(
      this.getObjects(sh.path).find(term => term.termType === "NamedNode")
    ) as NamedNode;
  }

  get singleLine(): boolean | null {
    for (const singleLine of this.getObjects(dash.singleLine)) {
      if (singleLine.termType !== "Literal") {
        continue;
      } else if (!singleLine.datatype.equals(xsd.boolean_)) {
        continue;
      }
      switch (singleLine.value.toLowerCase()) {
        case "1":
        case "true":
          return true;
        case "0":
        case "false":
          return false;
      }
    }
    return null;
  }

  get viewer(): NamedNode | null {
    return (
      (this.getObjects(dash.viewer).find(
        term => term.termType === "NamedNode"
      ) as NamedNode | undefined) ?? null
    );
  }
}
