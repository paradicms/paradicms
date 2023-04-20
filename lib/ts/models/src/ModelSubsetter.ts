import invariant from "ts-invariant";
import {Agent} from "./Agent";
import {AgentJoinSelector} from "./AgentJoinSelector";
import {Collection} from "./Collection";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {Concept} from "./Concept";
import {ConceptJoinSelector} from "./ConceptJoinSelector";
import {ConceptPropertyValue} from "./ConceptPropertyValue";
import {Image} from "./Image";
import {Location} from "./Location";
import {ModelSet} from "./ModelSet";
import {ModelSetBuilder} from "./ModelSetBuilder";
import {RightsMixin} from "./RightsMixin";
import {Work} from "./Work";
import {WorkEventJoinSelector} from "./WorkEventJoinSelector";
import {WorkJoinSelector} from "./WorkJoinSelector";
import {selectThumbnail} from "./selectThumbnail";
import {WorkEventUnion} from "./WorkEventUnion";

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
    agent: Agent,
    joinSelector: AgentJoinSelector
  ): void {
    this.modelSetBuilder.addAgent(agent);

    invariant(agent.uri, "can only add named agents");

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

  private addConceptsModelSet(
    concepts: readonly Concept[],
    joinSelector: ConceptJoinSelector
  ): void {
    this.modelSetBuilder.addConcepts(concepts);
    if (joinSelector.thumbnail) {
      for (const concept of concepts) {
        const thumbnail = selectThumbnail(
          this.completeModelSet.imagesByDepictsUri(concept.uri),
          joinSelector.thumbnail
        );
        if (thumbnail) {
          this.addImageModelSet({}, thumbnail);
        }
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

  private addRightsModelSet(
    agentJoinSelector: AgentJoinSelector,
    rights: RightsMixin | null
  ): void {
    if (!rights) {
      return;
    }

    for (const agents of [
      rights.contributorAgents,
      rights.creatorAgents,
      rights.rightsHolderAgents,
    ]) {
      for (const agent of agents) {
        this.addAgentModelSet(agent, agentJoinSelector);
      }
    }

    const license = rights.license;
    if (license && typeof license !== "string") {
      this.modelSetBuilder.addLicense(license);
    }

    const rightsStatement = rights.rightsStatement;
    if (rightsStatement && typeof rightsStatement !== "string") {
      this.modelSetBuilder.addRightsStatement(rightsStatement);
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

      {
        const description = work.description;
        if (description && typeof description !== "string") {
          this.addRightsModelSet(joinSelector.agents ?? {}, description);
        }
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
        for (const collectionUri of work.collectionUris) {
          collectionUris.add(collectionUri);
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
        // Add all properties
        this.modelSetBuilder.addProperties(this.completeModelSet.properties);
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
      this.addConceptsModelSet(
        Object.keys(conceptsByUri).map(uri => conceptsByUri[uri]),
        joinSelector.propertyValues
      );
    }
  }

  private addWorkEventModelSet(
    joinSelector: WorkEventJoinSelector,
    workEvent: WorkEventUnion
  ): void {
    this.modelSetBuilder.addEvent(workEvent);

    if (
      joinSelector.location &&
      workEvent.location &&
      typeof workEvent.location !== "string"
    ) {
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
    agents: readonly Agent[],
    joinSelector?: AgentJoinSelector
  ): ModelSetBuilder {
    for (const agent of agents) {
      this.addAgentModelSet(agent, joinSelector ?? {});
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
