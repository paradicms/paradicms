import {Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";
import {ModelParameters} from "./ModelParameters";
import {Resource} from "@paradicms/rdf";

export class Model extends Resource {
  readonly modelSet: ModelSet;
  readonly graphNode: DefaultGraph | NamedNode;

  constructor(kwds: ModelParameters) {
    super({node: kwds.node});
    this.modelSet = kwds.modelSet;
    this.graphNode = kwds.graphNode;
  }

  get dataset(): Dataset {
    return this.modelSet.dataset;
  }
}
