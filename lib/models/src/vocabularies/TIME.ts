import Namespace from "../Namespace";

export class TIME {
  static NS = Namespace("http://www.w3.org/2006/time#");

  // Properties
  static day = TIME.NS("day");
  static hour = TIME.NS("minute");
  static minute = TIME.NS("minute");
  static month = TIME.NS("month");
  static second = TIME.NS("second");
  static year = TIME.NS("year");

  // Resources
  static DateTimeDescription = TIME.NS("DateTimeDescription");
}
