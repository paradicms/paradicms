import {Resource} from "@paradicms/rdf";
import {BlankNode, Dataset, DatasetCore, DefaultGraph, NamedNode} from "@rdfjs/types";
import {Model} from "./Model";
import {ModelSet} from "./ModelSet";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";

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

  get identifiers(): readonly (BlankNode | NamedNode)[] {
    return [this.identifier];
  }

  get iris(): readonly string[] {
    return this.identifiers
        .filter(identifier => identifier.termType === "NamedNode")
        .map(identifier => identifier.value);
  }

  toRdf(addToDataset: DatasetCore) {
    for (const quad of this.dataset.match(null, null, null, this.graph)) {
      addToDataset.add(quad);
    }
  }

  override toString(): string {
    throw new EvalError("should never call toString()");
  }
}
