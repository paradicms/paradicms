import fs from "fs";
import * as path from "path";
import {graph, IndexedFormula, parse} from "rdflib";
import {RdfData} from "@paradicms/rdf";

export class Data extends RdfData {
  private static findDataDirectory(): string {
    let dataDirectoryPath: string | undefined = process.env.DATA_DIRECTORY_PATH;
    if (!dataDirectoryPath) {
      throw new EvalError("must specify a data directory path");
    }
    // console.info("using data directory ", dataDirectoryPath);
    return dataDirectoryPath;
  }

  private static readonly dataDirectoryPath = Data.findDataDirectory();
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
    parse(fs.readFileSync(dataTtlFilePath).toString(), store, "text/turtle");
    return store;
  }

  protected readModels<ModelT>(fileBaseName: string): readonly ModelT[] {
    const filePath = path.join(Data.dataDirectoryPath, fileBaseName + ".json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const models: ModelT[] = JSON.parse(fileContents);
    // console.info("read", models.length, "models from", filePath);
    return models;
  }
}
