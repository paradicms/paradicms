import {Resource} from "@paradicms/rdf";
import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {Model} from "./Model";
import {ModelSet} from "./ModelSet";
import {ModelToRdfTriple} from "./ModelToRdfTriple";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {getGraphTriples} from "./getGraphTriples";

export abstract class ResourceBackedModel extends Resource implements Model {
  readonly dataset: Dataset;
  readonly graph: BlankNode | DefaultGraph | NamedNode;
  readonly modelSet: ModelSet;

  constructor(kwds: ResourceBackedModelParameters) {
    super({identifier: kwds.identifier});
    this.dataset = kwds.dataset;
    this.modelSet = kwds.modelSet;
    this.graph = kwds.graph;
  }

  toRdf(): readonly ModelToRdfTriple[] {
    return getGraphTriples({dataset: this.dataset, graph: this.graph});
  }

  override toString(): string {
    throw new EvalError("should never call toString()");
  }

  get uri(): string | null {
    return this.identifier.termType === "NamedNode" ? this.identifier.value : null;
  }
}
