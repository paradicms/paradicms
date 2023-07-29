import {DatasetCore} from "@rdfjs/types";
import * as jsonld from "jsonld";
import {
  cc,
  cms,
  configuration,
  crm,
  dc11,
  dcmitype,
  dcterms,
  exif,
  foaf,
  geo,
  la,
  owl,
  prov,
  rdf,
  rdfs,
  skos,
  time,
  wd,
  wdt,
  wgs,
  wikibase,
  xsd,
} from "@paradicms/vocabularies";

export const datasetToJsonLd = async (dataset: DatasetCore): Promise<any> => {
  const jsonLd = await jsonld.fromRDF(dataset, {
    useNativeTypes: true,
  });
  // console.info(
  //   "serialized",
  //   dataset.size,
  //   "quads into JSON-LD string with length",
  //   JSON.stringify(jsonLd).length
  // );
  const compactJsonLd = await jsonld.compact(jsonLd, {
    bnode: "http://paradicms.org/bnode/",
    cc: cc[""].value,
    cclicenses: "http://creativecommons.org/licenses/",
    cclicensess: "https://creativecommons.org/licenses/",
    cms: cms[""].value,
    configuration: configuration[""].value,
    crm: crm[""].value,
    dc: dc11[""].value,
    dcmitype: dcmitype[""].value,
    dct: dcterms[""].value,
    etl: "urn:paradicms:etl:",
    exif: exif[""].value,
    foaf: foaf[""].value,
    geo: geo[""].value,
    la: la[""].value,
    owl: owl[""].value,
    prov: prov[""].value,
    rdf: rdf[""].value,
    rdfs: rdfs[""].value,
    rsdo: "http://rightsstatements.org/vocab/",
    rsdos: "https://rightsstatements.org/vocab/",
    sdo: "http://schema.org/",
    sdos: "https://schema.org/",
    skos: skos[""].value,
    time: time[""].value,
    wd: wd[""].value,
    wdt: wdt[""].value,
    wikibase: wikibase[""].value,
    wdno: "http://www.wikidata.org/prop/novalue/",
    wdp: "http://www.wikidata.org/prop/",
    wdpqn: "http://www.wikidata.org/prop/qualifier/value-normalized/",
    wdpq: "http://www.wikidata.org/prop/qualifier/",
    wdpqv: "http://www.wikidata.org/prop/qualifier/value/",
    wdpr: "http://www.wikidata.org/prop/reference/",
    wdprn: "http://www.wikidata.org/prop/reference/value-normalized/",
    wdprv: "http://www.wikidata.org/prop/reference/value/",
    wdps: "http://www.wikidata.org/prop/statement/",
    wdpsn: "http://www.wikidata.org/prop/statement/value/",
    wdref: "http://www.wikidata.org/reference/",
    wds: "http://www.wikidata.org/entity/statement/",
    wdtn: "http://www.wikidata.org/prop/direct-normalized/",
    wdv: "http://www.wikidata.org/value/",
    wgs: wgs[""].value,
    xsd: xsd[""].value,
  });
  // console.info(
  //   "serialized",
  //   dataset.size,
  //   "quads into compact JSON-LD string with length",
  //   JSON.stringify(compactJsonLd).length
  // );
  // console.log(JSON.stringify(compactJsonLd));
  return compactJsonLd;
};
