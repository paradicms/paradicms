import fs from "fs";
import * as path from "path";
import {Institution} from "@paradicms/models";

export class Data {
  private static readonly dataDirectoryPath = path.join(
    process.cwd(),
    "data",
    "test"
  );

  static getInstitutions(): readonly Institution[] {
    return Data.getModels<Institution>("institution");
  }

  private static getModels<T>(fileBaseName: string): readonly T[] {
    const filePath = path.join(Data.dataDirectoryPath, fileBaseName + ".json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  }
}
