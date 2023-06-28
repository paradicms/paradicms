import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Cms {
  "": NamedNode<"http://www.paradicms.org/ns/cms#">;

  // Properties
  event: NamedNode<"http://www.paradicms.org/ns/cms#event">;
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
  Agent: NamedNode<"http://www.paradicms.org/ns/cms#Agent">;
  Collection: NamedNode<"http://www.paradicms.org/ns/cms#Collection">;
  DateTimeDescription: NamedNode<
    "http://www.paradicms.org/ns/cms#DateTimeDescription"
  >;
  Event: NamedNode<"http://www.paradicms.org/ns/cms#Event">;
  Image: NamedNode<"http://www.paradicms.org/ns/cms#Image">;
  License: NamedNode<"http://www.paradicms.org/ns/cms#License">;
  Location: NamedNode<"http://www.paradicms.org/ns/cms#Location">;
  Organization: NamedNode<"http://www.paradicms.org/ns/cms#Organization">;
  Person: NamedNode<"http://www.paradicms.org/ns/cms#Person">;
  Property: NamedNode<"http://www.paradicms.org/ns/cms#Property">;
  PropertyGroup: NamedNode<"http://www.paradicms.org/ns/cms#PropertyGroup">;
  RightsStatement: NamedNode<"http://www.paradicms.org/ns/cms#RightsStatement">;
  Text: NamedNode<"http://www.paradicms.org/ns/cms#Text">;
  Work: NamedNode<"http://www.paradicms.org/ns/cms#Work">;
  WorkClosing: NamedNode<"http://www.paradicms.org/ns/cms#WorkClosing">;
  WorkCreation: NamedNode<"http://www.paradicms.org/ns/cms#WorkCreation">;
  WorkEvent: NamedNode<"http://www.paradicms.org/ns/cms#WorkEvent">;
  WorkOpening: NamedNode<"http://www.paradicms.org/ns/cms#WorkOpening">;
}

const builder = namespace("http://www.paradicms.org/ns/cms#") as any;
export const strict = builder as NamespaceBuilder<keyof Cms> & Cms;
export const loose = builder as NamespaceBuilder & Cms;
