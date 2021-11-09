import {Dataset} from "./Dataset";
import {BlankNode, NamedNode} from "n3";

export interface ModelParameters {
  dataset: Dataset;
  graphNode: NamedNode;
  node: BlankNode | NamedNode;
}
