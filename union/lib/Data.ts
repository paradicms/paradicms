import fs from "fs";
import * as path from "path";
import {
  Collection,
  Image,
  Institution,
  Object,
  PropertyDefinition,
} from "@paradicms/models";
import * as sanitize from "sanitize-filename";

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

  static getImages(): readonly Image[] {
    return Data.getModels<Image>("image");
  }

  static getInstitutionBySanitizedUri(institutionUri: string): Institution {
    return Data.getModelBySanitizedUri(Data.getInstitutions(), institutionUri);
  }

  static getInstitutionByUri(institutionUri: string): Institution {
    return Data.getModelByUri(Data.getInstitutions(), institutionUri);
  }

  static getInstitutions(): readonly Institution[] {
    return Data.getModels<Institution>("institution");
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

  private static getModelBySanitizedUri<ModelT extends {uri: string}>(
    models: readonly ModelT[],
    sanitizedModelUri: string
  ): ModelT {
    const model = models.find(
      model => sanitize(model.uri) === sanitizedModelUri
    );
    if (!model) {
      throw new EvalError("could not find model " + sanitizedModelUri);
    }
    return model;
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

  static getPropertyDefinitions(): readonly PropertyDefinition[] {
    return Data.getModels<PropertyDefinition>("propertyDefinition");
  }

  static getSanitizedInstitutionUris(): readonly string[] {
    return Data.getSanitizedModelUris(Data.getInstitutions());
  }

  private static getSanitizedModelUris<ModelT extends {uri: string}>(
    models: readonly ModelT[]
  ): readonly string[] {
    models.map(model => sanitize(model.uri));
  }
}
