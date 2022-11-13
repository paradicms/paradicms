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

  get dataGraph(): DataGraph {
    return this.formNode.dataGraph;
  }

  private get dataGraphNode() {
    return this.formNode.dataGraphNode;
  }

  get editor(): NamedNode | null {
    for (const shape of this.shapes) {
      const editor = shape.editor;
      if (editor) {
        return editor;
      }
    }

    return null;
  }

  get maxCount(): number | null {
    return this.shapes.find(shape => shape.maxCount !== null)?.maxCount ?? null;
  }

  get minCount(): number | null {
    return this.shapes.find(shape => shape.minCount !== null)?.minCount ?? null;
  }

  get shapesGraph(): ShapesGraph {
    return this.formNode.shapesGraph;
  }

  private get valueDatatype(): NamedNode | null {

  }

  get values(): readonly (BlankNode | Literal | NamedNode)[] {
    return this.dataGraph.
  }
}
