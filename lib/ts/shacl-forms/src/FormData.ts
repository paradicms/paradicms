import {
  DataGraph,
  NodeShape,
  ShaclProcessor,
  ShapesGraph,
} from "@paradicms/shacl";
import {FormNodeTypeData} from "./FormNodeTypeData";
import {FormShape} from "./FormShape";

export class FormData {
  readonly dataGraph: DataGraph;
  readonly nodeTypes: readonly FormNodeTypeData[];
  protected readonly _shape: FormShape;

  constructor(kwds: {dataGraph: DataGraph; shape: FormShape}) {
    this.dataGraph = kwds.dataGraph;
    this.nodeTypes = kwds.shape.nodeRdfTypes.map(nodeRdfType => {
      const nodeShapes: NodeShape[] = [];
      new ShaclProcessor({
        dataGraph: kwds.dataGraph,
        shapesGraph: kwds.shape.shapesGraph,
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
      return new FormNodeTypeData({
        form: this,
        rdfType: nodeRdfType,
        shape: nodeShape,
      });
    });
    this._shape = kwds.shape;
  }

  nodeTypeById(id: string): FormNodeTypeData {
    const nodeType = this.nodeTypes.find(nodeType => nodeType.id === id);
    if (!nodeType) {
      throw new RangeError("unknown form node type id: " + id);
    }
    return nodeType;
  }

  get shape(): FormShape {
    return this._shape;
  }

  get shapesGraph(): ShapesGraph {
    return this.shape.shapesGraph;
  }
}
