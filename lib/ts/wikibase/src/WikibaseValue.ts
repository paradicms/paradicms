import {Literal, NamedNode} from "@rdfjs/types";
import {WikibaseItem} from "./WikibaseItem";

interface LiteralWikibaseValue {
  readonly type: "Literal";
  readonly value: Literal;
}

interface NamedNodeWikibaseValue {
  readonly type: "NamedNode";
  readonly value: NamedNode;
}

interface WikibaseItemWikibaseValue {
  readonly type: "WikibaseItem";
  readonly value: WikibaseItem;
}

export type WikibaseValue =
  | LiteralWikibaseValue
  | NamedNodeWikibaseValue
  | WikibaseItemWikibaseValue;
