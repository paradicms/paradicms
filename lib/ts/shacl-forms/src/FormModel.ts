import {DataGraph, ShapesGraph} from "@paradicms/shacl";

export abstract class FormModel {
  abstract readonly dataGraph: DataGraph;
  abstract readonly shapesGraph: ShapesGraph;

  // Unique identifier for this model among other models of the same type
  abstract readonly id: string;

  // Best human-readable label for this model among other models of the same type
  abstract readonly label: string;
}
