import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";

export interface ResourceBackedModelParameters {
  dataset: Dataset;
  graphNode: BlankNode | DefaultGraph | NamedNode;
  modelSet: ModelSet;
  node: BlankNode | NamedNode;
}
