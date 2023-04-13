import {ModelSet} from "./ModelSet";
import {BlankNode, DefaultGraph, NamedNode} from "@rdfjs/types";

export interface ResourceBackedModelParameters {
  graphNode: BlankNode | DefaultGraph | NamedNode;
  modelSet: ModelSet;
  node: BlankNode | NamedNode;
}
