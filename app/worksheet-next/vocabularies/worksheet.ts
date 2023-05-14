import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Worksheet {
  "": NamedNode<"http://www.paradicms.org/ns/worksheet#">;

  // Properties
  featureSet: NamedNode<"http://www.paradicms.org/ns/worksheet#featureSet">;

  // Resources
  Feature: NamedNode<"http://www.paradicms.org/ns/worksheet#Feature">;
  FeatureSet: NamedNode<"http://www.paradicms.org/ns/worksheet#FeatureSet">;
}

const builder = namespace("http://www.paradicms.org/ns/worksheet#") as any;
export const strict = builder as NamespaceBuilder<keyof Worksheet> & Worksheet;
export const loose = builder as NamespaceBuilder & Worksheet;
