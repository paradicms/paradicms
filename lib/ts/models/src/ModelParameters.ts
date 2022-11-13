import {ModelSet} from "./ModelSet";
import {BlankNode, DefaultGraph, NamedNode} from "n3";

export interface ModelParameters {
  modelSet: ModelSet;
  graphNode: DefaultGraph | NamedNode;
  node: BlankNode | NamedNode;
}
