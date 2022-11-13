import namespace, {NamespaceBuilder} from "@rdf-esm/namespace";
import {NamedNode} from "@rdfjs/types";

interface Vra {
  "": NamedNode<"http://purl.org/vra/">;

  // Properties
  earliestDate: NamedNode<"http://purl.org/vra/earliestDate">;
  latestDate: NamedNode<"http://purl.org/vra/latestDate">;
}

const builder = namespace("http://purl.org/vra/") as any;
export const strict = builder as NamespaceBuilder<keyof Vra> & Vra;
export const loose = builder as NamespaceBuilder & Vra;
