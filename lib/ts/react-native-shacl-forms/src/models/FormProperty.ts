import {DataGraph, PropertyShape, ShapesGraph} from "@paradicms/shacl";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {FormNode} from "./FormNode";
import {Model} from "./Model";

export class FormProperty extends Model {
  readonly formNode: FormNode;
  readonly path: NamedNode;
  readonly shapes: readonly PropertyShape[];

  constructor(kwds: {
    formNode: FormNode;
    path: NamedNode;
    shapes: readonly PropertyShape[];
  }) {
    super();
    this.formNode = kwds.formNode;
    this.path = kwds.path;
    this.shapes = kwds.shapes;
  }

  private shapeProperty<T>(
    propertyGetter: (shape: PropertyShape) => T | null
  ): T | null {
    for (const shape of this.shapes) {
      const propertyValue = propertyGetter(shape);
      if (typeof propertyValue !== null) {
        return propertyValue;
      }
    }
    return null;
  }

  get dataGraph(): DataGraph {
    return this.formNode.dataGraph;
  }

  private get dataGraphNode() {
    return this.formNode.dataGraphNode;
  }

  get editor(): NamedNode | null {
    {
      const editor = this.shapeProperty(shape => shape.editor);
      if (editor) {
        return editor;
      }
    }

    const datatype = this.shapeProperty(shape => shape.datatype);
    if (datatype) {
    }

    return null;
  }

  get maxCount(): number | null {
    return this.shapeProperty(shape => shape.maxCount);
  }

  get minCount(): number | null {
    return this.shapeProperty(shape => shape.minCount);
  }

  get shapesGraph(): ShapesGraph {
    return this.formNode.shapesGraph;
  }

  get values(): readonly (BlankNode | Literal | NamedNode)[] {
    return this.dataGraph
      .match(this.dataGraphNode, this.path, null, null)
      .toArray()
      .map(quad => quad.object)
      .filter(object => {
        switch (object.termType) {
          case "BlankNode":
          case "Literal":
          case "NamedNode":
            return true;
          default:
            return false;
        }
      }) as (BlankNode | Literal | NamedNode)[];
  }
}
