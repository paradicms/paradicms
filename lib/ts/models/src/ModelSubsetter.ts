import {ModelSet} from "./ModelSet";
import {Rights} from "./Rights";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {InstitutionJoinSelector} from "./InstitutionJoinSelector";
import {Collection} from "./Collection";
import {ModelSetBuilder} from "./ModelSetBuilder";
import {Institution} from "./Institution";
import {WorkJoinSelector} from "./WorkJoinSelector";
import {Work} from "./Work";
import {Image} from "Image";
import {Agent} from "./Agent";
import {Text} from "./Text";
import {AgentJoinSelector} from "./AgentJoinSelector";
import {selectThumbnail} from "./selectThumbnail";
import {NamedValueJoinSelector} from "./NamedValueJoinSelector";
import {NamedValue} from "./NamedValue";
import {WorkCreation} from "./WorkCreation";
import {WorkEvent} from "./WorkEvent";
import {WorkEventJoinSelector} from "./WorkEventJoinSelector";
import {visitWorkEvent} from "./WorkEventVisitor";

/**
 * Subset a ModelSet to reduce the amount of data passed between getStaticProps and the component.
 *
 * Re: join selectors. A caller can select which connected models to include in a ModelSet.
 * For example, return a collection's institution along with the collection.
 * An undefined joinSelector means don't return any connected models.
 * An empty joinSelector ({}) means return the connected models themselves but none of their connected models (i.e., no recursion).
 * For example, a joinSelector on Institution with collections: {} will return all of the Collection instances associated with that Institution,
 * but no models connected to the Collections (i.e., their Works).
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

    if (joinSelector.institution) {
      this.addInstitutionModelSet(
        builder,
        this.completeModelSet.institutionByUri(collection.institutionUri),
        joinSelector.institution
      );
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

  private addInstitutionModelSet(
    builder: ModelSetBuilder,
    institution: Institution,
    joinSelector: InstitutionJoinSelector
  ): ModelSetBuilder {
    builder.addInstitution(institution);
    this.addRightsModelSet({}, builder, institution.rights);

    if (joinSelector.thumbnail) {
      const thumbnailImage = this.completeModelSet
        .institutionByUri(institution.uri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImageModelSet({}, builder, thumbnailImage);
        if (thumbnailImage.depictsUri !== institution.uri) {
          // The thumbnail either depicts the institution, one of the institution's collections, or one of the institution's works.
          // In the latter cases we need to include the depicted collection or work
          // TODO: this should call an IndexedModelSet.modelByUri(depictsUri), then use the NamedModel discriminated union to include the model in the right array
          try {
            builder.addWork(
              this.completeModelSet.workByUri(thumbnailImage.depictsUri)
            );
          } catch (e) {
            builder.addCollection(
              this.completeModelSet.collectionByUri(thumbnailImage.depictsUri)
            );
          }
        }
      }
    }

    if (joinSelector.collections) {
      for (const collection of this.completeModelSet.institutionCollections(
        institution.uri
      )) {
        this.addCollectionModelSet(
          builder,
          collection,
          joinSelector.collections
        );
      }
    }

    if (joinSelector.works) {
      this.addWorkModelSets(
        builder,
        this.completeModelSet.institutionWorks(institution.uri),
        joinSelector.works
      );
    }

    return builder;
  }

  private addNamedValuesModelSet(
    builder: ModelSetBuilder,
    namedValues: readonly NamedValue[],
    joinSelector: NamedValueJoinSelector
  ) {
    builder.addNamedValues(namedValues);
    if (joinSelector.thumbnail) {
      for (const namedValue of namedValues) {
        const thumbnail = selectThumbnail(
          this.completeModelSet.imagesByDepictsUri(namedValue.uri),
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
    const institutionUris = joinSelector.institution
      ? new Set<string>()
      : undefined;
    const namedValuesByUri: {[index: string]: NamedValue} = {};

    for (const work of works) {
      builder.addWork(work);

      // Work ModelSets always include rights
      this.addRightsModelSet(joinSelector.agents ?? {}, builder, work.rights);

      {
        const abstract = work.abstract;
        if (abstract && abstract instanceof Text) {
          this.addRightsModelSet(
            joinSelector.agents ?? {},
            builder,
            abstract.rights
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

      if (institutionUris) {
        institutionUris.add(work.institutionUri);
      }

      if (joinSelector.propertyNamedValues && this.workPropertyUris) {
        for (const workPropertyUri of this.workPropertyUris) {
          for (const namedValue of work.propertyNamedValues(workPropertyUri)) {
            if (!namedValuesByUri[namedValue.uri]) {
              namedValuesByUri[namedValue.uri] = namedValue;
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

    if (institutionUris) {
      for (const institutionUri of institutionUris) {
        this.addInstitutionModelSet(
          builder,
          this.completeModelSet.institutionByUri(institutionUri),
          joinSelector.institution ?? {}
        );
      }
    }

    if (joinSelector.propertyNamedValues) {
      this.addNamedValuesModelSet(
        builder,
        Object.keys(namedValuesByUri).map(uri => namedValuesByUri[uri]),
        joinSelector.propertyNamedValues
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

  private addWorkCreationModelSet(
    builder: ModelSetBuilder,
    joinSelector: WorkEventJoinSelector,
    workCreation: WorkCreation
  ): ModelSetBuilder {
    builder.addEvent(workCreation);
    if (joinSelector.agents) {
      for (const creatorAgent of workCreation.creatorAgents) {
        this.addAgentModelSet(creatorAgent, builder, joinSelector.agents);
      }
    }
    if (joinSelector.work) {
      this.addWorkModelSet(builder, workCreation.work, joinSelector.work);
    }
    return builder;
  }

  private addWorkEventModelSet(
    builder: ModelSetBuilder,
    joinSelector: WorkEventJoinSelector,
    workEvent: WorkEvent
  ): ModelSetBuilder {
    const self = this;
    return visitWorkEvent(workEvent, {
      visitWorkCreation(workCreation: WorkCreation): ModelSetBuilder {
        return self.addWorkCreationModelSet(
          builder,
          joinSelector,
          workCreation
        );
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

  institutionModelSet(
    institution: Institution,
    joinSelector?: InstitutionJoinSelector
  ): ModelSet {
    return this.addInstitutionModelSet(
      new ModelSetBuilder(),
      institution,
      joinSelector ?? {}
    ).build();
  }

  institutionsModelSet(
    institutions: readonly Institution[],
    joinSelector?: InstitutionJoinSelector
  ): ModelSet {
    const builder = new ModelSetBuilder();
    for (const institution of institutions) {
      this.addInstitutionModelSet(builder, institution, joinSelector ?? {});
    }
    return builder.build();
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
