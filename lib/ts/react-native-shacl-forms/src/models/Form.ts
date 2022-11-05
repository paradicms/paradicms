import {DataGraph, ShapesGraph} from "@paradicms/shacl";
import {NamedNode} from "n3";
import {FormNodeType} from "./FormNodeType";

export class Form {
  readonly dataGraph: DataGraph;
  readonly nodeTypes: readonly FormNodeType[];
  readonly shapesGraph: ShapesGraph;

  constructor(kwds: {
    dataGraph: DataGraph;
    nodeRdfTypes: readonly NamedNode[];
    shapesGraph: ShapesGraph;
  }) {
    this.dataGraph = kwds.dataGraph;
    this.nodeTypes = kwds.nodeRdfTypes.map(
      (nodeRdfType) => new FormNodeType({form: this, rdfType: nodeRdfType})
    );
    this.shapesGraph = kwds.shapesGraph;
  }
}
