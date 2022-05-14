import {Namespace} from "./Namespace";

export class CONFIGURATION {
  static readonly NS = Namespace("http://www.paradicms.org/ns/configuration#");

  // Properties
  static readonly filterable = CONFIGURATION.NS("filterable");
  static readonly hidden = CONFIGURATION.NS("hidden");
  static readonly searchable = CONFIGURATION.NS("searchable");
  static readonly stylesheetHref = CONFIGURATION.NS("stylesheetHref");
  static readonly workProperty = CONFIGURATION.NS("workProperty");

  // Resources
  static readonly AppConfiguration = CONFIGURATION.NS("AppConfiguration");
}
