import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";

export interface ConfigurationParameters {
    dataset: Dataset;
    graphNode: DefaultGraph | NamedNode;
    node: BlankNode | NamedNode;
}
