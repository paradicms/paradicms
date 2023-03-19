import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";

export interface ConfigurationParameters {
  dataset: Dataset;
  graphNode: BlankNode | DefaultGraph | NamedNode;
  node: BlankNode | NamedNode;
}
