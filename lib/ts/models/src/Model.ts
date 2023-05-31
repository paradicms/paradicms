import {BlankNode, DatasetCore, NamedNode} from "@rdfjs/types";

export interface Model {
  readonly identifier: BlankNode | NamedNode;
  readonly sameAsUris: readonly string[];
  toRdf(addToDataset: DatasetCore): void;
  readonly uri: string | null;
}
