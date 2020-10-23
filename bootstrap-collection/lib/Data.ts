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
  constructor() {
    let dataDirectoryPath: string | undefined = process.env.DATA_DIRECTORY_PATH;
    if (!dataDirectoryPath) {
      throw new EvalError("must specify a data directory path");
    }
    console.info("using data directory ", dataDirectoryPath);

    const institutions = Data.getModels<Institution>(
      dataDirectoryPath,
      "institution"
    );
    if (institutions.length === 0) {
      throw new EvalError("no institutions");
    }
    // Ignore all but the first institution
    // In production there should only be one institution.
    // The test data has more than one institution.
    this.institution = institutions[0];

    const collections = Data.getModels<Collection>(
      dataDirectoryPath,
      "collection"
    );
    // Ignore all but the first collection. See above.
    const collection = collections.find(
      collection => collection.institutionUri === this.institution.uri
    );
    if (!collection) {
      throw new EvalError(
        "no collection for institution " + this.institution.uri
      );
    }
    this.collection = collection;

    this.objects = Data.getModels<Object>(
      dataDirectoryPath,
      "object"
    ).filter(object =>
      object.collectionUris.some(
        collectionUri => collectionUri === this.collection.uri
      )
    );
    if (this.objects.length === 0) {
      throw new EvalError("no objects for collection " + this.collection.uri);
    }

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
  readonly institution: Institution;
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
