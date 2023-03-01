import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Vra {
  "": NamedNode<"http://purl.org/vra/">;

  // Properties
  endDate: NamedNode<"http://purl.org/vra/endDate">;
  startDate: NamedNode<"http://purl.org/vra/startDate">;
  technique: NamedNode<"http://purl.org/vra/technique">;
}

const builder = namespace("http://purl.org/vra/") as any;
export const strict = builder as NamespaceBuilder<keyof Vra> & Vra;
export const loose = builder as NamespaceBuilder & Vra;
