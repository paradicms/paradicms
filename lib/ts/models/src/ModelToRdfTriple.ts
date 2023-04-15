import {BlankNode, Literal, NamedNode} from "@rdfjs/types";

export interface ModelToRdfTriple {
  readonly subject: BlankNode | NamedNode;
  readonly object: BlankNode | Literal | NamedNode;
  readonly predicate: NamedNode;
}
