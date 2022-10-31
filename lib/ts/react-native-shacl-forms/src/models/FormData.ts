import {DataGraph} from "./DataGraph";
import {NodeShape, ShapesGraph} from "@paradicms/shacl";
import {FormNode} from "./FormNode";
import {DataGraphNode} from "./DataGraphNode";
import {NamedNode} from "n3";

export class FormData {
  private readonly dataGraph: DataGraph;
  private readonly shapesGraph: ShapesGraph;

  constructor(kwds: {dataGraph: DataGraph; shapesGraph: ShapesGraph}) {
    this.dataGraph = kwds.dataGraph;
    this.shapesGraph = kwds.shapesGraph;
  }

  addNode(rdfType: NamedNode): FormNode {}

  get nodes(): readonly FormNode[] {
    return Object.values(this.nodesByUri);
  }

  get nodesByUri(): {[index: string]: FormNode} {
    const formNodesByUri: {
      [index: string]: {
        formData: FormData;
        dataGraphNode: DataGraphNode;
        shapes: NodeShape[];
      };
    } = {};
    for (const nodeShape of this.shapesGraph.nodeShapes) {
      for (const target of nodeShape.targets(this.dataGraph.store)) {
        if (target.termType !== "NamedNode") {
          continue;
        }
        let formNode = formNodesByUri[target.value];
        if (formNode) {
          formNode.shapes.push(nodeShape);
        } else {
          formNodesByUri[target.value] = formNode = {
            formData: this,
            dataGraphNode: target,
            shapes: [nodeShape],
          };
        }
      }
    }
    const result: {[index: string]: FormNode} = {};
    for (const uri of Object.keys(formNodesByUri)) {
      result[uri] = new FormNode(formNodesByUri[uri]);
    }
    return result;
  }
}
