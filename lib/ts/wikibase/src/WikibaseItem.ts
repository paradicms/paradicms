import {WikibaseArticle} from "./WikibaseArticle";
import {WikibaseStatement} from "./WikibaseStatement";
import {NamedNode} from "@rdfjs/types";

export interface WikibaseItem {
  readonly articles: readonly WikibaseArticle[];
  readonly description: string | null;
  readonly labels: {
    readonly altLabels: readonly string[];
    readonly prefLabel: string;
  };
  readonly node: NamedNode;
  readonly statements: readonly WikibaseStatement[];
}
