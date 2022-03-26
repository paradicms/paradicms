import Namespace from "./Namespace";

export class WGS {
  static readonly NS = Namespace("http://www.w3.org/2003/01/geo/wgs84_pos#");

  static readonly lat = WGS.NS("lat");
  static readonly long = WGS.NS("long");
}
