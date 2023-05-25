import {WikibaseArticle} from "./WikibaseArticle";
import {WikibaseStatement} from "./WikibaseStatement";
import {NamedNode} from "@rdfjs/types";
import {BlankNode, DefaultGraph} from "n3";

export interface WikibaseItem {
  readonly altLabels: readonly string[];
  readonly articles: readonly WikibaseArticle[];
  readonly description: string | null;
  readonly graph: BlankNode | DefaultGraph | NamedNode;
  readonly identifier: NamedNode;
  readonly prefLabel: string | null;
  readonly statements: readonly WikibaseStatement[];
}
