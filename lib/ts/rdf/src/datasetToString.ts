import {Dataset, NamedNode} from "@rdfjs/types";
import {Writer, WriterOptions} from "n3";
import {
  cms,
  configuration,
  contact,
  dash,
  dc11,
  dcterms,
  exif,
  foaf,
  rdf,
  rdfs,
  sh,
  skos,
  time,
  vra,
  wgs,
  xsd,
} from "@paradicms/vocabularies";

const defaultPrefixes: {[index: string]: NamedNode} = {
  cms: cms[""],
  configuration: configuration[""],
  contact: contact[""],
  dash: dash[""],
  dc11: dc11[""],
  dcterms: dcterms[""],
  exif: exif[""],
  foaf: foaf[""],
  rdf: rdf[""],
  rdfs: rdfs[""],
  sh: sh[""],
  skos: skos[""],
  time: time[""],
  vra: vra[""],
  wgs: wgs[""],
  xsd: xsd[""],
};

export const datasetToString = (
  dataset: Dataset,
  options?: WriterOptions
): string => {
  const augmentedOptions: WriterOptions = {...options};

  if (!augmentedOptions.format) {
    augmentedOptions.format = "Turtle";
  }
  if (!augmentedOptions.prefixes) {
    augmentedOptions.prefixes = defaultPrefixes;
  }
  const writer = new Writer(augmentedOptions);
  writer.addQuads(dataset.toArray());
  let resultString: string;
  writer.end((error, result: string) => (resultString = result));
  return resultString!;
};
