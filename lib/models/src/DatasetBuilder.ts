import {Institution} from "./Institution";
import {Image} from "./Image";
import {Object} from "./Object";
import {Dataset} from "./Dataset";
import {Collection} from "./Collection";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {PropertyDefinition} from "./PropertyDefinition";
import {PropertyValueDefinition} from "./PropertyValueDefinition";

export class DatasetBuilder {
  private collectionsByUri: {[index: string]: Collection} | undefined;
  private institutionsByUri: {[index: string]: Institution} | undefined;
  private imagesByUri: {[index: string]: Image} | undefined;
  private licensesByUri: {[index: string]: License} | undefined;
  private objectsByUri: {[index: string]: Object} | undefined;
  private propertyDefinitionsByUri:
    | {[index: string]: PropertyDefinition}
    | undefined;
  private propertyValueDefinitionsByUri:
    | {[index: string]: PropertyValueDefinition}
    | undefined;
  private rightsStatementsByUri: {[index: string]: RightsStatement} | undefined;

  addCollection(collection: Collection) {
    this.collectionsByUri = DatasetBuilder.addNamedModel(
      this.collectionsByUri,
      collection
    );
    return this;
  }

  addInstitution(institution: Institution) {
    this.institutionsByUri = DatasetBuilder.addNamedModel(
      this.institutionsByUri,
      institution
    );
    return this;
  }

  addImage(image: Image) {
    this.imagesByUri = DatasetBuilder.addNamedModel(this.imagesByUri, image);
    return this;
  }

  addLicense(license: License) {
    this.licensesByUri = DatasetBuilder.addNamedModel(
      this.licensesByUri,
      license
    );
    return this;
  }

  private static addNamedModel<ModelT extends {uri: string}>(
    addedModels: {[index: string]: ModelT} | undefined,
    newModel: ModelT
  ): {[index: string]: ModelT} {
    if (!addedModels) {
      addedModels = {};
    }
    const addedModel = addedModels[newModel.uri];
    if (!addedModel) {
      addedModels[newModel.uri] = newModel;
    }
    return addedModels;
  }

  addObject(object: Object) {
    this.objectsByUri = DatasetBuilder.addNamedModel(this.objectsByUri, object);
    return this;
  }

  addPropertyDefinition(propertyDefinition: PropertyDefinition) {
    this.propertyDefinitionsByUri = DatasetBuilder.addNamedModel(
      this.propertyDefinitionsByUri,
      propertyDefinition
    );
    return this;
  }

  addPropertyValueDefinition(propertyValueDefinition: PropertyValueDefinition) {
    this.propertyValueDefinitionsByUri = DatasetBuilder.addNamedModel(
      this.propertyValueDefinitionsByUri,
      propertyValueDefinition
    );
    return this;
  }

  addRightsStatement(rightsStatement: RightsStatement) {
    this.rightsStatementsByUri = DatasetBuilder.addNamedModel(
      this.rightsStatementsByUri,
      rightsStatement
    );
    return this;
  }

  build(): Dataset {
    return {
      collections: DatasetBuilder.buildNamedModels(this.collectionsByUri),
      images: DatasetBuilder.buildNamedModels(this.imagesByUri),
      institutions: DatasetBuilder.buildNamedModels(this.institutionsByUri),
      licenses: DatasetBuilder.buildNamedModels(this.licensesByUri),
      objects: DatasetBuilder.buildNamedModels(this.objectsByUri),
      propertyDefinitions: DatasetBuilder.buildNamedModels(
        this.propertyDefinitionsByUri
      ),
      propertyValueDefinitions: DatasetBuilder.buildNamedModels(
        this.propertyValueDefinitionsByUri
      ),
      rightsStatements: DatasetBuilder.buildNamedModels(
        this.rightsStatementsByUri
      ),
    };
  }

  private static buildNamedModels<ModelT extends {uri: string}>(
    addedModels: {[index: string]: ModelT} | undefined
  ): readonly ModelT[] {
    if (!addedModels) {
      return [];
    }
    return Object.keys(addedModels).map(uri => addedModels[uri]);
  }
}
