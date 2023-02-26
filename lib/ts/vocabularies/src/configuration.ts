import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Configuration {
  "": NamedNode<"http://www.paradicms.org/ns/configuration#">;

  // Properties
  basePath: NamedNode<"http://www.paradicms.org/ns/configuration#basePath">;
  filterable: NamedNode<"http://www.paradicms.org/ns/configuration#filterable">;
  hidden: NamedNode<"http://www.paradicms.org/ns/configuration#hidden">;
  label: NamedNode<"http://www.paradicms.org/ns/configuration#label">;
  objectsPerPage: NamedNode<
    "http://www.paradicms.org/ns/configuration#objectsPerPage"
  >;
  predicate: NamedNode<"http://www.paradicms.org/ns/configuration#predicate">;
  searchable: NamedNode<"http://www.paradicms.org/ns/configuration#searchable">;
  stylesheet: NamedNode<
    "http://www.paradicms.org/ns/configuration#stylesheetHref"
  >;
  title: NamedNode<"http://www.paradicms.org/ns/configuration#searchable">;
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
