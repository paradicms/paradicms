import Namespace from "../Namespace";

export class EXIF {
  static readonly NS = Namespace("http://www.w3.org/2003/12/exif/ns#");

  // Properties
  static readonly height = EXIF.NS("height");
  static readonly width = EXIF.NS("width");
}
