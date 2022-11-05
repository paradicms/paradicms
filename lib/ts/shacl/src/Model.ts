import {BlankNode, NamedNode, Term} from "n3";
import {ShapesGraph} from "./ShapesGraph";

export abstract class Model {
  protected readonly _node: BlankNode | NamedNode;
  protected readonly shapesGraph: ShapesGraph;

  constructor(kwds: {node: BlankNode | NamedNode; shapesGraph: ShapesGraph}) {
    this._node = kwds.node;
    this.shapesGraph = kwds.shapesGraph;
  }

  get node(): BlankNode | NamedNode {
    return this._node;
  }

  protected getObjects(property: NamedNode): readonly Term[] {
    return this.store.getObjects(this.node, property, this.shapesGraph.graph);
  }

  protected get store() {
    return this.shapesGraph.store;
  }
}
