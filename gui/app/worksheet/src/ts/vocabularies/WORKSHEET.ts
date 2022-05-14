import {Namespace} from "@paradicms/vocabularies";

export class WORKSHEET {
  static readonly NS = Namespace("http://www.paradicms.org/ns/worksheet#");

  // Properties
  static readonly featureSet = WORKSHEET.NS("featureSet");

  // Resources
  static readonly Feature = WORKSHEET.NS("Feature");
  static readonly FeatureSet = WORKSHEET.NS("FeatureSet");
}
