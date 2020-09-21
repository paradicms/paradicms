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
      dataDirectoryPath = path.join(process.cwd(), "data", "test");
    }
    console.info("using data directory ", dataDirectoryPath);
    return dataDirectoryPath;
  }

  private static readonly dataDirectoryPath = Data.findDataDirectory();

  static collectionByUri(collectionUri: string): Collection {
    return this.getModelByUri(Data.collections, collectionUri);
  }

  static get collections(): readonly Collection[] {
    return Data.getModels<Collection>("collection");
  }

  static collectionsByInstitutionUri(
    institutionUri: string
  ): readonly Collection[] {
    return Data.getModelsByInstitutionUri(institutionUri, Data.collections);
  }

  static collectionUrisByInstitutionUri(
    institutionUri: string
  ): readonly string[] {
    return Data.collections
      .filter(collection => collection.institutionUri == institutionUri)
      .map(collection => collection.uri);
  }

  static get images(): readonly Image[] {
    return Data.getModels<Image>("image");
  }

  static imagesByInstitutionUri(institutionUri: string): readonly Image[] {
    return Data.images.filter(image => image.institutionUri === institutionUri);
  }

  static imagesByObjectUri(objectUri: string): readonly Image[] {
    return Data.images.filter(image => image.objectUri === objectUri);
  }

  static institutionByUri(institutionUri: string): Institution {
    return Data.getModelByUri(Data.institutions, institutionUri);
  }

  static get institutions(): readonly Institution[] {
    return Data.getModels<Institution>("institution");
  }

  static get institutionUris(): readonly string[] {
    return Data.institutions.map(institution => institution.uri);
  }

  private static getModels<ModelT>(fileBaseName: string): readonly ModelT[] {
    const filePath = path.join(Data.dataDirectoryPath, fileBaseName + ".json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  }

  private static getModelsByInstitutionUri<
    ModelT extends {institutionUri: string}
  >(institutionUri: string, models: readonly ModelT[]): readonly ModelT[] {
    return models.filter(model => model.institutionUri === institutionUri);
  }

  private static getModelByUri<ModelT extends {uri: string}>(
    models: readonly ModelT[],
    modelUri: string
  ): ModelT {
    const model = models.find(model => model.uri === modelUri);
    if (!model) {
      throw new EvalError("could not find model " + modelUri);
    }
    return model;
  }

  static objectByUri(objectUri: string): Object {
    return Data.getModelByUri(Data.objects, objectUri);
  }

  static get objects(): readonly Object[] {
    return Data.getModels<Object>("object");
  }

  static objectsByCollectionUri(collectionUri: string): readonly Object[] {
    return Data.objects.filter(object =>
      object.collectionUris.some(
        objectCollectionUri => objectCollectionUri === collectionUri
      )
    );
  }

  static objectUrisByInstitutionUri(institutionUri: string): readonly string[] {
    return Data.objects
      .filter(object => object.institutionUri === institutionUri)
      .map(object => object.uri);
  }

  static get propertyDefinitions(): readonly PropertyDefinition[] {
    return Data.getModels<PropertyDefinition>("propertyDefinition");
  }
}
