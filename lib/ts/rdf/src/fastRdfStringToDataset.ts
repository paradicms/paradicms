import {Parser, Store} from "n3";
import {DatasetCore} from "@rdfjs/types";

export const fastRdfStringToDataset = (input: string): DatasetCore => {
  const parser = new Parser({format: "N-Quads"});
  const store = new Store();
  store.addQuads(parser.parse(input));
  return store;
};
