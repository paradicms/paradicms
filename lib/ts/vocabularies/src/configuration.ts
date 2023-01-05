import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Configuration {
  "": NamedNode<"http://www.paradicms.org/ns/configuration#">;

  // Properties
  filterable: NamedNode<"http://www.paradicms.org/ns/configuration#filterable">;
  hidden: NamedNode<"http://www.paradicms.org/ns/configuration#hidden">;
  searchable: NamedNode<"http://www.paradicms.org/ns/configuration#searchable">;
  stylesheetHref: NamedNode<
    "http://www.paradicms.org/ns/configuration#stylesheetHref"
  >;
  workProperty: NamedNode<
    "http://www.paradicms.org/ns/configuration#workProperty"
  >;

  // Resources
  AppConfiguration: NamedNode<
    "http://www.paradicms.org/ns/configuration#AppConfiguration"
  >;
}

const builder = namespace("http://www.paradicms.org/ns/configuration#") as any;
export const strict = builder as NamespaceBuilder<keyof Configuration> &
  Configuration;
export const loose = builder as NamespaceBuilder & Configuration;
