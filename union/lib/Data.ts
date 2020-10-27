import fs from "fs";
import * as path from "path";
import {
  Collection,
  Image,
  Institution,
  Object,
  PropertyDefinition,
} from "@paradicms/models";

export class Data {
  private static findDataDirectory(): string {
    let dataDirectoryPath: string | undefined = process.env.DATA_DIRECTORY_PATH;
    if (!dataDirectoryPath) {
      throw new EvalError("must specify a data directory path");
    }
    // console.info("using data directory ", dataDirectoryPath);
    return dataDirectoryPath;
  }

  private static readonly dataDirectoryPath = Data.findDataDirectory();

  static get collections(): readonly Collection[] {
    return Data.getModels<Collection>("collection");
  }

  static get images(): readonly Image[] {
    return Data.getModels<Image>("image");
  }

  static get institutions(): readonly Institution[] {
    return Data.getModels<Institution>("institution");
  }

  private static getModels<ModelT>(fileBaseName: string): readonly ModelT[] {
    const filePath = path.join(Data.dataDirectoryPath, fileBaseName + ".json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  }

  static get objects(): readonly Object[] {
    return Data.getModels<Object>("object");
  }

  static get propertyDefinitions(): readonly PropertyDefinition[] {
    return Data.getModels<PropertyDefinition>("propertyDefinition");
  }
}
