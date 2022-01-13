import Namespace from "../Namespace";

export class FOAF {
  static readonly NS = Namespace("http://xmlns.com/foaf/0.1/");

  static readonly depicts = FOAF.NS("depicts");
  static readonly familyName = FOAF.NS("familyName");
  static readonly givenName = FOAF.NS("givenName");
  static readonly name_ = FOAF.NS("name");
  static readonly page = FOAF.NS("page");
  static readonly thumbnail = FOAF.NS("thumbnail");
}
