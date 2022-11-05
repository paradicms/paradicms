import {DataGraph, NodeShape, ShapesGraph} from "@paradicms/shacl";
import {FormNode} from "./FormNode";
import {DataGraphNode} from "./DataGraphNode";
import {DataFactory, NamedNode} from "n3";
import {RDF} from "@paradicms/vocabularies";

export class Form {
  readonly dataGraph: DataGraph;
  readonly shapesGraph: ShapesGraph;

  constructor(kwds: {dataGraph: DataGraph; shapesGraph: ShapesGraph}) {
    this.dataGraph = kwds.dataGraph;
    this.shapesGraph = kwds.shapesGraph;
  }

  addNode(kwds: {dataGraphNode: NamedNode; rdfType: NamedNode}): FormNode {
    const {dataGraphNode, rdfType} = kwds;

    // Add (node, rdf:type, ...)
    // Assumes the shapes graph has a class or implicit class target
    this.dataGraph.store.add(
      DataFactory.quad(dataGraphNode, RDF.type, rdfType)
    );

    throw new EvalError();
    // return new FormNode({
    //   dataGraphNode,
    //   form: this,
    //   this.this.shapesGraph.
    // });
  }

  get nodes(): readonly FormNode[] {
    return Object.values(this.nodesByUri);
  }

  get nodesByUri(): {[index: string]: FormNode} {
    const formNodesByUri: {
      [index: string]: {
        form: Form;
        dataGraphNode: DataGraphNode;
        shapes: NodeShape[];
      };
    } = {};
    for (const nodeShape of this.shapesGraph.nodeShapes) {
      for (const target of this.dataGraph.shapeFocusNodes(nodeShape)) {
        if (target.termType !== "NamedNode") {
          continue;
        }
        let formNode = formNodesByUri[target.value];
        if (formNode) {
          formNode.shapes.push(nodeShape);
        } else {
          formNodesByUri[target.value] = formNode = {
            form: this,
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
