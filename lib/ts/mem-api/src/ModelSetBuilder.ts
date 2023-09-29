import {
  AgentJoinSelector,
  CollectionJoinSelector,
  EventJoinSelector,
  ImageJoinSelector,
  PropertyGroupJoinSelector,
  PropertyJoinSelector,
  PropertyValueJoinSelector,
  RightsJoinSelector,
  WorkJoinSelector,
} from "@paradicms/api";
import {
  Agent,
  Collection,
  Concept,
  Event,
  Image,
  ImagesMixin,
  License,
  Location,
  Model,
  ModelSet,
  ModelSetFactory,
  Property,
  PropertyGroup,
  PropertyValue,
  RightsMixin,
  RightsStatement,
  ThumbnailMixin,
  ThumbnailSelector,
  Work,
} from "@paradicms/models";
import {Store} from "@paradicms/rdf";
import log from "loglevel";

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
  private readonly store: Store = new Store();

  addAgent(agent: Agent, joinSelector?: AgentJoinSelector): ModelSetBuilder {
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

    // if (joinSelector.works) {
    //   log.debug("ModelSetBuilder: adding agent", agent.key, "works");
    //   for (const work of agent.works) {
    //     log.debug("ModelSetBuilder: adding agent", agent.key, "work", work.key);
    //     this.addWork(work, joinSelector.works);
    //   }
    // }

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

    if (joinSelector.description) {
      if (collection.description) {
        log.debug(
          "ModelSetBuilder: adding collection",
          collection.key,
          "description rights"
        );
        this.addRights(joinSelector.description, collection.description);
      }
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
    log.debug("ModelSetBuilder: adding event", event.key);
    this.addModel(event);

    if (!joinSelector) {
      log.debug("ModelSetBuilder: event", event.key, "has no join selector");
      return this;
    }

    if (joinSelector.agents) {
      log.debug("ModelSetBuilder: adding event", event.key, "agents");
      for (const agent of event.agents) {
        log.debug(
          "ModelSetBuilder: adding event",
          event.key,
          "agent",
          agent.key
        );
        this.addAgent(agent, joinSelector.agents);
      }
    }

    if (joinSelector.description) {
      if (event.description) {
        log.debug(
          "ModelSetBuilder: adding event",
          event.key,
          "description rights"
        );
        this.addRights(joinSelector.description, event.description);
      }
    }

    if (joinSelector.thumbnail) {
      log.debug("ModelSetBuilder: adding event", event.key, "thumbnail");
      this.addThumbnail(event, joinSelector.thumbnail);
    } else {
      log.debug("ModelSetBuilder: not adding event", event.key, "thumbnail");
    }

    if (joinSelector.location && event.location) {
      log.debug(
        "ModelSetBuilder: adding event",
        event.key,
        "location",
        event.location.key
      );
      this.addLocation(event.location);
    }

    return this;
  }

  addImage(
    image: Image,
    joinSelector?: {
      agents?: boolean;
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
      return this;
    }

    for (const dependency of model.dependencies) {
      log.trace("adding model", model.key, "dependency", dependency.key);
      this.addModel(dependency);
    }

    return this;
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
        this.addPropertyGroup(propertyGroup, {});
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

    if (joinSelector.properties || joinSelector.propertiesByKey) {
      log.debug(
        "ModelSetBuilder: adding property group",
        propertyGroup.key,
        "properties"
      );
      for (const property of propertyGroup.properties) {
        const propertyJoinSelector =
          (joinSelector.propertiesByKey
            ? joinSelector.propertiesByKey[property.key]
            : undefined) ?? joinSelector.properties;
        if (!propertyJoinSelector) {
          continue;
        }

        log.debug(
          "ModelSetBuilder: adding property group",
          propertyGroup.key,
          "property",
          property.key
        );
        this.addProperty(property, propertyJoinSelector);
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

  addPropertyValue(
    propertyValue: PropertyValue,
    joinSelector?: PropertyValueJoinSelector
  ): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding property value", propertyValue.value);

    if (propertyValue.type === "Concept") {
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
      this.addProperty(propertyValue.property, {});
    }

    if (joinSelector.propertyGroup) {
      for (const propertyGroup of propertyValue.property.groups) {
        log.debug(
          "ModelSetBuilder: adding property value",
          propertyValue.value,
          "property group",
          propertyGroup.key
        );
        this.addPropertyGroup(propertyGroup, {});
      }
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
          this.addAgent(agent, {});
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
      const thumbnail = image.thumbnail(selector);
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
    if (imagesMixin.images.length > 0) {
      const image = imagesMixin.images[0];
      log.debug(
        "ModelSetBuilder: adding an original image",
        image.key,
        "as a thumbnail"
      );
      this.addImage(image, selector);
      return true;
    }
    log.debug(
      "ModelSetBuilder: no thumbnail found for selector",
      JSON.stringify(selector)
    );
    return false;
  }

  addWork(work: Work, joinSelector?: WorkJoinSelector): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding work", work.key);
    console.time("addWork " + work.key);
    this.addModel(work);

    if (!joinSelector) {
      log.debug("ModelSetBuilder: work", work.key, "has no join selector");
      console.timeEnd("addWork " + work.key);
      return this;
    }

    log.debug("ModelSetBuilder: adding work", work.key, "rights");
    console.time("addWork agents " + work.key);
    if (joinSelector.agents) {
      for (const agents of [work.contributors, work.creators]) {
        for (const agent of agents) {
          this.addAgent(agent, joinSelector?.agents);
        }
      }
    }
    console.timeEnd("addWork agents " + work.key);

    if (joinSelector.description) {
      if (work.description) {
        log.debug(
          "ModelSetBuilder: adding work",
          work.key,
          "description rights"
        );
        this.addRights(joinSelector.description, work.description);
      }
    }

    if (joinSelector.events) {
      log.debug("ModelSetBuilder: adding work", work.key, "events");
      for (const event of work.events) {
        log.debug("ModelSetBuilder: adding work", work.key, "event", event.key);
        this.addEvent(event, joinSelector.events);
      }
    }

    console.time("addWork images " + work.key);
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
    console.timeEnd("addWork images " + work.key);

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

    console.time("addWork property values " + work.key);
    if (joinSelector.propertyValues) {
      log.debug("ModelSetBuilder: adding work", work.key, "property values");
      for (const propertyValue of work.propertyValues) {
        this.addPropertyValue(propertyValue, joinSelector.propertyValues);
      }
    }
    console.timeEnd("addWork property values " + work.key);

    console.timeEnd("addWork " + work.key);

    return this;
  }

  build(): ModelSet {
    return ModelSetFactory.fromDataset(this.store);
  }
}
