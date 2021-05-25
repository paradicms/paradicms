import * as fs from "fs";
import * as path from "path";
import {graph, IndexedFormula, parse} from "rdflib";

export const parseTestData = (): IndexedFormula => {
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
        "data.ttl"
      )
    )
    .toString();
  const store = graph();
  parse(ttl, store, "http://example.org", "text/turtle");
  return store;
};
