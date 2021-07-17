import fs from "fs";
import {RdfData} from "@paradicms/rdf";
import {Store} from "n3";

export class Data extends RdfData {
  // private static instanceCount = 0;
  static readonly instance = new Data();

  private constructor() {
    super(Data.getStore());
    // Data.instanceCount++;
    // console.info("Data instance:", Data.instanceCount);
  }

  private static getStore(): Store {
    const dataTtlFilePath: string | undefined = process.env.DATA_TTL_FILE_PATH;
    if (!dataTtlFilePath) {
      throw new EvalError("must specify a data .ttl (text/turtle) file path");
    }
    return RdfData.parseTurtle(fs.readFileSync(dataTtlFilePath).toString());
  }
}
