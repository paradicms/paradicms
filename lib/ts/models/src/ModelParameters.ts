import {ModelSet} from "./ModelSet";
import {BlankNode, DefaultGraph, NamedNode} from "@rdfjs/types";

export interface ModelParameters {
  modelSet: ModelSet;
  graphNode: DefaultGraph | NamedNode;
  node: BlankNode | NamedNode;
}
