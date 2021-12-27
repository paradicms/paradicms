import {Dataset} from "./Dataset";
import {Rights} from "./Rights";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {InstitutionJoinSelector} from "./InstitutionJoinSelector";
import {Collection} from "./Collection";
import {DatasetBuilder} from "./DatasetBuilder";
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

/**
 * Subset a Dataset to reduce the amount of data passed between getStaticProps and the component.
 *
 * Re: join selectors. A caller can select which connected models to include in a Dataset.
 * For example, return a collection's institution along with the collection.
 * An undefined joinSelector means don't return any connected models.
 * An empty joinSelector ({}) means return the connected models themselves but none of their connected models (i.e., no recursion).
 * For example, a joinSelector on Institution with collections: {} will return all of the Collection instances associated with that Institution,
 * but no models connected to the Collections (i.e., their Works).
 */
export class DataSubsetter {
  private readonly completeDataset: Dataset;
  private readonly workPropertyUris: readonly string[];

  constructor(kwds: {
    completeDataset: Dataset;
    workPropertyUris: readonly string[];
  }) {
    this.completeDataset = kwds.completeDataset;
    this.workPropertyUris = kwds.workPropertyUris;
  }

  // Use the builder pattern internally rather than a more functional algorithm, such as merging datasets,
  // which was the initial implementation
  private addAgentDataset(
    agent: Agent,
    builder: DatasetBuilder,
    joinSelector: AgentJoinSelector
  ): DatasetBuilder {
    builder.addAgent(agent);

    if (joinSelector.thumbnail) {
      const thumbnailImage = this.completeDataset
        .agentByUri(agent.uri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImageDataset(builder, thumbnailImage, {});
      }
    }

    return builder;
  }

  private addCollectionDataset(
    builder: DatasetBuilder,
    collection: Collection,
    joinSelector: CollectionJoinSelector
  ): DatasetBuilder {
    builder.addCollection(collection);

    if (joinSelector.thumbnail) {
      const thumbnailImage = this.completeDataset
        .collectionByUri(collection.uri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImageDataset(builder, thumbnailImage, {});
        if (thumbnailImage.depictsUri !== collection.uri) {
          // The thumbnail either depicts the collection or one of the collection's works.
          // If the latter case we need to include the work in the dataset.
          builder.addWork(
            this.completeDataset.workByUri(thumbnailImage.depictsUri)
          );
        }
      }
    }

    if (joinSelector.institution) {
      this.addInstitutionDataset(
        builder,
        this.completeDataset.institutionByUri(collection.institutionUri),
        joinSelector.institution
      );
    }

    if (joinSelector.works) {
      this.addWorkDatasets(
        builder,
        this.completeDataset.collectionWorks(collection.uri),
        joinSelector.works
      );
    }

    return builder;
  }

  private addImageDataset(
    builder: DatasetBuilder,
    image: Image,
    agentJoinSelector: AgentJoinSelector
  ): DatasetBuilder {
    builder.addImage(image);
    this.addRightsDataset(builder, image.rights, agentJoinSelector);
    return builder;
  }

  private addInstitutionDataset(
    builder: DatasetBuilder,
    institution: Institution,
    joinSelector: InstitutionJoinSelector
  ): DatasetBuilder {
    builder.addInstitution(institution);
    this.addRightsDataset(builder, institution.rights, {});

    if (joinSelector.thumbnail) {
      const thumbnailImage = this.completeDataset
        .institutionByUri(institution.uri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        this.addImageDataset(builder, thumbnailImage, {});
        if (thumbnailImage.depictsUri !== institution.uri) {
          // The thumbnail either depicts the institution, one of the institution's collections, or one of the institution's works.
          // In the latter cases we need to include the depicted collection or work
          // TODO: this should call an IndexedDataset.modelByUri(depictsUri), then use the NamedModel discriminated union to include the model in the right array
          try {
            builder.addWork(
              this.completeDataset.workByUri(thumbnailImage.depictsUri)
            );
          } catch (e) {
            builder.addCollection(
              this.completeDataset.collectionByUri(thumbnailImage.depictsUri)
            );
          }
        }
      }
    }

    if (joinSelector.collections) {
      for (const collection of this.completeDataset.institutionCollections(
        institution.uri
      )) {
        this.addCollectionDataset(
          builder,
          collection,
          joinSelector.collections
        );
      }
    }

    if (joinSelector.works) {
      this.addWorkDatasets(
        builder,
        this.completeDataset.institutionWorks(institution.uri),
        joinSelector.works
      );
    }

    return builder;
  }

  private addNamedValuesDataset(
    builder: DatasetBuilder,
    namedValues: readonly NamedValue[],
    joinSelector: NamedValueJoinSelector
  ) {
    builder.addNamedValues(namedValues);
    if (joinSelector.thumbnail) {
      for (const namedValue of namedValues) {
        const thumbnail = selectThumbnail(
          this.completeDataset.imagesByDepictsUri(namedValue.uri),
          joinSelector.thumbnail
        );
        if (thumbnail) {
          this.addImageDataset(builder, thumbnail, {});
        }
      }
    }
  }

  private addWorkDataset(
    builder: DatasetBuilder,
    work: Work,
    joinSelector: WorkJoinSelector
  ): DatasetBuilder {
    return this.addWorkDatasets(builder, [work], joinSelector);
  }

  private addWorkDatasets(
    builder: DatasetBuilder,
    works: readonly Work[],
    joinSelector: WorkJoinSelector
  ): DatasetBuilder {
    const collectionUris = joinSelector.collections
      ? new Set<string>()
      : undefined;
    const institutionUris = joinSelector.institution
      ? new Set<string>()
      : undefined;
    const namedValuesByUri: {[index: string]: NamedValue} = {};

    for (const work of works) {
      builder.addWork(work);

      // Work Datasets always include rights
      this.addRightsDataset(builder, work.rights, joinSelector.agent ?? {});

      {
        const abstract = work.abstract;
        if (abstract && abstract instanceof Text) {
          this.addRightsDataset(
            builder,
            abstract.rights,
            joinSelector.agent ?? {}
          );
        }
      }

      if (joinSelector.allImages) {
        for (const image of this.completeDataset.imagesByDepictsUri(work.uri)) {
          this.addImageDataset(builder, image, joinSelector.agent ?? {});
        }
      } else if (joinSelector.thumbnail) {
        const thumbnailImage = this.completeDataset
          .workByUri(work.uri)
          .thumbnail(joinSelector.thumbnail);
        if (thumbnailImage) {
          this.addImageDataset(
            builder,
            thumbnailImage,
            joinSelector.agent ?? {}
          );
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

      if (joinSelector.propertyNamedValues) {
        for (const propertyUri of this.workPropertyUris) {
          for (const namedValue of work.propertyNamedValues(propertyUri)) {
            if (!namedValuesByUri[namedValue.uri]) {
              namedValuesByUri[namedValue.uri] = namedValue;
            }
          }
        }
      }
    }

    if (collectionUris) {
      for (const collectionUri of collectionUris) {
        this.addCollectionDataset(
          builder,
          this.completeDataset.collectionByUri(collectionUri),
          joinSelector.collections ?? {}
        );
      }
    }

    if (institutionUris) {
      for (const institutionUri of institutionUris) {
        this.addInstitutionDataset(
          builder,
          this.completeDataset.institutionByUri(institutionUri),
          joinSelector.institution ?? {}
        );
      }
    }

    if (joinSelector.propertyNamedValues) {
      this.addNamedValuesDataset(
        builder,
        Object.keys(namedValuesByUri).map(uri => namedValuesByUri[uri]),
        joinSelector.propertyNamedValues
      );
    }

    return builder;
  }

  private addRightsDataset(
    builder: DatasetBuilder,
    rights: Rights | null,
    agentJoinSelector: AgentJoinSelector
  ): DatasetBuilder {
    if (!rights) {
      return builder;
    }

    const creator = rights.creator;
    if (creator && typeof creator !== "string") {
      this.addAgentDataset(creator, builder, agentJoinSelector);
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

  collectionDataset(
    collectionUri: string,
    joinSelector?: CollectionJoinSelector
  ): Dataset {
    return this.addCollectionDataset(
      new DatasetBuilder(),
      this.completeDataset.collectionByUri(collectionUri),
      joinSelector ?? {}
    ).build();
  }

  collectionsDataset(
    collectionUris: readonly string[],
    joinSelector?: CollectionJoinSelector
  ): Dataset {
    const builder = new DatasetBuilder();
    for (const collectionUri of collectionUris) {
      this.addCollectionDataset(
        builder,
        this.completeDataset.collectionByUri(collectionUri),
        joinSelector ?? {}
      );
    }
    return builder.build();
  }

  institutionDataset(
    institutionUri: string,
    joinSelector?: InstitutionJoinSelector
  ): Dataset {
    return this.addInstitutionDataset(
      new DatasetBuilder(),
      this.completeDataset.institutionByUri(institutionUri),
      joinSelector ?? {}
    ).build();
  }

  institutionsDataset(
    institutionUris: readonly string[],
    joinSelector?: InstitutionJoinSelector
  ): Dataset {
    const builder = new DatasetBuilder();
    for (const institutionUri of institutionUris) {
      this.addInstitutionDataset(
        builder,
        this.completeDataset.institutionByUri(institutionUri),
        joinSelector ?? {}
      );
    }
    return builder.build();
  }

  workDataset(workUri: string, joinSelector?: WorkJoinSelector): Dataset {
    return this.addWorkDataset(
      new DatasetBuilder(),
      this.completeDataset.workByUri(workUri),
      joinSelector ?? {}
    ).build();
  }

  worksDataset(
    workUris: readonly string[],
    joinSelector?: WorkJoinSelector
  ): Dataset {
    const builder = new DatasetBuilder();
    this.addWorkDatasets(
      builder,
      workUris.map(workUri => this.completeDataset.workByUri(workUri)),
      joinSelector ?? {}
    );

    return builder.build();
  }
}
