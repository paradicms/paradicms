import {BlankNode, DefaultGraph, NamedNode} from "n3";
import {ShapesGraph} from "./ShapesGraph";

export interface ShapeParameters {
  graphNode: DefaultGraph | NamedNode;
  node: BlankNode | NamedNode;
  shapesGraph: ShapesGraph;
}
