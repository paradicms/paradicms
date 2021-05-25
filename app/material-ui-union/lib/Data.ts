import fs from "fs";
import {graph, IndexedFormula, parse} from "rdflib";
import {RdfData} from "@paradicms/rdf";

export class Data extends RdfData {
  // private static instanceCount = 0;
  static readonly instance = new Data();

  private constructor() {
    super(Data.getStore());
    // Data.instanceCount++;
    // console.info("Data instance:", Data.instanceCount);
  }

  private static getStore(): IndexedFormula {
    const dataTtlFilePath: string | undefined = process.env.DATA_TTL_FILE_PATH;
    if (!dataTtlFilePath) {
      throw new EvalError("must specify a data .ttl (text/turtle) file path");
    }
    const store = graph();
    parse(
      fs.readFileSync(dataTtlFilePath).toString(),
      store,
      "http://example.org",
      "text/turtle"
    );
    return store;
  }
}
