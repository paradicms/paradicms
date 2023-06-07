import {NamedNode} from "@rdfjs/types";

export interface WikibaseArticle {
  readonly inLanguage: string;
  readonly name: string;
  readonly node: NamedNode;
}
