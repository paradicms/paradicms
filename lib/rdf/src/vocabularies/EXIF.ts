import {Namespace} from "rdflib";

export class EXIF {
  static NS = Namespace("http://www.w3.org/2003/12/exif/ns#");

  // Properties
  static height = EXIF.NS("height");
  static width = EXIF.NS("width");
}
