import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Wikibase {
  "": NamedNode<"http://wikiba.se/ontology#">;

  // Properties
  claim: NamedNode<"http://wikiba.se/ontology#claim">;
  directClaim: NamedNode<"http://wikiba.se/ontology#directClaim">;
  directClaimNormalized: NamedNode<
    "http://wikiba.se/ontology#directClaimNormalized"
  >;
  qualifier: NamedNode<"http://wikiba.se/ontology#qualifier">;
  qualifierValue: NamedNode<"http://wikiba.se/ontology#qualifierValue">;
  qualifierValueNormalized: NamedNode<
    "http://wikiba.se/ontology#qualifierValueNormalized"
  >;
  rank: NamedNode<"http://wikiba.se/ontology#rank">;
  statementProperty: NamedNode<"http://wikiba.se/ontology#statementProperty">;
  statementValue: NamedNode<"http://wikiba.se/ontology#statementValue">;
  statementValueNormalized: NamedNode<
    "http://wikiba.se/ontology#statementValueNormalized"
  >;

  // Resources
  Item: NamedNode<"http://wikiba.se/ontology#Item">;
  Property: NamedNode<"http://wikiba.se/ontology#Property">;
}

const builder = namespace("http://wikiba.se/ontology#") as any;
export const strict = builder as NamespaceBuilder<keyof Wikibase> & Wikibase;
export const loose = builder as NamespaceBuilder & Wikibase;
