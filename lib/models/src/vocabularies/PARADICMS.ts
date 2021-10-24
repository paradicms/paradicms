import Namespace from "../Namespace";

export class PARADICMS {
  static NS = Namespace("http://www.paradicms.org/ns#");

  // Properties
  static collection = PARADICMS.NS("collection");
  static configurationJson = PARADICMS.NS("configurationJson");
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
  static Person = PARADICMS.NS("Person");
  static PropertyDefinition = PARADICMS.NS("PropertyDefinition");
  static PropertyValueDefinition = PARADICMS.NS("PropertyValueDefinition");
  static RightsStatement = PARADICMS.NS("RightsStatement");
  static Work = PARADICMS.NS("Work");
}
