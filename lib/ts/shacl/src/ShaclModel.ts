import {BlankNode, NamedNode} from "@rdfjs/types";
import {ShapesGraph} from "./ShapesGraph";
import {Resource} from "@paradicms/rdf";

export abstract class ShaclModel extends Resource {
  readonly shapesGraph: ShapesGraph;

  constructor(kwds: {node: BlankNode | NamedNode; shapesGraph: ShapesGraph}) {
    super({identifier: kwds.node});
    this.shapesGraph = kwds.shapesGraph;
  }

  get dataset() {
    return this.shapesGraph.dataset;
  }

  get graph() {
    return this.graphNode;
  }

  get graphNode() {
    return this.shapesGraph.graphNode;
  }

  get node() {
    return this.identifier;
  }
}
