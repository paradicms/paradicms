import {BlankNode, DatasetCore, NamedNode} from "@rdfjs/types";

export interface Model {
  readonly identifier: BlankNode | NamedNode;
  toRdf(addToDataset: DatasetCore): void;
  readonly uri: string | null;
}
