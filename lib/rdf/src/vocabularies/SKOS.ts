import {Namespace} from "rdflib";

export class SKOS {
  static NS = Namespace("http://www.w3.org/2004/02/skos/core#");

  // Properties
  static definition = SKOS.NS("definition");
  static prefLabel = SKOS.NS("prefLabel");
}
