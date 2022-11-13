import {DataGraph, ShapesGraph} from "@paradicms/shacl";

export abstract class Model {
  abstract readonly dataGraph: DataGraph;
  abstract readonly shapesGraph: ShapesGraph;
}
