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
  readonly nodeTypes: readonly FormNodeType[];
  readonly shapesGraph: ShapesGraph;

  constructor(kwds: {
    dataGraph: DataGraph;
    nodeRdfTypes: readonly NamedNode[];
    shapesGraph: ShapesGraph;
  }) {
    super();
    this.dataGraph = kwds.dataGraph;
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
            `RDF type ${nodeRdfType.value} does not correspond to any node shapes`
          );
        case 1:
          nodeShape = nodeShapes[0];
        default:
          throw new EvalError(
            "not implemented: synthesize a NodeShape with sh:and the multiple shapes"
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
}
