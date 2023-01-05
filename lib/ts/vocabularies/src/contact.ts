import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Contact {
  "": NamedNode<"http://www.w3.org/2000/10/swap/pim/contact#">;

  // Properties
  sortName: NamedNode<"http://www.w3.org/2000/10/swap/pim/contact#sortName">;
}

const builder = namespace("http://www.w3.org/2000/10/swap/pim/contact#") as any;
export const strict = builder as NamespaceBuilder<keyof Contact> & Contact;
export const loose = builder as NamespaceBuilder & Contact;
