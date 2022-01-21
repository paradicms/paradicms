import {FOAF} from "./FOAF";
import {RDF} from "./RDF";
import {DC} from "./DC";
import {DCTERMS} from "./DCTERMS";
import {Prefixes} from "n3";
import {EXIF} from "./EXIF";
import {XSD} from "./XSD";
import {VRA} from "./VRA";
import {SKOS} from "./SKOS";
import {TIME} from "./TIME";
import {WGS} from "./WGS";
import {CMS} from "./CMS";

export const prefixes: Prefixes = {
  cms: CMS.NS(""),
  dc: DC.NS(""),
  dcterms: DCTERMS.NS(""),
  exif: EXIF.NS(""),
  foaf: FOAF.NS(""),
  rdf: RDF.NS(""),
  skos: SKOS.NS(""),
  time: TIME.NS(""),
  vra: VRA.NS(""),
  xsd: XSD.NS(""),
  wgs: WGS.NS(""),
};
