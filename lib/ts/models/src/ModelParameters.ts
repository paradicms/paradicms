import {ModelSet} from "./ModelSet";
import {BlankNode, DefaultGraph, NamedNode} from "n3";

export interface ModelParameters {
  dataset: ModelSet;
  graphNode: DefaultGraph | NamedNode;
  node: BlankNode | NamedNode;
}
