import {DataFactory, Store} from "@paradicms/rdf";
import invariant from "ts-invariant";
import {AgentUnion} from "./AgentUnion";
import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
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
import {PropertyGroup} from "./PropertyGroup";
import {AgentJoinSelector} from "./AgentJoinSelector";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";
import {PropertyJoinSelector} from "./PropertyJoinSelector";
import {PropertyGroupJoinSelector} from "./PropertyGroupJoinSelector";
import {WorkJoinSelector} from "./WorkJoinSelector";
import {RightsMixin} from "./RightsMixin";
import {RightsJoinSelector} from "./RightsJoinSelector";
import {PropertyValue} from "./PropertyValue";
import {ConceptPropertyValue} from "./ConceptPropertyValue";
import {WorkEventJoinSelector} from "./WorkEventJoinSelector";
import {WorkEventUnion} from "./WorkEventUnion";

/**
 * Build a ModelSet by adding models to it.
 *
 * Re: join selectors. A caller can select which connected models to include in a ModelSet.
 * For example, return a collection's thumbnail along with the collection.
 * An undefined joinSelector means don't return any connected models.
 * An empty joinSelector ({}) means return the connected models themselves but none of their connected models (i.e., no recursion).
 * For example, a joinSelector on Collection with works: {} will return all of the Work instances associated with that collection,
 * but no models connected to the Works (i.e., their Agents).
 */
export class ModelSetBuilder {
  private addedAppConfiguration: boolean = false;
  // private readonly addedModelDefaultGraphQuads: Quad[][] = [];
  private readonly addedModelUris: Set<string> = new Set<string>();
  private readonly store: Store = new Store();

  addAgent(
    agent: AgentUnion,
    joinSelector?: AgentJoinSelector
  ): ModelSetBuilder {
    if (agent.type === "OtherAgent") {
      return this;
    }

    this.addModel(agent);

    if (!agent.uri) {
      return this;
    }

    if (!joinSelector) {
      return this;
    }

    if (joinSelector.thumbnail) {
      const thumbnailImage = agent.thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImage(thumbnailImage, joinSelector.thumbnail);
      }
    }

    if (joinSelector.works) {
      for (const work of agent.works) {
        this.addWork(work, joinSelector.works);
      }
    }

    return this;
  }

  addAgents(
    agents: readonly AgentUnion[],
    joinSelector?: AgentJoinSelector
  ): ModelSetBuilder {
    for (const agent of agents) {
      this.addAgent(agent, joinSelector);
    }
    return this;
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

  addCollection(
    collection: Collection,
    joinSelector?: CollectionJoinSelector
  ): ModelSetBuilder {
    this.addNamedModel(collection);

    if (!joinSelector) {
      return this;
    }

    if (joinSelector.thumbnail) {
      const thumbnailImage = collection.thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImage(thumbnailImage, joinSelector.thumbnail);
        if (thumbnailImage.depictsUri !== collection.uri) {
          // The thumbnail either depicts the collection or one of the collection's works.
          // If the latter case we need to include the work in the modelSet.
          for (const work of collection.works) {
            if (thumbnailImage.depictsUri === work.uri) {
              this.addWork(work);
              break;
            }
          }
        }
      }
    }

    if (joinSelector.works) {
      for (const work of collection.works) {
        this.addWork(work, joinSelector.works);
      }
    }

    return this;
  }

  addConcept(
    concept: Concept,
    joinSelector?: PropertyValueJoinSelector
  ): ModelSetBuilder {
    this.addNamedModel(concept);

    if (!joinSelector) {
      return this;
    }

    if (joinSelector.thumbnail) {
      const thumbnail = concept.thumbnail(joinSelector.thumbnail);
      if (thumbnail) {
        this.addImage(thumbnail, joinSelector.thumbnail);
      }
    }

    return this;
  }

  addImage(
    image: Image,
    joinSelector?: {
      agents?: AgentJoinSelector;
    }
  ): ModelSetBuilder {
    this.addNamedModel(image);
    if (joinSelector) {
      this.addRights(joinSelector, image);
    }
    return this;
  }

  addLicense(license: License): ModelSetBuilder {
    return this.addModel(license);
  }

  addLocation(location: Location): ModelSetBuilder {
    return this.addModel(location);
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

  addOrganization(
    organization: Organization,
    joinSelector?: AgentJoinSelector
  ): ModelSetBuilder {
    return this.addAgent(organization, joinSelector);
  }

  addPerson(person: Person, joinSelector?: AgentJoinSelector): ModelSetBuilder {
    return this.addAgent(person, joinSelector);
  }

  addProperty(
    property: Property,
    joinSelector?: PropertyJoinSelector
  ): ModelSetBuilder {
    this.addNamedModel(property);

    if (!joinSelector) {
      return this;
    }

    if (joinSelector.groups) {
      for (const propertyGroup of property.groups) {
        this.addPropertyGroup(propertyGroup, joinSelector.groups);
      }
    }

    if (joinSelector.rangeValues) {
      for (const value of property.rangeValues) {
        this.addPropertyValue(value, joinSelector.rangeValues);
      }
    }

    if (joinSelector.thumbnail) {
      const thumbnailImage = property.thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImage(thumbnailImage, joinSelector.thumbnail);
      }
    }

    return this;
  }

  addPropertyGroup(
    propertyGroup: PropertyGroup,
    joinSelector?: PropertyGroupJoinSelector
  ): ModelSetBuilder {
    this.addNamedModel(propertyGroup);

    if (!joinSelector) {
      return this;
    }

    if (joinSelector.properties) {
      for (const property of propertyGroup.properties) {
        this.addProperty(property, joinSelector.properties);
      }
    }

    if (joinSelector.thumbnail) {
      const thumbnailImage = propertyGroup.thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImage(thumbnailImage, joinSelector.thumbnail);
      }
    }

    return this;
  }

  addPropertyGroups(
    propertyGroups: readonly PropertyGroup[],
    joinSelector?: PropertyGroupJoinSelector
  ): ModelSetBuilder {
    for (const propertyGroup of propertyGroups) {
      this.addPropertyGroup(propertyGroup, joinSelector);
    }
    return this;
  }

  addPropertyValue(
    propertyValue: PropertyValue,
    joinSelector?: PropertyValueJoinSelector
  ): ModelSetBuilder {
    if (propertyValue instanceof ConceptPropertyValue) {
      this.addConcept(propertyValue.concept, joinSelector);
    }

    if (!joinSelector) {
      return this;
    }

    if (joinSelector.property) {
      this.addProperty(propertyValue.property, joinSelector.property);
    }

    return this;
  }

  private addRights(joinSelector: RightsJoinSelector, rights: RightsMixin) {
    if (joinSelector.agents) {
      for (const agents of [
        rights.contributors,
        rights.creators,
        rights.rightsHolders,
      ]) {
        for (const agent of agents) {
          this.addAgent(agent, joinSelector.agents);
        }
      }
    }

    if (joinSelector.license && rights.license) {
      this.addLicense(rights.license);
    }

    if (joinSelector.rightsStatement && rights.rightsStatement) {
      this.addRightsStatement(rights.rightsStatement);
    }
  }

  addRightsStatement(rightsStatement: RightsStatement): ModelSetBuilder {
    return this.addNamedModel(rightsStatement);
  }

  addWork(work: Work, joinSelector?: WorkJoinSelector): ModelSetBuilder {
    this.addNamedModel(work);

    if (!joinSelector) {
      return this;
    }

    this.addRights(joinSelector, work);

    if (work.description) {
      this.addRights(joinSelector, work.description);
    }

    if (joinSelector.images) {
      for (const image of work.images) {
        this.addImage(image, joinSelector.images);
      }
    } else if (joinSelector.thumbnail) {
      const thumbnailImage = work.thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImage(thumbnailImage, joinSelector.images);
      }
    }

    if (joinSelector.collections) {
      for (const collection of work.collections) {
        this.addCollection(collection, joinSelector.collections);
      }
    }

    if (joinSelector.events) {
      for (const event of work.events) {
        this.addWorkEvent(event, joinSelector.events);
      }
    }

    if (joinSelector.location) {
      if (work.location) {
        this.addLocation(work.location.location);
      }
    }

    if (joinSelector.propertyValues) {
      for (const propertyValue of work.propertyValues) {
        this.addPropertyValue(propertyValue, joinSelector.propertyValues);
      }
    }

    return this;
  }

  addWorks(
    works: readonly Work[],
    joinSelector?: WorkJoinSelector
  ): ModelSetBuilder {
    for (const work of works) {
      this.addWork(work, joinSelector);
    }
    return this;
  }

  addWorkEvent(
    workEvent: WorkEventUnion,
    joinSelector?: WorkEventJoinSelector
  ): ModelSetBuilder {
    this.addModel(workEvent);

    if (!joinSelector) {
      return this;
    }

    if (joinSelector.location && workEvent.location) {
      this.addLocation(workEvent.location);
    }

    if (joinSelector.work) {
      this.addWork(workEvent.work, joinSelector.work);
    }

    switch (workEvent.type) {
      case "WorkCreation": {
        if (joinSelector.agents) {
          for (const agent of workEvent.agents) {
            this.addAgent(agent, joinSelector.agents);
          }
        }
        break;
      }
    }

    return this;
  }

  addWorkEvents(
    workEvents: readonly WorkEventUnion[],
    joinSelector?: WorkEventJoinSelector
  ): ModelSetBuilder {
    for (const workEvent of workEvents) {
      this.addWorkEvent(workEvent, joinSelector);
    }
    return this;
  }

  build(): ModelSet {
    return ModelSetFactory.fromDatasetCore(this.store);
  }

  private static modelToQuads(model: Model): Quad[] {
    // const modelGraph = DataFactory.blankNode();
    const modelGraph = model.identifier;
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
