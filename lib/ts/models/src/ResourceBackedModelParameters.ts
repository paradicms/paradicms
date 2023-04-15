import {DatasetBackedModelSet} from "DatasetBackedModelSet";
import {BlankNode, DefaultGraph, NamedNode} from "@rdfjs/types";

export interface ResourceBackedModelParameters {
  graphNode: BlankNode | DefaultGraph | NamedNode;
  modelSet: DatasetBackedModelSet;
  node: BlankNode | NamedNode;
}
