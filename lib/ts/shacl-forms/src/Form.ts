import {
  DataGraph,
  NodeShape,
  ShaclProcessor,
  ShapesGraph,
} from "@paradicms/shacl";
import {NamedNode} from "@rdfjs/types";
import {FormNodeType} from "./FormNodeType";
import {Model} from "./Model";

export class Form extends Model {
  readonly dataGraph: DataGraph;
  readonly id: string;
  readonly nodeTypes: readonly FormNodeType[];
  readonly shapesGraph: ShapesGraph;

  constructor(kwds: {
    dataGraph: DataGraph;
    id: string;
    nodeRdfTypes: readonly NamedNode[];
    shapesGraph: ShapesGraph;
  }) {
    super();
    this.dataGraph = kwds.dataGraph;
    this.id = kwds.id;
    this.nodeTypes = kwds.nodeRdfTypes.map(nodeRdfType => {
      const nodeShapes: NodeShape[] = [];
      new ShaclProcessor({
        dataGraph: kwds.dataGraph,
        shapesGraph: kwds.shapesGraph,
      }).someRdfTypeNodeShapes(nodeShape => {
        nodeShapes.push(nodeShape);
        return false;
      }, nodeRdfType);
      let nodeShape: NodeShape;
      switch (nodeShapes.length) {
        case 0:
          throw new RangeError(
            `rdf:type ${nodeRdfType.value} has no associated node shape`
          );
        case 1:
          nodeShape = nodeShapes[0];
          break;
        default:
          throw new EvalError(
            "synthesize a blank NodeShape with sh:and the multiple shapes"
          );
      }
      return new FormNodeType({
        form: this,
        rdfType: nodeRdfType,
        shape: nodeShape,
      });
    });
    this.shapesGraph = kwds.shapesGraph;
  }

  get label(): string {
    return this.id;
  }

  nodeTypeById(id: string): FormNodeType {
    const nodeType = this.nodeTypes.find(nodeType => nodeType.id === id);
    if (!nodeType) {
      throw new RangeError("unknown form node type id: " + id);
    }
    return nodeType;
  }
}
