import fs from "fs";
import * as path from "path";
import {
  AbstractData,
  Collection,
  Image,
  Institution,
  Object,
  PropertyDefinition,
} from "@paradicms/models";

class AllData extends AbstractData {
  private static findDataDirectory(): string {
    let dataDirectoryPath: string | undefined = process.env.DATA_DIRECTORY_PATH;
    if (!dataDirectoryPath) {
      throw new EvalError("must specify a data directory path");
    }
    return dataDirectoryPath;
  }

  private static readonly dataDirectoryPath = AllData.findDataDirectory();

  constructor() {
    super();
  }

  readModels<ModelT>(fileBaseName: string): readonly ModelT[] {
    const filePath = path.join(
      AllData.dataDirectoryPath,
      fileBaseName + ".json"
    );
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  }
}

export class Data {
  constructor() {
    const allData = new AllData();

    const institutions = allData.institutions;
    if (institutions.length === 0) {
      throw new EvalError("no institutions");
    }
    // Ignore all but the first institution

    // In production there should only be one institution.
    // The test data has more than one institution.
    this.institution = institutions[0];

    const collections = allData.collections;
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

    this.objects = allData.objects.filter(object =>
      object.collectionUris.some(
        collectionUri => collectionUri === this.collection.uri
      )
    );
    if (this.objects.length === 0) {
      throw new EvalError("no objects for collection " + this.collection.uri);
    }

    const objectUris = new Set<string>(this.objects.map(object => object.uri));
    this.images = allData.images.filter(image =>
      objectUris.has(image.depictsUri)
    );

    this.propertyDefinitions = allData.propertyDefinitions;
  }

  readonly collection: Collection;
  readonly images: readonly Image[];
  readonly institution: Institution;
  readonly objects: readonly Object[];
  readonly propertyDefinitions: readonly PropertyDefinition[];
}
