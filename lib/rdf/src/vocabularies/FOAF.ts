import {Namespace} from "rdflib";

export class FOAF {
  static NS = Namespace("http://xmlns.com/foaf/0.1/");

  static depicts = FOAF.NS("depicts");
  static name_ = FOAF.NS("name");
  static thumbnail = FOAF.NS("thumbnail");
}
