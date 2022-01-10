import Namespace from "../Namespace";

export class XSD {
  static NS = Namespace("http://www.w3.org/2001/XMLSchema#");

  static boolean_ = XSD.NS("boolean");
  static decimal = XSD.NS("decimal");
  static gDay = XSD.NS("gDay");
  static gMonth = XSD.NS("gMonth");
  static gYear = XSD.NS("gYear");
  static integer = XSD.NS("integer");
  static string_ = XSD.NS("string");
}
