import {Namespace} from "./Namespace";

export class DASH {
  static readonly NS = Namespace("http://datashapes.org/dash#");

  // Properties
  static readonly editor = DASH.NS("editor");
  static readonly singleLine = DASH.NS("singleLine");
  static readonly viewer = DASH.NS("viewer");
}
