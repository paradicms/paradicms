import Namespace from "../Namespace";

export class DC {
  static NS = Namespace("http://purl.org/dc/elements/1.1/");

  static identifier = DC.NS("identifier");
  static title = DC.NS("title");
}
