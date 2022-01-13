import Namespace from "../Namespace";

export class PARADICMS {
  static readonly NS = Namespace("http://www.paradicms.org/ns#");

  // Properties
  static readonly collection = PARADICMS.NS("collection");
  static readonly configuration = PARADICMS.NS("configuration");
  static readonly institution = PARADICMS.NS("institution");
  static readonly imageMaxHeight = PARADICMS.NS("imageMaxHeight");
  static readonly imageMaxWidth = PARADICMS.NS("imageMaxWidth");
  static readonly imageSrc = PARADICMS.NS("imageSrc");

  // Resources
  static readonly Collection = PARADICMS.NS("Collection");
  static readonly DateTimeDescription = PARADICMS.NS("DateTimeDescription");
  static readonly Image = PARADICMS.NS("Image");
  static readonly Institution = PARADICMS.NS("Institution");
  static readonly License = PARADICMS.NS("License");
  static readonly NamedValue = PARADICMS.NS("NamedValue");
  static readonly Organization = PARADICMS.NS("Organization");
  static readonly Person = PARADICMS.NS("Person");
  static readonly RightsStatement = PARADICMS.NS("RightsStatement");
  static readonly Text = PARADICMS.NS("Text");
  static readonly Work = PARADICMS.NS("Work");
}
