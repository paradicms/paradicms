import {DatasetCore} from "@rdfjs/types";
import {JsonLd} from "jsonld/jsonld-spec";
import * as jsonld from "jsonld";
import {Store} from "./index";

export const jsonLdToDataset = async (jsonLd: JsonLd): Promise<DatasetCore> => {
  const quads: any = await jsonld.toRDF(jsonLd);
  const dataset = new Store();
  dataset.addQuads(quads);
  return dataset;
};
