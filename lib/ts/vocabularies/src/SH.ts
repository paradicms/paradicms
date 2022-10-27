import {Namespace} from "./Namespace";

export class SH {
  static readonly NS = Namespace("http://www.w3.org/ns/shacl#");

  // Properties
  static readonly and = SH.NS("and");
  static readonly in = SH.NS("in");
  static readonly languageIn = SH.NS("languageIn");
  static readonly node = SH.NS("node");
  static readonly not = SH.NS("not");
  static readonly or = SH.NS("or");
  static readonly order = SH.NS("order");
  static readonly path = SH.NS("path");
  static readonly property = SH.NS("property");
  static readonly qualifiedValueShape = SH.NS("qualifiedValueShape");
  static readonly targetClass = SH.NS("targetClass");
  static readonly targetNode = SH.NS("targetNode");
  static readonly targetObjectsOf = SH.NS("targetObjectsOf");
  static readonly targetSubjectsOf = SH.NS("targetSubjectsOf");
  static readonly xone = SH.NS("xone");

  // Resources
  static readonly NodeShape = SH.NS("NodeShape");
  static readonly PropertyShape = SH.NS("PropertyShape");
}
