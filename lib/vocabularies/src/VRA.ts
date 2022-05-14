import {Namespace} from "./Namespace";

export class VRA {
  static NS = Namespace("http://purl.org/vra/");

  static readonly earliestDate = VRA.NS("earliestDate");
  static readonly latestDate = VRA.NS("latestDate");
}
