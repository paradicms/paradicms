/**
 * TypeScript enum corresponding to sh:NodeKind, for simpler manipulation.
 */
export enum NodeKind {
  BLANK_NODE = 1,
  BLANK_NODE_OR_IRI,
  BLANK_NODE_OR_LITERAL,
  IRI,
  IRI_OR_LITERAL,
  LITERAL,
}
