import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Wikibase {
  "": NamedNode<"http://wikiba.se/ontology#">;

  // Resources
  Item: NamedNode<"http://wikiba.se/ontology#Item">;
}

const builder = namespace("http://wikiba.se/ontology#") as any;
export const strict = builder as NamespaceBuilder<keyof Wikibase> & Wikibase;
export const loose = builder as NamespaceBuilder & Wikibase;
