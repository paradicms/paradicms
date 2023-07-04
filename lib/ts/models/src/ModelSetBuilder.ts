import {Store} from "@paradicms/rdf";
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
import {ImagesMixin} from "./ImagesMixin";
import {ThumbnailSelector} from "./ThumbnailSelector";

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
  private readonly store: Store = new Store();

  addAgent(
    agent: AgentUnion,
    joinSelector?: AgentJoinSelector
  ): ModelSetBuilder {
    if (agent.type === "OtherAgent") {
      log.debug("ModelSetBuilder: ignoring 'OtherAgent'", agent.key);
      return this;
    }

    log.debug("ModelSetBuilder: adding agent", agent.key);
    this.addModel(agent);

    if (!joinSelector) {
      return this;
    }

    if (joinSelector.thumbnail) {
      this.addThumbnail(agent, joinSelector.thumbnail);
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
    log.debug("ModelSetBuilder: adding collection", collection.key);
    this.addModel(collection);

    if (!joinSelector) {
      return this;
    }

    if (joinSelector.thumbnail) {
      if (!this.addThumbnail(collection, joinSelector.thumbnail)) {
        for (const work of collection.works) {
          if (this.addThumbnail(work, joinSelector.thumbnail)) {
            break;
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
    this.addModel(concept);

    if (!joinSelector) {
      return this;
    }

    if (joinSelector.thumbnail) {
      this.addThumbnail(concept, joinSelector.thumbnail);
    }

    return this;
  }

  addImage(
    image: Image,
    joinSelector?: {
      agents?: AgentJoinSelector;
    }
  ): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding image", image.key);
    this.addModel(image);
    if (joinSelector) {
      this.addRights(joinSelector, image);
    }
    return this;
  }

  addLicense(license: License): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding license", license.key);
    return this.addModel(license);
  }

  addLocation(location: Location): ModelSetBuilder {
    return this.addModel(location);
  }

  private addModel<ModelT extends Model>(model: ModelT): ModelSetBuilder {
    if (model.identifiers.length === 0) {
      return this;
    }
    const tempStore = new Store();
    model.toRdf(tempStore);
    const tempStoreGraphs = tempStore.getGraphs(null, null, null);
    if (
      tempStoreGraphs.every(tempStoreGraph =>
        model.identifiers.some(modelIdentifier =>
          modelIdentifier.equals(tempStoreGraph)
        )
      )
    ) {
      // If the graphs in a model's RDF correspond to the model's identifierss, then add the model
      for (const quad of tempStore) {
        this.store.add(quad);
      }
    } else {
      // Otherwise the model is likely a blank node in another model's graph, don't add it
      // log.debug(
      //   "tried to add a model that belongs to another model's graph:",
      //   model.key
      // );
    }

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
    this.addModel(property);

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
      this.addThumbnail(property, joinSelector.thumbnail);
    }

    return this;
  }

  addPropertyGroup(
    propertyGroup: PropertyGroup,
    joinSelector?: PropertyGroupJoinSelector
  ): ModelSetBuilder {
    this.addModel(propertyGroup);

    if (!joinSelector) {
      return this;
    }

    if (joinSelector.properties) {
      for (const property of propertyGroup.properties) {
        this.addProperty(property, joinSelector.properties);
      }
    }

    if (joinSelector.thumbnail) {
      this.addThumbnail(propertyGroup, joinSelector.thumbnail);
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
      // log.debug(
      //   "ModelSetBuilder: joining agents to",
      //   (rights as any).constructor
      // );
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

    if (joinSelector.licenses) {
      for (const license of rights.licenses) {
        this.addLicense(license);
      }
    }

    if (joinSelector.rightsStatements) {
      for (const rightsStatement of rights.rightsStatements) {
        this.addRightsStatement(rightsStatement);
      }
    }
  }

  addRightsStatement(rightsStatement: RightsStatement): ModelSetBuilder {
    return this.addModel(rightsStatement);
  }

  /**
   * Add a thumbnail and the original image it corresponds to.
   * @return true if a thumbnail was added
   */
  private addThumbnail(
    imagesMixin: ImagesMixin,
    selector: ThumbnailSelector
  ): boolean {
    log.debug(
      "ModelSetBuilder:",
      imagesMixin.images.length,
      "images to select thumbnails from:",
      JSON.stringify(
        imagesMixin.images.map(image => ({
          key: image.key,
          exactDimensions: image.exactDimensions,
          maxDimensions: image.maxDimensions,
        }))
      )
    );
    for (const image of imagesMixin.images) {
      // log.debug(
      //   "ModelSetBuilder: trying to get thumbnail for",
      //   (image as any).constructor,
      //   JSON.stringify({
      //     key: image.key,
      //     exactDimensions: image.exactDimensions,
      //     maxDimensions: image.maxDimensions,
      //   })
      // );
      const thumbnail = imagesMixin.thumbnail(selector);
      if (thumbnail) {
        log.debug(
          "ModelSetBuilder: adding original image",
          image.key,
          "in order to add thumbnail",
          thumbnail.key
        );
        this.addImage(image); // Add the original image
        log.debug("ModelSetBuilder: adding thumbnail", thumbnail.key);
        this.addImage(thumbnail);
        return true;
      }
    }
    log.debug(
      "ModelSetBuilder: no thumbnail found for selector",
      JSON.stringify(selector)
    );
    return false;
  }

  addWork(work: Work, joinSelector?: WorkJoinSelector): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding work", work.key);
    this.addModel(work);

    if (!joinSelector) {
      // log.debug("ModelSetBuilder: work has no join selector");
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
      this.addThumbnail(work, joinSelector.thumbnail);
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
    return ModelSetFactory.fromDataset(this.store);
  }
}
