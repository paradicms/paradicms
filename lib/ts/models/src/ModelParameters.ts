import {ModelSet} from "./ModelSet";
import {BlankNode, DefaultGraph, NamedNode} from "@rdfjs/types";

export interface ModelParameters {
  graphNode: BlankNode | DefaultGraph | NamedNode;
  modelSet: ModelSet;
  node: BlankNode | NamedNode;
}
