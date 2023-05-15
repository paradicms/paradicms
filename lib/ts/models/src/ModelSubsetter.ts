import {AgentJoinSelector} from "./AgentJoinSelector";
import {AgentUnion} from "./AgentUnion";
import {Collection} from "./Collection";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {Concept} from "./Concept";
import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";
import {ConceptPropertyValue} from "./ConceptPropertyValue";
import {Image} from "./Image";
import {Location} from "./Location";
import {ModelSet} from "./ModelSet";
import {ModelSetBuilder} from "./ModelSetBuilder";
import {RightsMixin} from "./RightsMixin";
import {Work} from "./Work";
import {WorkEventJoinSelector} from "./WorkEventJoinSelector";
import {WorkEventUnion} from "./WorkEventUnion";
import {WorkJoinSelector} from "./WorkJoinSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Property} from "./Property";
import {PropertyJoinSelector} from "./PropertyJoinSelector";
import {PropertyGroupJoinSelector} from "./PropertyGroupJoinSelector";
import {PropertyGroup} from "./PropertyGroup";
import {PropertyValue} from "./PropertyValue";

/**
 * Subset a ModelSet to reduce the amount of data passed between getStaticProps and the component.
 *
 * Re: join selectors. A caller can select which connected models to include in a ModelSet.
 * For example, return a collection's thumbnail along with the collection.
 * An undefined joinSelector means don't return any connected models.
 * An empty joinSelector ({}) means return the connected models themselves but none of their connected models (i.e., no recursion).
 * For example, a joinSelector on Collection with works: {} will return all of the Work instances associated with that collection,
 * but no models connected to the Works (i.e., their Agents).
 */
export class ModelSubsetter {
  private readonly completeModelSet: ModelSet;
  private readonly modelSetBuilder: ModelSetBuilder;

  constructor(kwds: {completeModelSet: ModelSet}) {
    this.completeModelSet = kwds.completeModelSet;
    this.modelSetBuilder = new ModelSetBuilder();
  }

  // Use the this.modelSetBuilder pattern internally rather than a more functional algorithm, such as merging modelSets,
  // which was the initial implementation
  private addAgentModelSet(
    agent: AgentUnion,
    joinSelector: AgentJoinSelector
  ): void {
    this.modelSetBuilder.addAgent(agent);

    if (!agent.uri) {
      return;
    }

    if (joinSelector.thumbnail) {
      const thumbnailImage = this.completeModelSet
        .agentByUri(agent.uri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImageModelSet({}, thumbnailImage);
      }
    }

    if (joinSelector.works) {
      this.addWorkModelSets(
        this.completeModelSet.agentWorks(agent.uri),
        joinSelector.works
      );
    }
  }

  private addCollectionModelSet(
    collection: Collection,
    joinSelector: CollectionJoinSelector
  ): void {
    this.modelSetBuilder.addCollection(collection);

    if (joinSelector.thumbnail) {
      const thumbnailImage = this.completeModelSet
        .collectionByUri(collection.uri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImageModelSet({}, thumbnailImage);
        if (thumbnailImage.depictsUri !== collection.uri) {
          // The thumbnail either depicts the collection or one of the collection's works.
          // If the latter case we need to include the work in the modelSet.
          this.modelSetBuilder.addWork(
            this.completeModelSet.workByUri(thumbnailImage.depictsUri)
          );
        }
      }
    }

    if (joinSelector.works) {
      this.addWorkModelSets(
        this.completeModelSet.collectionWorks(collection.uri),
        joinSelector.works
      );
    }
  }

  private addConceptModelSet(
    concept: Concept,
    joinSelector: PropertyValueJoinSelector
  ): void {
    this.modelSetBuilder.addConcept(concept);
    if (joinSelector.thumbnail) {
      const thumbnail = selectThumbnail(
        this.completeModelSet.imagesByDepictsUri(concept.uri),
        joinSelector.thumbnail
      );
      if (thumbnail) {
        this.addImageModelSet({}, thumbnail);
      }
    }
  }

  private addImageModelSet(
    agentJoinSelector: AgentJoinSelector,
    image: Image
  ): void {
    this.modelSetBuilder.addImage(image);
    this.addRightsModelSet(agentJoinSelector, image);
  }

  private addLocationModelSet(location: Location): void {
    if (!location.uri) {
      return;
    }
    this.modelSetBuilder.addLocation(location);
  }

  private addPropertyGroupModelSet(
    propertyGroup: PropertyGroup,
    propertyGroupJoinSelector: PropertyGroupJoinSelector
  ) {
    this.modelSetBuilder.addPropertyGroup(propertyGroup);

    if (propertyGroupJoinSelector.properties) {
      for (const property of propertyGroup.properties) {
        this.addPropertyModelSet(
          property,
          propertyGroupJoinSelector.properties
        );
      }
    }

    if (propertyGroupJoinSelector.thumbnail) {
      const thumbnailImage = propertyGroup.thumbnail(
        propertyGroupJoinSelector.thumbnail
      );
      if (thumbnailImage) {
        this.addImageModelSet({}, thumbnailImage);
      }
    }
  }

  private addPropertyModelSet(
    property: Property,
    propertyJoinSelector: PropertyJoinSelector
  ) {
    this.modelSetBuilder.addProperty(property);

    if (propertyJoinSelector.groups) {
      for (const propertyGroup of property.groups) {
        this.addPropertyGroupModelSet(
          propertyGroup,
          propertyJoinSelector.groups
        );
      }
    }

    if (propertyJoinSelector.rangeValues) {
      for (const value of property.rangeValues) {
        this.addPropertyValueModelSet(value, propertyJoinSelector.rangeValues);
      }
    }
  }

  private addPropertyValueModelSet(
    propertyValue: PropertyValue,
    propertyValueJoinSelector: PropertyValueJoinSelector
  ) {
    if (propertyValue instanceof ConceptPropertyValue) {
      this.addConceptModelSet(propertyValue.concept, propertyValueJoinSelector);
    }
  }

  private addRightsModelSet(
    agentJoinSelector: AgentJoinSelector,
    rights: RightsMixin | null
  ): void {
    if (!rights) {
      return;
    }

    for (const agents of [
      rights.contributors,
      rights.creators,
      rights.rightsHolders,
    ]) {
      for (const agent of agents) {
        this.addAgentModelSet(agent, agentJoinSelector);
      }
    }

    if (rights.license) {
      this.modelSetBuilder.addLicense(rights.license);
    }

    if (rights.rightsStatement) {
      this.modelSetBuilder.addRightsStatement(rights.rightsStatement);
    }
  }

  private addWorkModelSets(
    works: readonly Work[],
    joinSelector: WorkJoinSelector
  ): void {
    const collectionUris = joinSelector.collections
      ? new Set<string>()
      : undefined;
    const conceptsByUri: {[index: string]: Concept} = {};

    for (const work of works) {
      this.modelSetBuilder.addWork(work);

      // Work ModelSets always include rights
      this.addRightsModelSet(joinSelector.agents ?? {}, work);

      if (work.description) {
        this.addRightsModelSet(joinSelector.agents ?? {}, work.description);
      }

      if (joinSelector.allImages) {
        for (const image of this.completeModelSet.imagesByDepictsUri(
          work.uri
        )) {
          this.addImageModelSet(joinSelector.agents ?? {}, image);
        }
      } else if (joinSelector.thumbnail) {
        const thumbnailImage = this.completeModelSet
          .workByUri(work.uri)
          .thumbnail(joinSelector.thumbnail);
        if (thumbnailImage) {
          this.addImageModelSet(joinSelector.agents ?? {}, thumbnailImage);
        }
      }

      if (collectionUris) {
        for (const collection of work.collections) {
          collectionUris.add(collection.uri);
        }
      }

      if (joinSelector.events) {
        for (const event of work.events) {
          this.addWorkEventModelSet(joinSelector.events, event);
        }
      }

      if (joinSelector.location) {
        if (work.location) {
          this.addLocationModelSet(work.location.location);
        }
      }

      if (joinSelector.properties) {
        for (const property of this.completeModelSet.properties) {
          this.addPropertyModelSet(property, joinSelector.properties);
        }
      }

      if (joinSelector.propertyValues) {
        for (const property of this.completeModelSet.properties) {
          for (const propertyValue of work.propertyValues(property.uri)) {
            if (propertyValue instanceof ConceptPropertyValue) {
              if (!conceptsByUri[propertyValue.concept.uri]) {
                conceptsByUri[propertyValue.concept.uri] =
                  propertyValue.concept;
              }
            }
          }
        }
      }
    }

    if (collectionUris) {
      for (const collectionUri of collectionUris) {
        this.addCollectionModelSet(
          this.completeModelSet.collectionByUri(collectionUri),
          joinSelector.collections ?? {}
        );
      }
    }

    if (joinSelector.propertyValues) {
      for (const conceptUri in conceptsByUri) {
        this.addConceptModelSet(
          conceptsByUri[conceptUri],
          joinSelector.propertyValues
        );
      }
    }
  }

  private addWorkEventModelSet(
    joinSelector: WorkEventJoinSelector,
    workEvent: WorkEventUnion
  ): void {
    this.modelSetBuilder.addEvent(workEvent);

    if (joinSelector.location && workEvent.location) {
      this.addLocationModelSet(workEvent.location);
    }
    if (joinSelector.work) {
      this.addWorkModelSets([workEvent.work], joinSelector.work);
    }

    switch (workEvent.type) {
      case "WorkCreation": {
        if (joinSelector.agents) {
          for (const agent of workEvent.agents) {
            this.addAgentModelSet(agent, joinSelector.agents);
          }
        }
        break;
      }
    }
  }

  agentsModelSet(
    agents: readonly AgentUnion[],
    joinSelector?: AgentJoinSelector
  ): ModelSetBuilder {
    for (const agent of agents) {
      this.addAgentModelSet(agent, joinSelector ?? {});
    }
    return this.modelSetBuilder;
  }

  propertyGroupsModelSet(
    propertyGroups: readonly PropertyGroup[],
    joinSelector?: PropertyGroupJoinSelector
  ): ModelSetBuilder {
    for (const propertyGroup of propertyGroups) {
      this.addPropertyGroupModelSet(propertyGroup, joinSelector ?? {});
    }
    return this.modelSetBuilder;
  }

  workModelSet(work: Work, joinSelector?: WorkJoinSelector): ModelSetBuilder {
    this.addWorkModelSets([work], joinSelector ?? {});
    return this.modelSetBuilder;
  }

  workEventsModelSet(
    workEvents: readonly WorkEventUnion[],
    joinSelector?: WorkEventJoinSelector
  ): ModelSetBuilder {
    for (const workEvent of workEvents) {
      this.addWorkEventModelSet(joinSelector ?? {}, workEvent);
    }
    return this.modelSetBuilder;
  }

  worksModelSet(
    works: readonly Work[],
    joinSelector?: WorkJoinSelector
  ): ModelSetBuilder {
    this.addWorkModelSets(works, joinSelector ?? {});
    return this.modelSetBuilder;
  }
}
