import * as fs from "fs";
import * as path from "path";
import {Parser, Store} from "n3";

export const parseTestData = (): Store => {
  const ttl = fs
    .readFileSync(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "..",
        "etl",
        "data",
        "test_data",
        "loaded",
        "data.ttl",
      ),
    )
    .toString();
  const parser = new Parser({format: "text/turtle"});
  const store = new Store();
  store.addQuads(parser.parse(ttl));
  return store;
};
