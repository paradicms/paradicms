import {DataFactory, Store} from "@paradicms/rdf";
import invariant from "ts-invariant";
import {AgentUnion} from "./AgentUnion";
import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
import {Event} from "./Event";
import {Image} from "./Image";
import {License} from "./License";
import {Location} from "./Location";
import {Model} from "./Model";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {Property} from "./Property";
import {RightsStatement} from "./RightsStatement";
import {Work} from "./Work";
import {Quad} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";
import {ModelSetFactory} from "./ModelSetFactory";

export class ModelSetBuilder {
  private addedAppConfiguration: boolean = false;
  // private readonly addedModelDefaultGraphQuads: Quad[][] = [];
  private readonly addedModelUris: Set<string> = new Set<string>();
  private readonly store: Store = new Store();

  addAgent(agent: AgentUnion): ModelSetBuilder {
    switch (agent.type) {
      case "Organization":
        return this.addOrganization(agent);
      case "OtherAgent":
        return this;
      case "Person":
        return this.addPerson(agent);
    }
  }

  addAppConfiguration(
    appConfiguration: AppConfiguration | null
  ): ModelSetBuilder {
    if (!appConfiguration) {
      return this;
    }
    if (this.addedAppConfiguration) {
      throw new RangeError("tried to add AppConfiguration twice");
    }
    this.addModel(appConfiguration);
    this.addedAppConfiguration = true;
    return this;
  }

  addCollection(collection: Collection): ModelSetBuilder {
    return this.addNamedModel(collection);
  }

  addCollections(collections: readonly Collection[]): ModelSetBuilder {
    return this.addNamedModels(collections);
  }

  addConcept(concept: Concept): ModelSetBuilder {
    return this.addNamedModel(concept);
  }

  addConcepts(concepts: readonly Concept[]): ModelSetBuilder {
    return this.addNamedModels(concepts);
  }

  addEvent(event: Event): ModelSetBuilder {
    return this.addModel(event);
  }

  addImage(image: Image): ModelSetBuilder {
    return this.addNamedModel(image);
  }

  addImages(images: readonly Image[]): ModelSetBuilder {
    return this.addNamedModels(images);
  }

  addLicense(license: License): ModelSetBuilder {
    return this.addNamedModel(license);
  }

  addLicenses(licenses: readonly License[]): ModelSetBuilder {
    return this.addNamedModels(licenses);
  }

  addLocation(location: Location): ModelSetBuilder {
    return this.addNamedModel(location);
  }

  private addModel<ModelT extends Model>(model: ModelT): ModelSetBuilder {
    if (model.uri) {
      return this.addNamedModel(model);
    }
    // Blank node models should be included in the triples of another model
    return this;
    // const defaultGraph = DataFactory.defaultGraph();
    // const modelDefaultGraphQuads = model
    //   .toRdf()
    //   .map(triple =>
    //     DataFactory.quad(
    //       triple.subject,
    //       triple.predicate,
    //       triple.object,
    //       defaultGraph
    //     )
    //   );
    // // Serialize the model to quads in the default graph
    // // Then test whether that set of quads is isomorphic with previously-added sets of (model) quads
    // for (const addedModelDefaultGraphQuads of this
    //   .addedModelDefaultGraphQuads) {
    //   if (isomorphic(modelDefaultGraphQuads, addedModelDefaultGraphQuads)) {
    //     console.debug("tried to add isomorphic model");
    //     return this;
    //   }
    // }
    // // Add a named graph to the store, not the triples in the default graph
    // this.store.addQuads(ModelSetBuilder.modelToQuads(model));
    // this.addedModelDefaultGraphQuads.push(modelDefaultGraphQuads);
    // return this;
  }

  private addNamedModel<ModelT extends Model>(model: ModelT): ModelSetBuilder {
    invariant(model.uri, "can only add named models");
    if (this.addedModelUris.has(model.uri)) {
      // console.debug("tried to add model", model.uri, "twice");
      return this;
    }
    this.store.addQuads(ModelSetBuilder.modelToQuads(model));
    this.addedModelUris.add(model.uri);
    return this;
  }

  private addNamedModels<ModelT extends Model>(
    models: readonly ModelT[]
  ): ModelSetBuilder {
    for (const model of models) {
      this.addNamedModel(model);
    }
    return this;
  }

  addOrganization(organization: Organization): ModelSetBuilder {
    return this.addModel(organization);
  }

  addPerson(person: Person): ModelSetBuilder {
    return this.addModel(person);
  }

  addProperties(properties: readonly Property[]): ModelSetBuilder {
    return this.addNamedModels(properties);
  }

  addProperty(property: Property): ModelSetBuilder {
    return this.addNamedModel(property);
  }

  addRightsStatement(rightsStatement: RightsStatement): ModelSetBuilder {
    return this.addNamedModel(rightsStatement);
  }

  addRightsStatements(
    rightsStatements: readonly RightsStatement[]
  ): ModelSetBuilder {
    return this.addNamedModels(rightsStatements);
  }

  addWork(work: Work): ModelSetBuilder {
    return this.addNamedModel(work);
  }

  addWorks(works: readonly Work[]): ModelSetBuilder {
    return this.addNamedModels(works);
  }

  build(): ModelSet {
    return ModelSetFactory.fromDatasetCore(this.store);
  }

  private static modelToQuads(model: Model): Quad[] {
    const modelGraph = DataFactory.blankNode();
    return model
      .toRdf()
      .map(triple =>
        DataFactory.quad(
          triple.subject,
          triple.predicate,
          triple.object,
          modelGraph
        )
      );
  }
}
