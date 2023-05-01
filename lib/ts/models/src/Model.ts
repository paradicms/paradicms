import {ModelToRdfTriple} from "./ModelToRdfTriple";
import {BlankNode, NamedNode} from "@rdfjs/types";

export interface Model {
  readonly identifier: BlankNode | NamedNode;
  toRdf(): readonly ModelToRdfTriple[];
  readonly uri: string | null;
}
