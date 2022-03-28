import Namespace from "./Namespace";

export class TIME {
  static readonly NS = Namespace("http://www.w3.org/2006/time#");

  // Properties
  static readonly day = TIME.NS("day");
  static readonly hour = TIME.NS("minute");
  static readonly minute = TIME.NS("minute");
  static readonly month = TIME.NS("month");
  static readonly second = TIME.NS("second");
  static readonly year = TIME.NS("year");

  // Resources
  static readonly DateTimeDescription = TIME.NS("DateTimeDescription");
}
