import {Namespace} from "rdflib";

export class DCTERMS {
  static NS = Namespace("http://purl.org/dc/terms/");

  static abstract = DCTERMS.NS("abstract");
  static creator = DCTERMS.NS("creator");
  static description = DCTERMS.NS("description");
  static identifier = DCTERMS.NS("identifier");
  static license = DCTERMS.NS("license");
  static rights = DCTERMS.NS("rights");
  static rightsHolder = DCTERMS.NS("rightsHolder");
  static title = DCTERMS.NS("title");
}
