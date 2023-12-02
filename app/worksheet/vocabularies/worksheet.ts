import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Worksheet {
  "": NamedNode<"http://paradicms.github.io/ns/worksheet#">;

  // Properties
  featureSet: NamedNode<"http://paradicms.github.io/ns/worksheet#featureSet">;

  // Resources
  Feature: NamedNode<"http://paradicms.github.io/ns/worksheet#Feature">;
  FeatureSet: NamedNode<"http://paradicms.github.io/ns/worksheet#FeatureSet">;
}

const builder = namespace("http://paradicms.github.io/ns/worksheet#") as any;
export const strict = builder as NamespaceBuilder<keyof Worksheet> & Worksheet;
export const loose = builder as NamespaceBuilder & Worksheet;
