import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Cms {
  "": NamedNode<"http://www.paradicms.org/ns/cms#">;

  // Properties
  collection: NamedNode<"http://www.paradicms.org/ns/cms#collection">;
  institution: NamedNode<"http://www.paradicms.org/ns/cms#institution">;
  imageMaxHeight: NamedNode<"http://www.paradicms.org/ns/cms#imageMaxHeight">;
  imageMaxWidth: NamedNode<"http://www.paradicms.org/ns/cms#imageMaxWidth">;
  imageSrc: NamedNode<"http://www.paradicms.org/ns/cms#imageSrc">;
  work: NamedNode<"http://www.paradicms.org/ns/cms#work">;

  // Resources
  Collection: NamedNode<"http://www.paradicms.org/ns/cms#Collection">;
  DateTimeDescription: NamedNode<
    "http://www.paradicms.org/ns/cms#DateTimeDescription"
  >;
  Event: NamedNode<"http://www.paradicms.org/ns/cms#Event">;
  Image: NamedNode<"http://www.paradicms.org/ns/cms#Image">;
  Institution: NamedNode<"http://www.paradicms.org/ns/cms#Institution">;
  License: NamedNode<"http://www.paradicms.org/ns/cms#License">;
  NamedValue: NamedNode<"http://www.paradicms.org/ns/cms#NamedValue">;
  Organization: NamedNode<"http://www.paradicms.org/ns/cms#Organization">;
  Person: NamedNode<"http://www.paradicms.org/ns/cms#Person">;
  RightsStatement: NamedNode<"http://www.paradicms.org/ns/cms#RightsStatement">;
  Text: NamedNode<"http://www.paradicms.org/ns/cms#Text">;
  Work: NamedNode<"http://www.paradicms.org/ns/cms#Work">;
  WorkCreation: NamedNode<"http://www.paradicms.org/ns/cms#WorkCreation">;
  WorkEvent: NamedNode<"http://www.paradicms.org/ns/cms#WorkEvent">;
}

const builder = namespace("http://www.paradicms.org/ns/cms#") as any;
export const strict = builder as NamespaceBuilder<keyof Cms> & Cms;
export const loose = builder as NamespaceBuilder & Cms;
