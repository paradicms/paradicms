import * as fs from "fs";
import {Parser, Store} from "n3";

export const parseTestData = (): Store => {
  const ttl = fs
    .readFileSync(process.env.DATA_TTL_FILE_PATH).toString();
  const parser = new Parser({format: "text/turtle"});
  const store = new Store();
  store.addQuads(parser.parse(ttl));
  return store;
};
