import {Parser, Store} from "n3";
import {Dataset} from "@rdfjs/types";
import {datasetCoreToDataset} from "./datasetCoreToDataset";

export const fastRdfStringToDataset = (input: string): Dataset => {
  const parser = new Parser({format: "N-Quads"});
  const store = new Store();
  store.addQuads(parser.parse(input));
  return datasetCoreToDataset(store);
};
