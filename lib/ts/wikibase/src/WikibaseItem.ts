import {BlankNode, DefaultGraph, Literal, NamedNode} from "@rdfjs/types";
import {WikibaseArticle} from "./WikibaseArticle";
import {WikibaseStatement} from "./WikibaseStatement";

export interface WikibaseItem {
  readonly altLabels: readonly Literal[];
  readonly articles: readonly WikibaseArticle[];
  readonly graph: BlankNode | DefaultGraph | NamedNode;
  readonly identifier: NamedNode;
  readonly prefLabel: Literal | null;
  readonly statements: readonly WikibaseStatement[];
}
