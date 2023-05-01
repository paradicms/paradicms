import {BlankNode, NamedNode} from "@rdfjs/types";
import {ShapesGraph} from "./ShapesGraph";
import {Resource} from "@paradicms/rdf";

export abstract class ShaclModel extends Resource {
  readonly shapesGraph: ShapesGraph;

  constructor(kwds: {
    identifier: BlankNode | NamedNode;
    shapesGraph: ShapesGraph;
  }) {
    super({identifier: kwds.identifier});
    this.shapesGraph = kwds.shapesGraph;
  }

  get dataset() {
    return this.shapesGraph.dataset;
  }

  get graph() {
    return this.shapesGraph.graphNode;
  }
}
