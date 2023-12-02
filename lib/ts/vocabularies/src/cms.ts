import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Cms {
  "": NamedNode<"http://paradicms.github.io/ns/cms#">;

  // Properties
  imageMaxHeight: NamedNode<"http://paradicms.github.io/ns/cms#imageMaxHeight">;
  imageMaxWidth: NamedNode<"http://paradicms.github.io/ns/cms#imageMaxWidth">;
  imageSrc: NamedNode<"http://paradicms.github.io/ns/cms#imageSrc">;
  propertyFilterable: NamedNode<
    "http://paradicms.github.io/ns/cms#propertyFilterable"
  >;
  propertyHidden: NamedNode<"http://paradicms.github.io/ns/cms#propertyHidden">;
  propertyOrder: NamedNode<"http://paradicms.github.io/ns/cms#propertyOrder">;
  propertySearchable: NamedNode<
    "http://paradicms.github.io/ns/cms#propertySearchable"
  >;

  // Resources
  PropertyGroup: NamedNode<"http://paradicms.github.io/ns/cms#PropertyGroup">;
}

const builder = namespace("http://paradicms.github.io/ns/cms#") as any;
export const strict = builder as NamespaceBuilder<keyof Cms> & Cms;
export const loose = builder as NamespaceBuilder & Cms;
