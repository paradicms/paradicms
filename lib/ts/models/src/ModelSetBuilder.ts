import {Image} from "./Image";
import {ModelSet} from "./ModelSet";
import {Collection} from "./Collection";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Concept} from "./Concept";
import {Work} from "./Work";
import {Person} from "./Person";
import {Organization} from "./Organization";
import {Agent} from "./Agent";
import {Event} from "./Event";
import {DataFactory, Store} from "@paradicms/rdf";
import {AppConfiguration} from "./AppConfiguration";
import {Model} from "./Model";
import {Property} from "./Property";
import {Location} from "./Location";
import invariant from "ts-invariant";
import {DatasetBackedModelSet} from "./DatasetBackedModelSet";

export class ModelSetBuilder {
  private appConfiguration: AppConfiguration | null | undefined;
  private collectionsByUri: {[index: string]: Collection} | undefined;
  private eventsByUri: {[index: string]: Event} | undefined;
  private imagesByUri: {[index: string]: Image} | undefined;
  private licensesByUri: {[index: string]: License} | undefined;
  private conceptsByUri: {[index: string]: Concept} | undefined;
  private locationsByUri: {[index: string]: Location} | undefined;
  private organizationsByUri: {[index: string]: Organization} | undefined;
  private peopleByUri: {[index: string]: Person} | undefined;
  private propertiesByUri: {[index: string]: Property} | undefined;
  private rightsStatementsByUri: {[index: string]: RightsStatement} | undefined;
  private worksByUri: {[index: string]: Work} | undefined;

  addAgent(agent: Agent) {
    const self = this;
    return agent.accept({
      visitOrganization(organization: Organization) {
        return self.addOrganization(organization);
      },
      visitPerson(person: Person) {
        return self.addPerson(person);
      },
    });
  }

  addAppConfiguration(appConfiguration: AppConfiguration | null) {
    if (typeof this.appConfiguration !== "undefined") {
      throw new RangeError("tried to add AppConfiguration twice");
    }
    this.appConfiguration = appConfiguration;
    return this;
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

  addLocation(location: Location) {
    const locationUri = (location as any).uri;
    invariant(locationUri, "only named locations can be added");
    if (!this.locationsByUri) {
      this.locationsByUri = {};
    }
    this.locationsByUri[locationUri] = location;
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

  addProperties(properties: readonly Property[]) {
    this.propertiesByUri = ModelSetBuilder.addNamedModels(
      this.propertiesByUri,
      properties
    );
    return this;
  }

  addProperty(property: Property) {
    this.propertiesByUri = ModelSetBuilder.addNamedModel(
      this.propertiesByUri,
      property
    );
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

  addConcept(concept: Concept) {
    this.conceptsByUri = ModelSetBuilder.addNamedModel(
      this.conceptsByUri,
      concept
    );
    return this;
  }

  addConcepts(concepts: readonly Concept[]) {
    this.conceptsByUri = ModelSetBuilder.addNamedModels(
      this.conceptsByUri,
      concepts
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

    const addModelToStore = (model: Model) => {
      const modelGraph = DataFactory.blankNode();
      for (const triple of model.toRdf()) {
        store.addQuad(
          DataFactory.quad(
            triple.subject,
            triple.predicate,
            triple.object,
            modelGraph
          )
        );
      }
    };

    if (this.appConfiguration) {
      addModelToStore(this.appConfiguration);
    }

    for (const modelsByUri of [
      this.collectionsByUri,
      this.conceptsByUri,
      this.eventsByUri,
      this.imagesByUri,
      this.licensesByUri,
      this.locationsByUri,
      this.organizationsByUri,
      this.peopleByUri,
      this.propertiesByUri,
      this.worksByUri,
      this.rightsStatementsByUri,
    ]) {
      if (!modelsByUri) {
        continue;
      }
      for (const modelUri of Object.keys(modelsByUri)) {
        addModelToStore(modelsByUri[modelUri]);
      }
    }
    return DatasetBackedModelSet.fromDatasetCore(store);
  }
}
