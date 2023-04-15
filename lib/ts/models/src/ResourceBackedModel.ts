import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Resource} from "@paradicms/rdf";
import {Model} from "./Model";
import {DatasetBackedModelSet} from "DatasetBackedModelSet";

export class ResourceBackedModel extends Resource implements Model {
  readonly modelSet: DatasetBackedModelSet;
  readonly graphNode: BlankNode | DefaultGraph | NamedNode;

  constructor(kwds: ResourceBackedModelParameters) {
    super({node: kwds.node});
    this.modelSet = kwds.modelSet;
    this.graphNode = kwds.graphNode;
  }

  get dataset(): Dataset {
    return this.modelSet.dataset;
  }
}
