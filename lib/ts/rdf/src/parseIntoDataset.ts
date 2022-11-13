import {Dataset} from "@rdfjs/types";
import {Parser, ParserOptions, Store} from "n3";
import {n3StoreToDataset} from "./n3StoreToDataset";

export const parseIntoDataset = (
  input: string,
  options?: ParserOptions
): Dataset => {
  const parser = new Parser(options);
  const store = new Store();
  store.addQuads(parser.parse(input));
  return n3StoreToDataset(store);
};
