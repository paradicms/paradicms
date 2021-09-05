import {Dataset} from "./Dataset";
import {Rights} from "./Rights";
import {Property} from "./Property";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {InstitutionJoinSelector} from "./InstitutionJoinSelector";
import {ObjectJoinSelector} from "./ObjectJoinSelector";
import {Collection} from "./Collection";
import {DatasetBuilder} from "./DatasetBuilder";
import {Institution} from "./Institution";
import {Object} from "./Object";
import {PropertyDefinitionJoinSelector} from "./PropertyDefinitionJoinSelector";
import {selectThumbnail} from "./selectThumbnail";

/**
 * Subset a Dataset to reduce the amount of data passed between getStaticProps and the component.
 *
 * Re: join selectors. A caller can select which connected models to include in a Dataset.
 * For example, return a collection's institution along with the collection.
 * An undefined joinSelector means don't return any connected models.
 * An empty joinSelector ({}) means return the connected models themselves but none of their connected models (i.e., no recursion).
 * For example, a joinSelector on Institution with collections: {} will return all of the Collection instances associated with that Institution,
 * but no models connected to the Collections (i.e., their Objects).
 */
export class DataSubsetter {
  constructor(private readonly completeDataset: Dataset) {}

  // Use the builder pattern internally rather than a more functional algorithm, such as merging datasets,
  // which was the initial implementation
  private addCollectionDataset(
    builder: DatasetBuilder,
    collection: Collection,
    joinSelector?: CollectionJoinSelector
  ): DatasetBuilder {
    builder.addCollection(collection);

    if (joinSelector?.thumbnail) {
      const thumbnailImage = this.completeDataset
        .collectionByUri(collection.uri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        builder.addImage(thumbnailImage);
        if (thumbnailImage.depictsUri !== collection.uri) {
          // The thumbnail either depicts the collection or one of the collection's objects.
          // If the latter case we need to include the object in the dataset.
          builder.addObject(
            this.completeDataset.objectByUri(thumbnailImage.depictsUri)
          );
        }
      }
    }

    if (joinSelector?.institution) {
      this.addInstitutionDataset(
        builder,
        this.completeDataset.institutionByUri(collection.institutionUri),
        joinSelector.institution
      );
    }

    if (joinSelector?.objects) {
      for (const object of this.completeDataset.collectionObjects(
        collection.uri
      )) {
        this.addObjectDataset(builder, object, joinSelector.objects);
      }
    }

    return builder;
  }

  private addInstitutionDataset(
    builder: DatasetBuilder,
    institution: Institution,
    joinSelector?: InstitutionJoinSelector
  ): DatasetBuilder {
    builder.addInstitution(institution);

    if (joinSelector?.thumbnail) {
      const thumbnailImage = this.completeDataset
        .institutionByUri(institution.uri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        builder.addImage(thumbnailImage);
        if (thumbnailImage.depictsUri !== institution.uri) {
          // The thumbnail either depicts the institution, one of the institution's collections, or one of the institution's objects.
          // In the latter cases we need to include the depicted collection or object
          // TODO: this should call an IndexedDataset.modelByUri(depictsUri), then use the NamedModel discriminated union to include the model in the right array
          try {
            builder.addObject(
              this.completeDataset.objectByUri(thumbnailImage.depictsUri)
            );
          } catch (e) {
            builder.addCollection(
              this.completeDataset.collectionByUri(thumbnailImage.depictsUri)
            );
          }
        }
      }
    }

    if (joinSelector?.collections) {
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

    if (joinSelector?.objects) {
      for (const object of this.completeDataset.institutionObjects(
        institution.uri
      )) {
        this.addObjectDataset(builder, object, joinSelector.objects);
      }
    }

    if (joinSelector?.rights) {
      this.addRightsDataset(builder, institution.rights);
    }

    return builder;
  }

  private addObjectDataset(
    builder: DatasetBuilder,
    object: Object,
    joinSelector?: ObjectJoinSelector
  ): DatasetBuilder {
    builder.addObject(object);

    if (joinSelector?.allImages) {
      builder.addImages(this.completeDataset.imagesByDepictsUri(object.uri));
    } else if (joinSelector?.thumbnail) {
      const thumbnailImage = this.completeDataset
        .objectByUri(object.uri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        builder.addImage(thumbnailImage);
      }
    }

    if (joinSelector?.collections) {
      for (const collectionUri of object.collectionUris) {
        this.addCollectionDataset(
          builder,
          this.completeDataset.collectionByUri(collectionUri),
          joinSelector.collections
        );
      }
    }

    if (joinSelector?.institution) {
      this.addInstitutionDataset(
        builder,
        this.completeDataset.institutionByUri(object.institutionUri),
        joinSelector.institution
      );
    }

    if (joinSelector?.propertyDefinitions) {
      this.addPropertyDefinitionsDataset(
        builder,
        object.properties,
        joinSelector.propertyDefinitions
      );
    }
    this.addRightsDataset(builder, object.rights);

    return builder;
  }

  private addPropertyDefinitionsDataset(
    builder: DatasetBuilder,
    properties: readonly Property[] | null,
    joinSelector?: PropertyDefinitionJoinSelector
  ): DatasetBuilder {
    if (!properties) {
      return builder;
    }

    for (const property of properties) {
      const propertyDefinition = this.completeDataset.propertyDefinitionByUri(
        property.uri
      );
      if (!propertyDefinition) {
        continue;
      }
      builder.addPropertyDefinition(propertyDefinition);

      if (joinSelector?.values) {
        const propertyValueDefinitions = this.completeDataset.propertyValueDefinitionsByPropertyUri(
          propertyDefinition.uri
        );
        builder.addPropertyValueDefinitions(propertyValueDefinitions);

        if (joinSelector.values.allImages) {
          for (const propertyValueDefinition of propertyValueDefinitions) {
            builder.addImages(
              this.completeDataset.imagesByDepictsUri(
                propertyValueDefinition.uri
              )
            );
          }
        } else if (joinSelector.values.thumbnail) {
          for (const propertyValueDefinition of propertyValueDefinitions) {
            const thumbnail = selectThumbnail(
              this.completeDataset.imagesByDepictsUri(
                propertyValueDefinition.uri
              ),
              joinSelector.values.thumbnail
            );
            if (thumbnail) {
              builder.addImage(thumbnail);
            }
          }
        }
      }
    }

    return builder;
  }

  private addRightsDataset(
    builder: DatasetBuilder,
    rights: Rights | null
  ): DatasetBuilder {
    if (!rights) {
      return builder;
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
      joinSelector
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
        joinSelector
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
      joinSelector
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
        joinSelector
      );
    }
    return builder.build();
  }

  objectDataset(objectUri: string, joinSelector?: ObjectJoinSelector): Dataset {
    return this.addObjectDataset(
      new DatasetBuilder(),
      this.completeDataset.objectByUri(objectUri),
      joinSelector
    ).build();
  }

  objectsDataset(
    objectUris: readonly string[],
    joinSelector?: ObjectJoinSelector
  ): Dataset {
    const builder = new DatasetBuilder();
    for (const objectUri of objectUris) {
      this.addObjectDataset(
        builder,
        this.completeDataset.objectByUri(objectUri),
        joinSelector
      );
    }
    return builder.build();
  }
}
