import {BlankNode, NamedNode} from "@rdfjs/types";
import {ShapesGraph} from "./ShapesGraph";
import {Resource} from "@paradicms/rdf";

export abstract class Model extends Resource {
  protected readonly shapesGraph: ShapesGraph;

  constructor(kwds: {node: BlankNode | NamedNode; shapesGraph: ShapesGraph}) {
    super({node: kwds.node});
    this.shapesGraph = kwds.shapesGraph;
  }

  get dataset() {
    return this.shapesGraph.dataset;
  }

  get graphNode() {
    return this.shapesGraph.graphNode;
  }
}
