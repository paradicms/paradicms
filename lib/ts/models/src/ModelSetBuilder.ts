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
import {EventJoinSelector} from "./EventJoinSelector";
import {ImagesMixin} from "./ImagesMixin";
import {ThumbnailSelector} from "./ThumbnailSelector";
import log from "loglevel";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {ThumbnailMixin} from "./ThumbnailMixin";
import {Event} from "./Event";

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
      log.debug("ModelSetBuilder: agent", agent.key, "has no join selector");
      return this;
    }

    if (joinSelector.thumbnail) {
      log.debug("ModelSetBuilder: adding agent", agent.key, "thumbnail");
      this.addThumbnail(agent, joinSelector.thumbnail);
    }

    if (joinSelector.works) {
      log.debug("ModelSetBuilder: adding agent", agent.key, "works");
      for (const work of agent.works) {
        log.debug("ModelSetBuilder: adding agent", agent.key, "work", work.key);
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
      log.debug(
        "ModelSetBuilder: collection",
        collection.key,
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.thumbnail) {
      log.debug(
        "ModelSetBuilder: adding collection",
        collection.key,
        " thumbnail"
      );
      if (!this.addThumbnail(collection, joinSelector.thumbnail)) {
        log.debug(
          "ModelSetBuilder: collection",
          collection.key,
          "doesn't have its own thumbnail, adding a collection work thumbnail"
        );
        for (const work of collection.works) {
          if (this.addThumbnail(work, joinSelector.thumbnail)) {
            log.debug(
              "ModelSetBuilder: added work",
              work.key,
              "thumbnail for collection",
              collection.key
            );
            break;
          }
        }
      }
    }

    if (joinSelector.works) {
      log.debug("ModelSetBuilder: adding collection", collection.key, "works");
      for (const work of collection.works) {
        log.debug(
          "ModelSetBuilder: adding collection",
          collection.key,
          "work",
          work.key
        );
        this.addWork(work, joinSelector.works);
      }
    }

    return this;
  }

  addConcept(
    concept: Concept,
    joinSelector?: PropertyValueJoinSelector
  ): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding concept", concept.key);
    this.addModel(concept);

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: concept",
        concept.key,
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.thumbnail) {
      log.debug("ModelSetBuilder: adding concept", concept.key, "thumbnail");
      this.addThumbnail(concept, joinSelector.thumbnail);
    }

    return this;
  }

  addEvent(event: Event, joinSelector?: EventJoinSelector): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding work event", event.key);
    this.addModel(event);

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: work event",
        event.key,
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.thumbnail) {
      log.debug("ModelSetBuilder: adding work event", event.key, "thumbnail");
      this.addThumbnail(event, joinSelector.thumbnail);
    } else {
      log.debug(
        "ModelSetBuilder: not adding work event",
        event.key,
        "thumbnail"
      );
    }

    if (joinSelector.location && event.location) {
      log.debug(
        "ModelSetBuilder: adding work event",
        event.key,
        "location",
        event.location.key
      );
      this.addLocation(event.location);
    }

    if (joinSelector.agents) {
      log.debug("ModelSetBuilder: adding work event", event.key, "agents");
      for (const agent of event.agents) {
        log.debug(
          "ModelSetBuilder: adding work event",
          event.key,
          "agent",
          agent.key
        );
        this.addAgent(agent, joinSelector.agents);
      }
    }

    return this;
  }

  addEvents(
    events: readonly Event[],
    joinSelector?: EventJoinSelector
  ): ModelSetBuilder {
    for (const event of events) {
      this.addEvent(event, joinSelector);
    }
    return this;
  }

  addImage(
    image: Image,
    joinSelector?: {
      agents?: AgentJoinSelector;
    }
  ): ModelSetBuilder {
    log.debug(
      "ModelSetBuilder: adding image",
      image.key,
      "with join selector",
      JSON.stringify(joinSelector)
    );
    this.addModel(image);
    if (joinSelector) {
      log.debug("adding image", image.key, "rights");
      this.addRights(joinSelector, image);
    }
    return this;
  }

  addLicense(license: License): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding license", license.key);
    return this.addModel(license);
  }

  addLocation(location: Location): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding location", location.key);
    return this.addModel(location);
  }

  private addModel<ModelT extends Model>(model: ModelT): ModelSetBuilder {
    const tempStore = new Store();
    model.toRdf(tempStore);
    if (tempStore.size === 0) {
      return this;
    }
    const tempStoreGraphs = tempStore.getGraphs(null, null, null);
    if (
      tempStoreGraphs.every(tempStoreGraph =>
        model.identifiers.some(modelIdentifier =>
          modelIdentifier.equals(tempStoreGraph)
        )
      )
    ) {
      // If the graphs in a model's RDF correspond to the model's identifiers, then add the model
      for (const quad of tempStore) {
        this.store.add(quad);
      }
    } else {
      // Otherwise the model is likely a blank node in another model's graph, don't add it
      log.debug(
        "tried to add a model that belongs to another model's graph:",
        model.key
      );
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
    log.debug("ModelSetBuilder: adding property", property.key);
    this.addModel(property);

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: property",
        property.key,
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.groups) {
      log.debug("ModelSetBuilder: adding property", property.key, "groups");
      for (const propertyGroup of property.groups) {
        log.debug(
          "ModelSetBuilder: adding property",
          property.key,
          "group",
          propertyGroup.key
        );
        this.addPropertyGroup(propertyGroup, joinSelector.groups);
      }
    }

    if (joinSelector.rangeValues) {
      log.debug(
        "ModelSetBuilder: adding property",
        property.key,
        "range values"
      );
      for (const value of property.rangeValues) {
        log.debug(
          "ModelSetBuilder: adding property",
          property.key,
          "range value",
          value.value
        );
        this.addPropertyValue(value, joinSelector.rangeValues);
      }
    }

    if (joinSelector.thumbnail) {
      log.debug("ModelSetBuilder: adding property", property.key, "thumbnail");
      this.addThumbnail(property, joinSelector.thumbnail);
    }

    return this;
  }

  addPropertyGroup(
    propertyGroup: PropertyGroup,
    joinSelector?: PropertyGroupJoinSelector
  ): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding propertyGroup", propertyGroup.key);
    this.addModel(propertyGroup);

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: property group",
        propertyGroup.key,
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.properties) {
      log.debug(
        "ModelSetBuilder: adding property group",
        propertyGroup.key,
        "properties"
      );
      for (const property of propertyGroup.properties) {
        log.debug(
          "ModelSetBuilder: adding property group",
          propertyGroup.key,
          "property",
          property.key
        );
        this.addProperty(property, joinSelector.properties);
      }
    }

    if (joinSelector.thumbnail) {
      log.debug(
        "ModelSetBuilder: adding property group",
        propertyGroup.key,
        "thumbnail"
      );
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
    log.debug("ModelSetBuilder: adding property value", propertyValue.value);

    if (propertyValue instanceof ConceptPropertyValue) {
      log.debug(
        "ModelSetBuilder: adding concept property value",
        propertyValue.concept.key
      );
      this.addConcept(propertyValue.concept, joinSelector);
    }

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: property value",
        propertyValue.value,
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.property) {
      log.debug(
        "ModelSetBuilder: adding property value",
        propertyValue.value,
        "property",
        propertyValue.property.key
      );
      this.addProperty(propertyValue.property, joinSelector.property);
    }

    return this;
  }

  private addRights(joinSelector: RightsJoinSelector, rights: RightsMixin) {
    if (joinSelector.agents) {
      log.debug("ModelSetBuilder: adding rights agents");

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
      log.debug("ModelSetBuilder: adding rights licenses");
      for (const license of rights.licenses) {
        this.addLicense(license);
      }
    }

    if (joinSelector.rightsStatements) {
      log.debug("ModelSetBuilder: adding rights rights statements");
      for (const rightsStatement of rights.rightsStatements) {
        this.addRightsStatement(rightsStatement);
      }
    }
  }

  addRightsStatement(rightsStatement: RightsStatement): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding rights statement", rightsStatement.key);
    return this.addModel(rightsStatement);
  }

  /**
   * Add a thumbnail and the original image it corresponds to.
   * @return true if a thumbnail was added
   */
  private addThumbnail(
    imagesMixin: ImagesMixin & ThumbnailMixin,
    selector: ImageJoinSelector & ThumbnailSelector
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
        this.addImage(image, selector); // Add the original image
        log.debug("ModelSetBuilder: adding thumbnail", thumbnail.key);
        this.addImage(thumbnail, selector);
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
      log.debug("ModelSetBuilder: work", work.key, "has no join selector");
      return this;
    }

    log.debug("ModelSetBuilder: adding work", work.key, "rights");
    this.addRights(joinSelector, work);

    if (work.description) {
      log.debug("ModelSetBuilder: adding work", work.key, "description rights");
      this.addRights(joinSelector, work.description);
    }

    if (joinSelector.events) {
      log.debug("ModelSetBuilder: adding work", work.key, "events");
      for (const event of work.events) {
        log.debug("ModelSetBuilder: adding work", work.key, "event", event.key);
        this.addEvent(event, joinSelector.events);
      }
    }

    if (joinSelector.images) {
      log.debug("ModelSetBuilder: adding work", work.key, "images");
      for (const image of work.images) {
        log.debug("ModelSetBuilder: adding work", work.key, "image", image.key);
        this.addImage(image, joinSelector.images);
      }
    } else if (joinSelector.thumbnail) {
      log.debug("ModelSetBuilder: adding work", work.key, "thumbnail");
      this.addThumbnail(work, joinSelector.thumbnail);
    }

    if (joinSelector.location) {
      if (work.location) {
        log.debug(
          "ModelSetBuilder: adding work",
          work.key,
          "location",
          work.location.location.key
        );
        this.addLocation(work.location.location);
      }
    }

    if (joinSelector.propertyValues) {
      log.debug("ModelSetBuilder: adding work", work.key, "property values");
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

  build(): ModelSet {
    return ModelSetFactory.fromDataset(this.store);
  }
}
