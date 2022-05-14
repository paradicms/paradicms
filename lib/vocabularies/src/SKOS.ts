import {Namespace} from "./Namespace";

export class SKOS {
  static readonly NS = Namespace("http://www.w3.org/2004/02/skos/core#");

  // Properties
  static readonly altLabel = SKOS.NS("altLabel");
  static readonly definition = SKOS.NS("definition");
  static readonly prefLabel = SKOS.NS("prefLabel");
}
