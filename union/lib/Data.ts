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
  private static readonly dataDirectoryPath = path.join(
    process.cwd(),
    "data",
    "test"
  );

  static getCollectionByUri(collectionUri: string): Collection {
    return this.getModelByUri(Data.getCollections(), collectionUri);
  }

  static getCollections(): readonly Collection[] {
    return Data.getModels<Collection>("collection");
  }

  static getCollectionsByInstitutionUri(
    institutionUri: string
  ): readonly Collection[] {
    return Data.getModelsByInstitutionUri(
      institutionUri,
      Data.getCollections()
    );
  }

  static getCollectionUrisByInstitutionUri(
    institutionUri: string
  ): readonly string[] {
    return Data.getCollections()
      .filter(collection => collection.institutionUri == institutionUri)
      .map(collection => collection.uri);
  }

  static getImages(): readonly Image[] {
    return Data.getModels<Image>("image");
  }

  static getImagesByInstitutionUri(institutionUri: string): readonly Image[] {
    return Data.getImages().filter(
      image => image.institutionUri === institutionUri
    );
  }

  static getInstitutionByUri(institutionUri: string): Institution {
    return Data.getModelByUri(Data.getInstitutions(), institutionUri);
  }

  static getInstitutions(): readonly Institution[] {
    return Data.getModels<Institution>("institution");
  }

  static getInstitutionUris(): readonly string[] {
    return Data.getInstitutions().map(institution => institution.uri);
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

  static getObjectByUri(objectUri: string): Object {
    return Data.getModelByUri(Data.getObjects(), objectUri);
  }

  static getObjects(): readonly Object[] {
    return Data.getModels<Object>("object");
  }

  static getObjectsByInstitutionUri(institutionUri: string): readonly Object[] {
    return Data.getModelsByInstitutionUri(institutionUri, Data.getObjects());
  }

  static getObjectsByCollectionUri(collectionUri: string): readonly Object[] {
    return Data.getObjects().filter(object =>
      object.collectionUris.some(
        objectCollectionUri => objectCollectionUri === collectionUri
      )
    );
  }

  static getPropertyDefinitions(): readonly PropertyDefinition[] {
    return Data.getModels<PropertyDefinition>("propertyDefinition");
  }
}
