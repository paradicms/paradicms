import {Namespace} from "./Namespace";

export class RDFS {
  static readonly NS = Namespace("http://www.w3.org/2000/01/rdf-schema#");

  // Properties
  static readonly label = RDFS.NS("label");
  static readonly subClassOf = RDFS.NS("subClassOf");

  // Resources
  static readonly Class = RDFS.NS("Class");
}
