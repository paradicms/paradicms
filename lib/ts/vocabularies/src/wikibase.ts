import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Wikibase {
  "": NamedNode<"http://wikiba.se/ontology#">;

  // Properties
  geoLatitude: NamedNode<"http://wikiba.se/ontology#geoLatitude">;
  geoLongitude: NamedNode<"http://wikiba.se/ontology#geoLongitude">;
  timePrecision: NamedNode<"http://wikiba.se/ontology#timePrecision">;
  timeValue: NamedNode<"http://wikiba.se/ontology#timeValue">;

  // Resources
  GlobecoordinateValue: NamedNode<
    "http://wikiba.se/ontology#Globecoordinatevalue"
  >;
  Item: NamedNode<"http://wikiba.se/ontology#Item">;
  TimeValue: NamedNode<"http://wikiba.se/ontology#TimeValue">;
}

const builder = namespace("http://wikiba.se/ontology#") as any;
export const strict = builder as NamespaceBuilder<keyof Wikibase> & Wikibase;
export const loose = builder as NamespaceBuilder & Wikibase;
