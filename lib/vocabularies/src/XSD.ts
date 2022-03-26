import Namespace from "./Namespace";

export class XSD {
  static readonly NS = Namespace("http://www.w3.org/2001/XMLSchema#");

  static readonly boolean_ = XSD.NS("boolean");
  static readonly decimal = XSD.NS("decimal");
  static readonly gDay = XSD.NS("gDay");
  static readonly gMonth = XSD.NS("gMonth");
  static readonly gYear = XSD.NS("gYear");
  static readonly integer = XSD.NS("integer");
  static readonly string_ = XSD.NS("string");
}
