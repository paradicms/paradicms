import Namespace from "../Namespace";

export class FOAF {
  static NS = Namespace("http://xmlns.com/foaf/0.1/");

  static depicts = FOAF.NS("depicts");
  static familyName = FOAF.NS("familyName");
  static givenName = FOAF.NS("givenName");
  static name_ = FOAF.NS("name");
  static page = FOAF.NS("page");
  static thumbnail = FOAF.NS("thumbnail");
}
