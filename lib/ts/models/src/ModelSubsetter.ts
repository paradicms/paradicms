import {ModelSet} from "./ModelSet";
import {Rights} from "./Rights";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {Collection} from "./Collection";
import {ModelSetBuilder} from "./ModelSetBuilder";
import {WorkJoinSelector} from "./WorkJoinSelector";
import {Work} from "./Work";
import {Image} from "Image";
import {Agent} from "./Agent";
import {Text} from "./Text";
import {AgentJoinSelector} from "./AgentJoinSelector";
import {selectThumbnail} from "./selectThumbnail";
import {ConceptJoinSelector} from "./ConceptJoinSelector";
import {Concept} from "./Concept";
import {WorkCreation} from "./WorkCreation";
import {WorkEvent} from "./WorkEvent";
import {WorkEventJoinSelector} from "./WorkEventJoinSelector";
import {visitWorkEvent} from "./WorkEventVisitor";
import {WorkOpening} from "./WorkOpening";
import {WorkClosing} from "./WorkClosing";

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
  private readonly workPropertyUris?: readonly string[];

  constructor(kwds: {
    completeModelSet: ModelSet;
    workPropertyUris?: readonly string[];
  }) {
    this.completeModelSet = kwds.completeModelSet;
    this.workPropertyUris = kwds.workPropertyUris;
  }

  // Use the builder pattern internally rather than a more functional algorithm, such as merging modelSets,
  // which was the initial implementation
  private addAgentModelSet(
    agent: Agent,
    builder: ModelSetBuilder,
    joinSelector: AgentJoinSelector
  ): ModelSetBuilder {
    builder.addAgent(agent);

    if (joinSelector.thumbnail) {
      const thumbnailImage = this.completeModelSet
        .agentByUri(agent.uri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImageModelSet({}, builder, thumbnailImage);
      }
    }

    if (joinSelector.works) {
      this.addWorkModelSets(
        builder,
        this.completeModelSet.agentWorks(agent.uri),
        joinSelector.works
      );
    }

    return builder;
  }

  private addCollectionModelSet(
    builder: ModelSetBuilder,
    collection: Collection,
    joinSelector: CollectionJoinSelector
  ): ModelSetBuilder {
    builder.addCollection(collection);

    if (joinSelector.thumbnail) {
      const thumbnailImage = this.completeModelSet
        .collectionByUri(collection.uri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImageModelSet({}, builder, thumbnailImage);
        if (thumbnailImage.depictsUri !== collection.uri) {
          // The thumbnail either depicts the collection or one of the collection's works.
          // If the latter case we need to include the work in the modelSet.
          builder.addWork(
            this.completeModelSet.workByUri(thumbnailImage.depictsUri)
          );
        }
      }
    }

    if (joinSelector.works) {
      this.addWorkModelSets(
        builder,
        this.completeModelSet.collectionWorks(collection.uri),
        joinSelector.works
      );
    }

    return builder;
  }

  private addImageModelSet(
    agentJoinSelector: AgentJoinSelector,
    builder: ModelSetBuilder,
    image: Image
  ): ModelSetBuilder {
    builder.addImage(image);
    this.addRightsModelSet(agentJoinSelector, builder, image.rights);
    return builder;
  }

  private addConceptsModelSet(
    builder: ModelSetBuilder,
    concepts: readonly Concept[],
    joinSelector: ConceptJoinSelector
  ) {
    builder.addConcepts(concepts);
    if (joinSelector.thumbnail) {
      for (const concept of concepts) {
        const thumbnail = selectThumbnail(
          this.completeModelSet.imagesByDepictsUri(concept.uri),
          joinSelector.thumbnail
        );
        if (thumbnail) {
          this.addImageModelSet({}, builder, thumbnail);
        }
      }
    }
  }

  private addWorkModelSet(
    builder: ModelSetBuilder,
    work: Work,
    joinSelector: WorkJoinSelector
  ): ModelSetBuilder {
    return this.addWorkModelSets(builder, [work], joinSelector);
  }

  private addWorkModelSets(
    builder: ModelSetBuilder,
    works: readonly Work[],
    joinSelector: WorkJoinSelector
  ): ModelSetBuilder {
    const collectionUris = joinSelector.collections
      ? new Set<string>()
      : undefined;
    const conceptsByUri: {[index: string]: Concept} = {};

    for (const work of works) {
      builder.addWork(work);

      // Work ModelSets always include rights
      this.addRightsModelSet(joinSelector.agents ?? {}, builder, work.rights);

      {
        const description = work.description;
        if (description && description instanceof Text) {
          this.addRightsModelSet(
            joinSelector.agents ?? {},
            builder,
            description.rights
          );
        }
      }

      if (joinSelector.allImages) {
        for (const image of this.completeModelSet.imagesByDepictsUri(
          work.uri
        )) {
          this.addImageModelSet(joinSelector.agents ?? {}, builder, image);
        }
      } else if (joinSelector.thumbnail) {
        const thumbnailImage = this.completeModelSet
          .workByUri(work.uri)
          .thumbnail(joinSelector.thumbnail);
        if (thumbnailImage) {
          this.addImageModelSet(
            joinSelector.agents ?? {},
            builder,
            thumbnailImage
          );
        }
      }

      if (joinSelector.events) {
        for (const event of work.events) {
          this.addWorkEventModelSet(builder, joinSelector.events, event);
        }
      }

      if (collectionUris) {
        for (const collectionUri of work.collectionUris) {
          collectionUris.add(collectionUri);
        }
      }

      if (joinSelector.propertyConcepts && this.workPropertyUris) {
        for (const workPropertyUri of this.workPropertyUris) {
          for (const concept of work.propertyConcepts(workPropertyUri)) {
            if (!conceptsByUri[concept.uri]) {
              conceptsByUri[concept.uri] = concept;
            }
          }
        }
      }
    }

    if (collectionUris) {
      for (const collectionUri of collectionUris) {
        this.addCollectionModelSet(
          builder,
          this.completeModelSet.collectionByUri(collectionUri),
          joinSelector.collections ?? {}
        );
      }
    }

    if (joinSelector.propertyConcepts) {
      this.addConceptsModelSet(
        builder,
        Object.keys(conceptsByUri).map(uri => conceptsByUri[uri]),
        joinSelector.propertyConcepts
      );
    }

    return builder;
  }

  private addRightsModelSet(
    agentJoinSelector: AgentJoinSelector,
    builder: ModelSetBuilder,
    rights: Rights | null
  ): ModelSetBuilder {
    if (!rights) {
      return builder;
    }

    for (const agent of rights.agents) {
      this.addAgentModelSet(agent, builder, agentJoinSelector);
    }

    const license = rights.license;
    if (license && typeof license !== "string") {
      builder.addLicense(license);
    }

    const rightsStatement = rights.statement;
    if (rightsStatement && typeof rightsStatement !== "string") {
      builder.addRightsStatement(rightsStatement);
    }

    return builder;
  }

  private addWorkEventModelSet(
    builder: ModelSetBuilder,
    joinSelector: WorkEventJoinSelector,
    workEvent: WorkEvent
  ): ModelSetBuilder {
    builder.addEvent(workEvent);
    if (joinSelector.work) {
      this.addWorkModelSet(builder, workEvent.work, joinSelector.work);
    }

    const self = this;
    return visitWorkEvent(workEvent, {
      visitWorkClosing(workClosing: WorkClosing): ModelSetBuilder {
        return builder;
      },
      visitWorkCreation(workCreation: WorkCreation): ModelSetBuilder {
        if (joinSelector.agents) {
          for (const agent of workCreation.agents) {
            self.addAgentModelSet(agent, builder, joinSelector.agents);
          }
        }
        return builder;
      },
      visitWorkOpening(workOpening: WorkOpening): ModelSetBuilder {
        return builder;
      },
    });
  }

  agentsModelSet(
    agents: readonly Agent[],
    joinSelector?: AgentJoinSelector
  ): ModelSet {
    const builder = new ModelSetBuilder();
    for (const agent of agents) {
      this.addAgentModelSet(agent, builder, joinSelector ?? {});
    }
    return builder.build();
  }

  collectionModelSet(
    collection: Collection,
    joinSelector?: CollectionJoinSelector
  ): ModelSet {
    return this.addCollectionModelSet(
      new ModelSetBuilder(),
      collection,
      joinSelector ?? {}
    ).build();
  }

  workModelSet(work: Work, joinSelector?: WorkJoinSelector): ModelSet {
    return this.addWorkModelSet(
      new ModelSetBuilder(),
      work,
      joinSelector ?? {}
    ).build();
  }

  workEventsModelSet(
    workEvents: readonly WorkEvent[],
    joinSelector?: WorkEventJoinSelector
  ): ModelSet {
    const builder = new ModelSetBuilder();
    for (const workEvent of workEvents) {
      this.addWorkEventModelSet(builder, joinSelector ?? {}, workEvent);
    }
    return builder.build();
  }

  worksModelSet(
    works: readonly Work[],
    joinSelector?: WorkJoinSelector
  ): ModelSet {
    const builder = new ModelSetBuilder();
    this.addWorkModelSets(builder, works, joinSelector ?? {});
    return builder.build();
  }
}
