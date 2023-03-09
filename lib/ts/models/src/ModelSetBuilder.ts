import {Image} from "./Image";
import {ModelSet} from "./ModelSet";
import {Collection} from "./Collection";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {NamedValue} from "./NamedValue";
import {Work} from "./Work";
import {Person} from "./Person";
import {Organization} from "./Organization";
import {Agent} from "./Agent";
import {Event} from "./Event";
import {Store} from "@paradicms/rdf";

export class ModelSetBuilder {
  private collectionsByUri: {[index: string]: Collection} | undefined;
  private eventsByUri: {[index: string]: Event} | undefined;
  private imagesByUri: {[index: string]: Image} | undefined;
  private licensesByUri: {[index: string]: License} | undefined;
  private namedValuesByUri: {[index: string]: NamedValue} | undefined;
  private organizationsByUri: {[index: string]: Organization} | undefined;
  private peopleByUri: {[index: string]: Person} | undefined;
  private rightsStatementsByUri: {[index: string]: RightsStatement} | undefined;
  private worksByUri: {[index: string]: Work} | undefined;

  addAgent(agent: Agent) {
    if (agent instanceof Organization) {
      return this.addOrganization(agent);
    } else if (agent instanceof Person) {
      return this.addPerson(agent);
    } else {
      throw new EvalError();
    }
  }

  addCollection(collection: Collection) {
    this.collectionsByUri = ModelSetBuilder.addNamedModel(
      this.collectionsByUri,
      collection
    );
    return this;
  }

  addCollections(collections: readonly Collection[]) {
    this.collectionsByUri = ModelSetBuilder.addNamedModels(
      this.collectionsByUri,
      collections
    );
    return this;
  }

  addEvent(event: Event) {
    this.eventsByUri = ModelSetBuilder.addNamedModel(this.eventsByUri, event);
    return this;
  }

  addImage(image: Image) {
    this.imagesByUri = ModelSetBuilder.addNamedModel(this.imagesByUri, image);
    return this;
  }

  addImages(images: readonly Image[]) {
    this.imagesByUri = ModelSetBuilder.addNamedModels(this.imagesByUri, images);
    return this;
  }

  addLicense(license: License) {
    this.licensesByUri = ModelSetBuilder.addNamedModel(
      this.licensesByUri,
      license
    );
    return this;
  }

  addLicenses(licenses: readonly License[]) {
    this.licensesByUri = ModelSetBuilder.addNamedModels(
      this.licensesByUri,
      licenses
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

  private static addNamedModels<ModelT extends {uri: string}>(
    addedModels: {[index: string]: ModelT} | undefined,
    newModels: readonly ModelT[]
  ): {[index: string]: ModelT} {
    if (!addedModels) {
      addedModels = {};
    }
    for (const newModel of newModels) {
      const addedModel = addedModels[newModel.uri];
      if (!addedModel) {
        addedModels[newModel.uri] = newModel;
      }
    }
    return addedModels;
  }

  addOrganization(organization: Organization) {
    this.organizationsByUri = ModelSetBuilder.addNamedModel(
      this.organizationsByUri,
      organization
    );
    return this;
  }

  addPerson(person: Person) {
    this.peopleByUri = ModelSetBuilder.addNamedModel(this.peopleByUri, person);
    return this;
  }

  addWork(work: Work) {
    this.worksByUri = ModelSetBuilder.addNamedModel(this.worksByUri, work);
    return this;
  }

  addWorks(works: readonly Work[]) {
    this.worksByUri = ModelSetBuilder.addNamedModels(this.worksByUri, works);
    return this;
  }

  addNamedValue(namedValue: NamedValue) {
    this.namedValuesByUri = ModelSetBuilder.addNamedModel(
      this.namedValuesByUri,
      namedValue
    );
    return this;
  }

  addNamedValues(namedValues: readonly NamedValue[]) {
    this.namedValuesByUri = ModelSetBuilder.addNamedModels(
      this.namedValuesByUri,
      namedValues
    );
    return this;
  }

  addRightsStatement(rightsStatement: RightsStatement) {
    this.rightsStatementsByUri = ModelSetBuilder.addNamedModel(
      this.rightsStatementsByUri,
      rightsStatement
    );
    return this;
  }

  addRightsStatements(rightsStatements: readonly RightsStatement[]) {
    this.rightsStatementsByUri = ModelSetBuilder.addNamedModels(
      this.rightsStatementsByUri,
      rightsStatements
    );
    return this;
  }

  build(): ModelSet {
    const store = new Store();
    for (const modelsByUri of [
      this.collectionsByUri,
      this.eventsByUri,
      this.imagesByUri,
      this.licensesByUri,
      this.namedValuesByUri,
      this.organizationsByUri,
      this.peopleByUri,
      this.worksByUri,
      this.rightsStatementsByUri,
    ]) {
      if (!modelsByUri) {
        continue;
      }
      for (const modelUri of Object.keys(modelsByUri)) {
        const model = modelsByUri[modelUri];
        // Add all quads that belong to the model's graph
        for (const quad of model.modelSet.dataset.match(
          null,
          null,
          null,
          model.graphNode
        )) {
          store.add(quad);
        }
      }
    }
    return ModelSet.fromDatasetCore(store);
  }
}
