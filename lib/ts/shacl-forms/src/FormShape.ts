import {ShapesGraph} from "@paradicms/shacl";
import {NamedNode} from "@rdfjs/types";

export class FormShape {
  readonly nodeRdfTypes: readonly NamedNode[];
  readonly shapesGraph: ShapesGraph;

  constructor(kwds: {
    nodeRdfTypes: readonly NamedNode[];
    shapesGraph: ShapesGraph;
  }) {
    this.nodeRdfTypes = kwds.nodeRdfTypes;
    this.shapesGraph = kwds.shapesGraph;
  }
}
