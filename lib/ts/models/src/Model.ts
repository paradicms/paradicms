import {ModelToRdfTriple} from "./ModelToRdfTriple";
import {BlankNode, NamedNode} from "@rdfjs/types";

export interface Model {
  readonly identifier: BlankNode | NamedNode;
  readonly sameAsUris: readonly string[];
  toRdf(): readonly ModelToRdfTriple[];
  readonly uri: string | null;
}
