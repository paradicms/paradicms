import {DataGraph, ShapesGraph} from "@paradicms/shacl";
import {NamedNode} from "@rdfjs/types";
import {FormNodeType} from "./FormNodeType";
import {Model} from "./Model";

export class Form extends Model {
  readonly dataGraph: DataGraph;
  readonly nodeTypes: readonly FormNodeType[];
  readonly shapesGraph: ShapesGraph;

  constructor(kwds: {
    dataGraph: DataGraph;
    nodeRdfTypes: readonly NamedNode[];
    shapesGraph: ShapesGraph;
  }) {
    super();
    this.dataGraph = kwds.dataGraph;
    this.nodeTypes = kwds.nodeRdfTypes.map(
      nodeRdfType => new FormNodeType({form: this, rdfType: nodeRdfType})
    );
    this.shapesGraph = kwds.shapesGraph;
  }

  get id(): string {
    throw new EvalError("not implemented");
  }

  get label(): string {
    throw new EvalError("not implemented");
  }

  nodeTypeById(id: string): FormNodeType {
    const nodeType = this.nodeTypes.find(nodeType => nodeType.id === id);
    if (!nodeType) {
      throw new RangeError("unknown form node type id: " + id);
    }
    return nodeType;
  }
}
