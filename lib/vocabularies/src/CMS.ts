import {Namespace} from "./Namespace";

export class CMS {
  static readonly NS = Namespace("http://www.paradicms.org/ns/cms#");

  // Properties
  static readonly collection = CMS.NS("collection");
  static readonly institution = CMS.NS("institution");
  static readonly imageMaxHeight = CMS.NS("imageMaxHeight");
  static readonly imageMaxWidth = CMS.NS("imageMaxWidth");
  static readonly imageSrc = CMS.NS("imageSrc");
  static readonly work = CMS.NS("work");

  // Resources
  static readonly Collection = CMS.NS("Collection");
  static readonly DateTimeDescription = CMS.NS("DateTimeDescription");
  static readonly Event = CMS.NS("Event");
  static readonly Image = CMS.NS("Image");
  static readonly Institution = CMS.NS("Institution");
  static readonly License = CMS.NS("License");
  static readonly NamedValue = CMS.NS("NamedValue");
  static readonly Organization = CMS.NS("Organization");
  static readonly Person = CMS.NS("Person");
  static readonly RightsStatement = CMS.NS("RightsStatement");
  static readonly Text = CMS.NS("Text");
  static readonly Work = CMS.NS("Work");
  static readonly WorkCreation = CMS.NS("WorkCreation");
  static readonly WorkEvent = CMS.NS("WorkEvent");
}
