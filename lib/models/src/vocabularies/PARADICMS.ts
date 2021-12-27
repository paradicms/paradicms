import Namespace from "../Namespace";

export class PARADICMS {
  static NS = Namespace("http://www.paradicms.org/ns#");

  // Properties
  static collection = PARADICMS.NS("collection");
  static configuration = PARADICMS.NS("configuration");
  static institution = PARADICMS.NS("institution");
  static imageMaxHeight = PARADICMS.NS("imageMaxHeight");
  static imageMaxWidth = PARADICMS.NS("imageMaxWidth");
  static imageSrc = PARADICMS.NS("imageSrc");

  // Resources
  static Collection = PARADICMS.NS("Collection");
  static Configuration = PARADICMS.NS("Configuration");
  static Image = PARADICMS.NS("Image");
  static Institution = PARADICMS.NS("Institution");
  static License = PARADICMS.NS("License");
  static NamedValue = PARADICMS.NS("NamedValue");
  static Organization = PARADICMS.NS("Organization");
  static Person = PARADICMS.NS("Person");
  static RightsStatement = PARADICMS.NS("RightsStatement");
  static Text = PARADICMS.NS("Text");
  static Work = PARADICMS.NS("Work");
}
