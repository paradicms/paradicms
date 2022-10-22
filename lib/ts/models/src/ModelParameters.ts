import {Dataset} from "./Dataset";
import {BlankNode, DefaultGraph, NamedNode} from "n3";

export interface ModelParameters {
  dataset: Dataset;
  graphNode: DefaultGraph | NamedNode;
  node: BlankNode | NamedNode;
}
