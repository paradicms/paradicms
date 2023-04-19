import {DataFactory, Store} from "@paradicms/rdf";
import invariant from "ts-invariant";
import {Agent} from "./Agent";
import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
import {Event} from "./Event";
import {Image} from "./Image";
import {License} from "./License";
import {Location} from "./Location";
import {Model} from "./Model";
import {ModelSet} from "./ModelSet";
import {ModelSetFactory} from "./ModelSetFactory";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {Property} from "./Property";
import {RightsStatement} from "./RightsStatement";
import {Work} from "./Work";

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

  addAgent(agent: Agent): ModelSetBuilder {
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

  addAppConfiguration(
    appConfiguration: AppConfiguration | null
  ): ModelSetBuilder {
    if (typeof this.appConfiguration !== "undefined") {
      throw new RangeError("tried to add AppConfiguration twice");
    }
    this.appConfiguration = appConfiguration;
    return this;
  }

  addCollection(collection: Collection): ModelSetBuilder {
    this.collectionsByUri = ModelSetBuilder.addNamedModel(
      this.collectionsByUri,
      collection
    );
    return this;
  }

  addCollections(collections: readonly Collection[]): ModelSetBuilder {
    this.collectionsByUri = ModelSetBuilder.addNamedModels(
      this.collectionsByUri,
      collections
    );
    return this;
  }

  addConcept(concept: Concept): ModelSetBuilder {
    this.conceptsByUri = ModelSetBuilder.addNamedModel(
      this.conceptsByUri,
      concept
    );
    return this;
  }

  addConcepts(concepts: readonly Concept[]): ModelSetBuilder {
    this.conceptsByUri = ModelSetBuilder.addNamedModels(
      this.conceptsByUri,
      concepts
    );
    return this;
  }

  addEvent(event: Event): ModelSetBuilder {
    this.eventsByUri = ModelSetBuilder.addNamedModel(this.eventsByUri, event);
    return this;
  }

  addImage(image: Image): ModelSetBuilder {
    this.imagesByUri = ModelSetBuilder.addNamedModel(this.imagesByUri, image);
    return this;
  }

  addImages(images: readonly Image[]): ModelSetBuilder {
    this.imagesByUri = ModelSetBuilder.addNamedModels(this.imagesByUri, images);
    return this;
  }

  addLicense(license: License): ModelSetBuilder {
    this.licensesByUri = ModelSetBuilder.addNamedModel(
      this.licensesByUri,
      license
    );
    return this;
  }

  addLicenses(licenses: readonly License[]): ModelSetBuilder {
    this.licensesByUri = ModelSetBuilder.addNamedModels(
      this.licensesByUri,
      licenses
    );
    return this;
  }

  addLocation(location: Location): ModelSetBuilder {
    invariant(location.uri, "only named locations can be added");
    if (!this.locationsByUri) {
      this.locationsByUri = {};
    }
    this.locationsByUri[location.uri] = location;
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

  addOrganization(organization: Organization): ModelSetBuilder {
    this.organizationsByUri = ModelSetBuilder.addNamedModel(
      this.organizationsByUri,
      organization
    );
    return this;
  }

  addPerson(person: Person): ModelSetBuilder {
    this.peopleByUri = ModelSetBuilder.addNamedModel(this.peopleByUri, person);
    return this;
  }

  addProperties(properties: readonly Property[]): ModelSetBuilder {
    this.propertiesByUri = ModelSetBuilder.addNamedModels(
      this.propertiesByUri,
      properties
    );
    return this;
  }

  addProperty(property: Property): ModelSetBuilder {
    this.propertiesByUri = ModelSetBuilder.addNamedModel(
      this.propertiesByUri,
      property
    );
    return this;
  }

  addRightsStatement(rightsStatement: RightsStatement): ModelSetBuilder {
    this.rightsStatementsByUri = ModelSetBuilder.addNamedModel(
      this.rightsStatementsByUri,
      rightsStatement
    );
    return this;
  }

  addRightsStatements(
    rightsStatements: readonly RightsStatement[]
  ): ModelSetBuilder {
    this.rightsStatementsByUri = ModelSetBuilder.addNamedModels(
      this.rightsStatementsByUri,
      rightsStatements
    );
    return this;
  }

  addWork(work: Work): ModelSetBuilder {
    this.worksByUri = ModelSetBuilder.addNamedModel(this.worksByUri, work);
    return this;
  }

  addWorks(works: readonly Work[]): ModelSetBuilder {
    this.worksByUri = ModelSetBuilder.addNamedModels(this.worksByUri, works);
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
    return ModelSetFactory.fromDatasetCore(store);
  }
}
