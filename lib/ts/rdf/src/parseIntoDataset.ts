import {Dataset} from "@rdfjs/types";
import {Parser, ParserOptions, Store} from "n3";
import {datasetCoreToDataset} from "./datasetCoreToDataset";

export const parseIntoDataset = (
  input: string,
  options?: ParserOptions
): Dataset => {
  const parser = new Parser(options);
  const store = new Store();
  store.addQuads(parser.parse(input));
  return datasetCoreToDataset(store);
};
