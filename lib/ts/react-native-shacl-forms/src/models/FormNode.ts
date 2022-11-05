import {DataGraphNode} from "./DataGraphNode";
import {FormNodeType} from "./FormNodeType";

export class FormNode {
  readonly dataGraphNode: DataGraphNode;
  readonly type: FormNodeType;

  constructor(kwds: {dataGraphNode: DataGraphNode; type: FormNodeType}) {
    this.dataGraphNode = kwds.dataGraphNode;
    this.type = kwds.type;
  }

  // get properties(): readonly FormProperty[] {}

  // const formNodesByUri: {
  //   [index: string]: {
  //     form: Form;
  //     dataGraphNode: DataGraphNode;
  //     shapes: NodeShape[];
  //   };
  // } = {};
  // for (const nodeShape of this.form.shapesGraph.nodeShapes) {
  //   for (const target of this.form.dataGraph.shapeFocusNodes(nodeShape)) {
  //     if (target.termType !== "NamedNode") {
  //       continue;
  //     }
  //     let formNode = formNodesByUri[target.value];
  //     if (formNode) {
  //       formNode.shapes.push(nodeShape);
  //     } else {
  //       formNodesByUri[target.value] = formNode = {
  //         form: this,
  //         dataGraphNode: target,
  //         shapes: [nodeShape],
  //       };
  //     }
  //   }
  // }
  // const result: {[index: string]: FormNode} = {};
  // for (const uri of Object.keys(formNodesByUri)) {
  //   result[uri] = new FormNode(formNodesByUri[uri]);
  // }
  // return result;
}
