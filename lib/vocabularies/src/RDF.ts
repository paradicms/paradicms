import Namespace from "./Namespace";

export class RDF {
  static readonly NS = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");

  // Properties
  static readonly predicate = RDF.NS("predicate");
  static readonly type = RDF.NS("type");
  static readonly value = RDF.NS("value");
}
