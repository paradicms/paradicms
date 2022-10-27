import {BlankNode, NamedNode} from "n3";
import {ShapesGraph} from "./ShapesGraph";

export interface ShapeParameters {
  node: BlankNode | NamedNode;
  shapesGraph: ShapesGraph;
}
