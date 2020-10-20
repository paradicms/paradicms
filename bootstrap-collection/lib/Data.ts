import fs from "fs";
import * as path from "path";
import {Collection, Image, Object, PropertyDefinition} from "@paradicms/models";

export class Data {
  constructor() {
    let dataDirectoryPath: string | undefined = process.env.DATA_DIRECTORY_PATH;
    if (!dataDirectoryPath) {
      throw new EvalError("must specify a data directory path");
    }
    console.info("using data directory ", dataDirectoryPath);

    const collections = Data.getModels<Collection>(
      dataDirectoryPath,
      "collection"
    );
    if (collections.length === 0) {
      throw new EvalError("no collections");
    }
    this.collection = collections[0];

    this.objects = Data.getModels<Object>(
      dataDirectoryPath,
      "object"
    ).filter(object =>
      object.collectionUris.some(
        collectionUri => collectionUri === this.collection.uri
      )
    );

    const objectUris = new Set<string>(this.objects.map(object => object.uri));
    this.images = Data.getModels<Image>(
      dataDirectoryPath,
      "image"
    ).filter(image => objectUris.has(image.depictsUri));

    this.propertyDefinitions = Data.getModels<PropertyDefinition>(
      dataDirectoryPath,
      "propertyDefinition"
    );
  }

  readonly collection: Collection;
  readonly images: readonly Image[];
  readonly objects: readonly Object[];
  readonly propertyDefinitions: readonly PropertyDefinition[];

  private static getModels<ModelT>(
    dataDirectoryPath: string,
    fileBaseName: string
  ): readonly ModelT[] {
    const filePath = path.join(dataDirectoryPath, fileBaseName + ".json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  }
}
