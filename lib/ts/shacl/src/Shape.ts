import {BlankNode, NamedNode, Store} from "n3";
import {ShapesGraph} from "./ShapesGraph";
import {ShapeParameters} from "./ShapeParameters";

export class Shape {
  readonly node: BlankNode | NamedNode;
  readonly shapesGraph: ShapesGraph;

  constructor(kwds: ShapeParameters) {
    this.node = kwds.node;
    this.shapesGraph = kwds.shapesGraph;
  }

  protected get store(): Store {
    return this.shapesGraph.store;
  }
}
