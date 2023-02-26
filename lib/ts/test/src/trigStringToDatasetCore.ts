import {Parser, Store} from "n3";
import {DatasetCore} from "@rdfjs/types";

export const trigStringToDatasetCore = (input: string): DatasetCore => {
  const parser = new Parser({format: "TriG"});
  const store = new Store();
  store.addQuads(parser.parse(input));
  return store;
};
