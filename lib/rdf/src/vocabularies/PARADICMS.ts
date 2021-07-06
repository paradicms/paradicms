import {Namespace} from "rdflib";

export class PARADICMS {
  static NS = Namespace("http://www.paradicms.org/ns#");

  // Properties
  static collection = PARADICMS.NS("collection");
  static faceted = PARADICMS.NS("faceted");
  static fullTextSearchable = PARADICMS.NS("fullTextSearchable");
  static institution = PARADICMS.NS("institution");
  static guiBootstrapStylesheetHref = PARADICMS.NS("guiBootstrapStylesheetHref");
  static guiDocumentTitle = PARADICMS.NS("guiDocumentTitle");
  static guiNavbarTitle = PARADICMS.NS("guiNavbarTitle");
  static imageMaxHeight = PARADICMS.NS("imageMaxHeight");
  static imageMaxWidth = PARADICMS.NS("imageMaxWidth");
  static imageSrc = PARADICMS.NS("imageSrc");

  // Resources
  static Collection = PARADICMS.NS("Collection");
  static GuiMetadata = PARADICMS.NS("GuiMetadata");
  static Image = PARADICMS.NS("Image");
  static Institution = PARADICMS.NS("Institution");
  static License = PARADICMS.NS("License");
  static Object = PARADICMS.NS("Object");
  static PropertyDefinition = PARADICMS.NS("PropertyDefinition");
  static RightsStatement = PARADICMS.NS("RightsStatement");
}
