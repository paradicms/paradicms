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

const modelToLoggableString = (model: Model): string => model.iri.value;

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
      log.debug(
        "ModelSetBuilder: ignoring 'OtherAgent'",
        modelToLoggableString(agent)
      );
      return this;
    }

    log.debug("ModelSetBuilder: adding agent", modelToLoggableString(agent));
    this.addModel(agent);

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: agent",
        modelToLoggableString(agent),
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.thumbnail) {
      log.debug(
        "ModelSetBuilder: adding agent",
        modelToLoggableString(agent),
        "thumbnail"
      );
      this.addThumbnail(agent, joinSelector.thumbnail);
    }

    // if (joinSelector.works) {
    //   log.debug("ModelSetBuilder: adding agent", modelToLoggableString(agent), "works");
    //   for (const work of agent.works) {
    //     log.debug("ModelSetBuilder: adding agent", modelToLoggableString(agent), "work", modelToLoggableString(work));
    //     this.addWork(work, joinSelector.works);
    //   }
    // }

    return this;
  }

  addCollection(
    collection: Collection,
    joinSelector?: CollectionJoinSelector
  ): ModelSetBuilder {
    log.debug(
      "ModelSetBuilder: adding collection",
      modelToLoggableString(collection)
    );
    this.addModel(collection);

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: collection",
        modelToLoggableString(collection),
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.description) {
      if (collection.description) {
        log.debug(
          "ModelSetBuilder: adding collection",
          modelToLoggableString(collection),
          "description rights"
        );
        this.addRights(joinSelector.description, collection.description);
      }
    }

    if (joinSelector.thumbnail) {
      log.debug(
        "ModelSetBuilder: adding collection",
        modelToLoggableString(collection),
        " thumbnail"
      );
      if (!this.addThumbnail(collection, joinSelector.thumbnail)) {
        log.debug(
          "ModelSetBuilder: collection",
          modelToLoggableString(collection),
          "doesn't have its own thumbnail, adding a collection work thumbnail"
        );
        for (const work of collection.works) {
          if (this.addThumbnail(work, joinSelector.thumbnail)) {
            log.debug(
              "ModelSetBuilder: added work",
              modelToLoggableString(work),
              "thumbnail for collection",
              modelToLoggableString(collection)
            );
            break;
          }
        }
      }
    }

    if (joinSelector.works) {
      log.debug(
        "ModelSetBuilder: adding collection",
        modelToLoggableString(collection),
        "works"
      );
      for (const work of collection.works) {
        log.debug(
          "ModelSetBuilder: adding collection",
          modelToLoggableString(collection),
          "work",
          modelToLoggableString(work)
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
    log.debug(
      "ModelSetBuilder: adding concept",
      modelToLoggableString(concept)
    );
    this.addModel(concept);

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: concept",
        modelToLoggableString(concept),
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.thumbnail) {
      log.debug(
        "ModelSetBuilder: adding concept",
        modelToLoggableString(concept),
        "thumbnail"
      );
      this.addThumbnail(concept, joinSelector.thumbnail);
    }

    return this;
  }

  addEvent(event: Event, joinSelector?: EventJoinSelector): ModelSetBuilder {
    log.debug("ModelSetBuilder: adding event", modelToLoggableString(event));
    this.addModel(event);

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: event",
        modelToLoggableString(event),
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.agents) {
      log.debug(
        "ModelSetBuilder: adding event",
        modelToLoggableString(event),
        "agents"
      );
      for (const agent of event.agents) {
        log.debug(
          "ModelSetBuilder: adding event",
          modelToLoggableString(event),
          "agent",
          modelToLoggableString(agent)
        );
        this.addAgent(agent, joinSelector.agents);
      }
    }

    if (joinSelector.description) {
      if (event.description) {
        log.debug(
          "ModelSetBuilder: adding event",
          modelToLoggableString(event),
          "description rights"
        );
        this.addRights(joinSelector.description, event.description);
      }
    }

    if (joinSelector.thumbnail) {
      log.debug(
        "ModelSetBuilder: adding event",
        modelToLoggableString(event),
        "thumbnail"
      );
      this.addThumbnail(event, joinSelector.thumbnail);
    } else {
      log.debug(
        "ModelSetBuilder: not adding event",
        modelToLoggableString(event),
        "thumbnail"
      );
    }

    if (joinSelector.location && event.location) {
      log.debug(
        "ModelSetBuilder: adding event",
        modelToLoggableString(event),
        "location",
        modelToLoggableString(event.location)
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
      modelToLoggableString(image),
      "with join selector",
      JSON.stringify(joinSelector)
    );
    this.addModel(image);
    if (joinSelector) {
      log.debug("adding image", modelToLoggableString(image), "rights");
      this.addRights(joinSelector, image);
    }
    return this;
  }

  addLicense(license: License): ModelSetBuilder {
    log.debug(
      "ModelSetBuilder: adding license",
      modelToLoggableString(license)
    );
    return this.addModel(license);
  }

  addLocation(location: Location): ModelSetBuilder {
    log.debug(
      "ModelSetBuilder: adding location",
      modelToLoggableString(location)
    );
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
      tempStoreGraphs.every(tempStoreGraph => model.iri.equals(tempStoreGraph))
    ) {
      // If the graphs in a model's RDF correspond to the model's IRI, then add the model
      for (const quad of tempStore) {
        this.store.add(quad);
      }
    } else {
      // Otherwise the model is likely a blank node in another model's graph, don't add it
      log.debug(
        "tried to add a model that belongs to another model's graph:",
        modelToLoggableString(model)
      );
      return this;
    }

    return this;
  }

  addProperty(
    property: Property,
    joinSelector?: PropertyJoinSelector
  ): ModelSetBuilder {
    log.debug(
      "ModelSetBuilder: adding property",
      modelToLoggableString(property)
    );
    this.addModel(property);

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: property",
        modelToLoggableString(property),
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.groups) {
      log.debug(
        "ModelSetBuilder: adding property",
        modelToLoggableString(property),
        "groups"
      );
      for (const propertyGroup of property.groups) {
        log.debug(
          "ModelSetBuilder: adding property",
          modelToLoggableString(property),
          "group",
          modelToLoggableString(propertyGroup)
        );
        this.addPropertyGroup(propertyGroup, {});
      }
    }

    if (joinSelector.rangeValues) {
      log.debug(
        "ModelSetBuilder: adding property",
        modelToLoggableString(property),
        "range values"
      );
      for (const value of property.rangeValues) {
        log.debug(
          "ModelSetBuilder: adding property",
          modelToLoggableString(property),
          "range value",
          value.value
        );
        this.addPropertyValue(value, joinSelector.rangeValues);
      }
    }

    if (joinSelector.thumbnail) {
      log.debug(
        "ModelSetBuilder: adding property",
        modelToLoggableString(property),
        "thumbnail"
      );
      this.addThumbnail(property, joinSelector.thumbnail);
    }

    return this;
  }

  addPropertyGroup(
    propertyGroup: PropertyGroup,
    joinSelector?: PropertyGroupJoinSelector
  ): ModelSetBuilder {
    log.debug(
      "ModelSetBuilder: adding propertyGroup",
      modelToLoggableString(propertyGroup)
    );
    this.addModel(propertyGroup);

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: property group",
        modelToLoggableString(propertyGroup),
        "has no join selector"
      );
      return this;
    }

    if (joinSelector.properties || joinSelector.propertiesByIri) {
      log.debug(
        "ModelSetBuilder: adding property group",
        modelToLoggableString(propertyGroup),
        "properties"
      );
      for (const property of propertyGroup.properties) {
        const propertyJoinSelector =
          (joinSelector.propertiesByIri
            ? joinSelector.propertiesByIri[property.iri.value]
            : undefined) ?? joinSelector.properties;
        if (!propertyJoinSelector) {
          continue;
        }

        log.debug(
          "ModelSetBuilder: adding property group",
          modelToLoggableString(propertyGroup),
          "property",
          modelToLoggableString(property)
        );
        this.addProperty(property, propertyJoinSelector);
      }
    }

    if (joinSelector.thumbnail) {
      log.debug(
        "ModelSetBuilder: adding property group",
        modelToLoggableString(propertyGroup),
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
        modelToLoggableString(propertyValue.concept)
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
        modelToLoggableString(propertyValue.property)
      );
      this.addProperty(propertyValue.property, {});
    }

    if (joinSelector.propertyGroup) {
      for (const propertyGroup of propertyValue.property.groups) {
        log.debug(
          "ModelSetBuilder: adding property value",
          propertyValue.value,
          "property group",
          modelToLoggableString(propertyGroup)
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
    log.debug(
      "ModelSetBuilder: adding rights statement",
      modelToLoggableString(rightsStatement)
    );
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
          exactDimensions: image.exactDimensions,
          iri: image.iri.value,
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
          modelToLoggableString(image),
          "in order to add thumbnail",
          modelToLoggableString(thumbnail)
        );
        this.addImage(image, selector); // Add the original image
        log.debug(
          "ModelSetBuilder: adding thumbnail",
          modelToLoggableString(thumbnail)
        );
        this.addImage(thumbnail, selector);
        return true;
      }
    }
    if (imagesMixin.images.length > 0) {
      const image = imagesMixin.images[0];
      log.debug(
        "ModelSetBuilder: adding an original image",
        modelToLoggableString(image),
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
    log.debug("ModelSetBuilder: adding work", modelToLoggableString(work));
    // console.time("addWork " + modelToLoggableString(work));

    // console.time("addWork addModel " + modelToLoggableString(work));
    this.addModel(work);
    // console.timeEnd("addWork addModel " + modelToLoggableString(work));

    if (!joinSelector) {
      log.debug(
        "ModelSetBuilder: work",
        modelToLoggableString(work),
        "has no join selector"
      );
      // console.timeEnd("addWork " + modelToLoggableString(work));
      return this;
    }

    log.debug(
      "ModelSetBuilder: adding work",
      modelToLoggableString(work),
      "rights"
    );
    // console.time("addWork agents " + modelToLoggableString(work));
    if (joinSelector.agents) {
      for (const agents of [work.contributors, work.creators]) {
        for (const agent of agents) {
          this.addAgent(agent, joinSelector?.agents);
        }
      }
    }
    // console.timeEnd("addWork agents " + modelToLoggableString(work));

    // console.time("addWork description " + modelToLoggableString(work));
    if (joinSelector.description) {
      if (work.description) {
        log.debug(
          "ModelSetBuilder: adding work",
          modelToLoggableString(work),
          "description rights"
        );
        this.addRights(joinSelector.description, work.description);
      }
    }
    // console.timeEnd("addWork description " + modelToLoggableString(work));

    // console.time("addWork events " + modelToLoggableString(work));
    if (joinSelector.events) {
      log.debug(
        "ModelSetBuilder: adding work",
        modelToLoggableString(work),
        "events"
      );
      for (const event of work.events) {
        log.debug(
          "ModelSetBuilder: adding work",
          modelToLoggableString(work),
          "event",
          modelToLoggableString(event)
        );
        this.addEvent(event, joinSelector.events);
      }
    }
    // console.timeEnd("addWork events " + modelToLoggableString(work));

    // console.time("addWork images " + modelToLoggableString(work));
    if (joinSelector.images) {
      log.debug(
        "ModelSetBuilder: adding work",
        modelToLoggableString(work),
        "images"
      );
      for (const image of work.images) {
        log.debug(
          "ModelSetBuilder: adding work",
          modelToLoggableString(work),
          "image",
          modelToLoggableString(image)
        );
        this.addImage(image, joinSelector.images);
      }
    } else if (joinSelector.thumbnail) {
      log.debug(
        "ModelSetBuilder: adding work",
        modelToLoggableString(work),
        "thumbnail"
      );
      this.addThumbnail(work, joinSelector.thumbnail);
    }
    // console.timeEnd("addWork images " + modelToLoggableString(work));

    // console.time("addWork location " + modelToLoggableString(work));
    if (joinSelector.location) {
      if (work.location) {
        log.debug(
          "ModelSetBuilder: adding work",
          modelToLoggableString(work),
          "location",
          modelToLoggableString(work.location.location)
        );
        this.addLocation(work.location.location);
      }
    }
    // console.timeEnd("addWork location " + modelToLoggableString(work));

    // console.time("addWork property values " + modelToLoggableString(work));
    if (joinSelector.propertyValues) {
      log.debug(
        "ModelSetBuilder: adding work",
        modelToLoggableString(work),
        "property values"
      );
      for (const propertyValue of work.propertyValues) {
        this.addPropertyValue(propertyValue, joinSelector.propertyValues);
      }
    }
    // console.timeEnd("addWork property values " + modelToLoggableString(work));

    // console.timeEnd("addWork " + modelToLoggableString(work));

    return this;
  }

  build(): ModelSet {
    return ModelSetFactory.fromDataset(this.store);
  }
}
