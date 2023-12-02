import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Configuration {
  "": NamedNode<"http://paradicms.github.io/ns/configuration#">;

  // Properties
  filterable: NamedNode<
    "http://paradicms.github.io/ns/configuration#filterable"
  >;
  hidden: NamedNode<"http://paradicms.github.io/ns/configuration#hidden">;
  label: NamedNode<"http://paradicms.github.io/ns/configuration#label">;
  objectsPerPage: NamedNode<
    "http://paradicms.github.io/ns/configuration#objectsPerPage"
  >;
  predicate: NamedNode<"http://paradicms.github.io/ns/configuration#predicate">;
  searchable: NamedNode<
    "http://paradicms.github.io/ns/configuration#searchable"
  >;
  stylesheet: NamedNode<
    "http://paradicms.github.io/ns/configuration#stylesheetHref"
  >;
  title: NamedNode<"http://paradicms.github.io/ns/configuration#searchable">;
  workProperty: NamedNode<
    "http://paradicms.github.io/ns/configuration#workProperty"
  >;

  // Resources
  AppConfiguration: NamedNode<
    "http://paradicms.github.io/ns/configuration#AppConfiguration"
  >;
}

const builder = namespace(
  "http://paradicms.github.io/ns/configuration#"
) as any;
export const strict = builder as NamespaceBuilder<keyof Configuration> &
  Configuration;
export const loose = builder as NamespaceBuilder & Configuration;
