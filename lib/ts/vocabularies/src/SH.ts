import {Namespace} from "./Namespace";

export class SH {
  static readonly NS = Namespace("http://www.w3.org/ns/shacl#");

  // Properties
  static readonly and = SH.NS("and");
  static readonly in = SH.NS("in");
  static readonly class_ = SH.NS("class");
  static readonly closed = SH.NS("closed");
  static readonly datatype = SH.NS("datatype");
  static readonly disjoint = SH.NS("disjoint");
  static readonly equals = SH.NS("equals");
  static readonly hasValue = SH.NS("hasValue");
  static readonly ignoredProperties = SH.NS("ignoredProperties");
  static readonly in_ = SH.NS("in");
  static readonly languageIn = SH.NS("languageIn");
  static readonly lessThan = SH.NS("lessThan");
  static readonly lessThanOrEquals = SH.NS("lessThanOrEquals");
  static readonly maxCount = SH.NS("maxCount");
  static readonly maxExclusive = SH.NS("maxExclusive");
  static readonly maxInclusive = SH.NS("maxInclusive");
  static readonly maxLength = SH.NS("maxLength");
  static readonly minCount = SH.NS("minCount");
  static readonly minExclusive = SH.NS("minExclusive");
  static readonly minInclusive = SH.NS("minInclusive");
  static readonly minLength = SH.NS("minLength");
  static readonly node = SH.NS("node");
  static readonly nodeKind = SH.NS("nodeKind");
  static readonly not = SH.NS("not");
  static readonly or = SH.NS("or");
  static readonly order = SH.NS("order");
  static readonly path = SH.NS("path");
  static readonly pattern = SH.NS("pattern");
  static readonly property = SH.NS("property");
  static readonly qualifiedMaxCount = SH.NS("qualifiedMaxCount");
  static readonly qualifiedMinCount = SH.NS("qualifiedMinCount");
  static readonly qualifiedValueShape = SH.NS("qualifiedValueShape");
  static readonly targetClass = SH.NS("targetClass");
  static readonly targetNode = SH.NS("targetNode");
  static readonly targetObjectsOf = SH.NS("targetObjectsOf");
  static readonly targetSubjectsOf = SH.NS("targetSubjectsOf");
  static readonly uniqueLang = SH.NS("uniqueLang");
  static readonly xone = SH.NS("xone");

  // Resources
  static readonly NodeShape = SH.NS("NodeShape");
  static readonly PropertyShape = SH.NS("PropertyShape");
}
