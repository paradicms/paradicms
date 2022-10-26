import {BlankNode, DefaultGraph, NamedNode, Store, Term} from "n3";
import {ShapesGraph} from "./ShapesGraph";
import {ShapeParameters} from "./ShapeParameters";

export class Shape {
  readonly graphNode: DefaultGraph | NamedNode;
  protected readonly _node: BlankNode | NamedNode;
  readonly shapesGraph: ShapesGraph;

  constructor(kwds: ShapeParameters) {
    this.graphNode = kwds.graphNode;
    this._node = kwds.node;
    this.shapesGraph = kwds.shapesGraph;
  }

  get node(): BlankNode | NamedNode {
    return this._node;
  }

  protected propertyObjects(property: NamedNode): readonly Term[] {
    return this.store.getObjects(this.node, property, this.graphNode);
  }

  protected get store(): Store {
    return this.shapesGraph.store;
  }
}
