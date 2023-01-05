import {ShapesGraph} from "@paradicms/shacl";
import {NamedNode} from "@rdfjs/types";
import {FormModel} from "./FormModel";

export class FormShape extends FormModel {
  readonly id: string;
  readonly label: string;
  readonly nodeRdfTypes: readonly NamedNode[];
  readonly shapesGraph: ShapesGraph;

  constructor(kwds: {
    id: string;
    label: string;
    nodeRdfTypes: readonly NamedNode[];
    shapesGraph: ShapesGraph;
  }) {
    super();
    this.id = kwds.id;
    this.label = kwds.label;
    this.nodeRdfTypes = kwds.nodeRdfTypes;
    this.shapesGraph = kwds.shapesGraph;
  }
}
