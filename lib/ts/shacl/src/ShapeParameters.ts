import {BlankNode, NamedNode} from "@rdfjs/types";
import {ShapesGraph} from "./ShapesGraph";

export interface ShapeParameters {
  node: BlankNode | NamedNode;
  shapesGraph: ShapesGraph;
}
