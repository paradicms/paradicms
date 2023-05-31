import {BlankNode, DatasetCore, NamedNode} from "@rdfjs/types";

export interface Model {
  readonly identifiers: readonly (BlankNode | NamedNode)[];
  toRdf(addToDataset: DatasetCore): void;
}
