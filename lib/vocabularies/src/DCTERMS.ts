import Namespace from "./Namespace";

export class DCTERMS {
  static readonly NS = Namespace("http://purl.org/dc/terms/");

  static readonly abstract = DCTERMS.NS("abstract");
  static readonly date = DCTERMS.NS("date");
  static readonly contributor = DCTERMS.NS("contributor");
  static readonly creator = DCTERMS.NS("creator");
  static readonly description = DCTERMS.NS("description");
  static readonly identifier = DCTERMS.NS("identifier");
  static readonly license = DCTERMS.NS("license");
  static readonly relation = DCTERMS.NS("relation");
  static readonly rights = DCTERMS.NS("rights");
  static readonly rightsHolder = DCTERMS.NS("rightsHolder");
  static readonly spatial = DCTERMS.NS("spatial");
  static readonly subject = DCTERMS.NS("subject");
  static readonly title = DCTERMS.NS("title");
}
