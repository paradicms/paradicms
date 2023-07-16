import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface La {
  "": NamedNode<"https://linked.art/ns/terms/">;

  // Properties
  access_point: NamedNode<"https://linked.art/ns/terms/access_point">;
  digitally_shown_by: NamedNode<
    "https://linked.art/ns/terms/digitally_shown_by"
  >;
}

const builder = namespace("https://linked.art/ns/terms/") as any;
export const strict = builder as NamespaceBuilder<keyof La> & La;
export const loose = builder as NamespaceBuilder & La;
