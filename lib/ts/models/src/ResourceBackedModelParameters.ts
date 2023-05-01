import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";

export interface ResourceBackedModelParameters {
  dataset: Dataset;
  graph: BlankNode | DefaultGraph | NamedNode;
  identifier: BlankNode | NamedNode;
  modelSet: ModelSet;
}
