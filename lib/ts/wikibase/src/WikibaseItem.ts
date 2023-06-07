import {WikibaseArticle} from "./WikibaseArticle";
import {WikibaseStatement} from "./WikibaseStatement";
import {BlankNode, DefaultGraph, NamedNode} from "@rdfjs/types";

export interface WikibaseItem {
  readonly altLabels: readonly string[];
  readonly articles: readonly WikibaseArticle[];
  readonly graph: BlankNode | DefaultGraph | NamedNode;
  readonly identifier: NamedNode;
  readonly prefLabel: string | null;
  readonly statements: readonly WikibaseStatement[];
}
