import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Cms {
  "": NamedNode<"http://www.paradicms.org/ns/cms#">;

  // Properties
  imageMaxHeight: NamedNode<"http://www.paradicms.org/ns/cms#imageMaxHeight">;
  imageMaxWidth: NamedNode<"http://www.paradicms.org/ns/cms#imageMaxWidth">;
  imageSrc: NamedNode<"http://www.paradicms.org/ns/cms#imageSrc">;
  propertyFilterable: NamedNode<
    "http://www.paradicms.org/ns/cms#propertyFilterable"
  >;
  propertyHidden: NamedNode<"http://www.paradicms.org/ns/cms#propertyHidden">;
  propertyOrder: NamedNode<"http://www.paradicms.org/ns/cms#propertyOrder">;
  propertySearchable: NamedNode<
    "http://www.paradicms.org/ns/cms#propertySearchable"
  >;

  // Resources
  PropertyGroup: NamedNode<"http://www.paradicms.org/ns/cms#PropertyGroup">;
}

const builder = namespace("http://www.paradicms.org/ns/cms#") as any;
export const strict = builder as NamespaceBuilder<keyof Cms> & Cms;
export const loose = builder as NamespaceBuilder & Cms;
