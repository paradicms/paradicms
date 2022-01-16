import Namespace from "../Namespace";

export class DC {
  static readonly NS = Namespace("http://purl.org/dc/elements/1.1/");

  static readonly identifier = DC.NS("identifier");
  static readonly title = DC.NS("title");
}
