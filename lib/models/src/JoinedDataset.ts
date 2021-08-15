import {IndexedDataset} from "./IndexedDataset";
import {Dataset} from "./Dataset";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {JoinedImage} from "./JoinedImage";
import {JoinedInstitution} from "./JoinedInstitution";
import {JoinedObject} from "./JoinedObject";
import {JoinedCollection} from "./JoinedCollection";
import {JoinedPropertyValueDefinition} from "./JoinedPropertyValueDefinition";
import {JoinedPropertyDefinition} from "./JoinedPropertyDefinition";

/**
 * Adapts/wraps models in Dataset to dynamically resolve references without copying.
 *
 * For example, an object lookup returns a JoinedObject (adapter class),
 * which has a getter that returns an Institution rather than the original reference to the institution's URI.
 *
 * This class only deals in class instances (of adapters like JoinedObject), which can't be serialized easily with JSON,
 * so it is only intended for use on the component side.
 */
export class JoinedDataset {
  // @ts-ignore
  constructor(private readonly indexedDataset: IndexedDataset) {}

  collectionByUri(collectionUri: string): JoinedCollection {
    return new JoinedCollection(
      this.indexedDataset.collectionByUri(collectionUri),
      this
    );
  }

  collectionObjects(collectionUri: string): readonly JoinedObject[] {
    return this.indexedDataset
      .collectionObjects(collectionUri)
      .map(object => new JoinedObject(this, object));
  }

  static fromDataset(dataset: Dataset): JoinedDataset {
    return new JoinedDataset(new IndexedDataset(dataset));
  }

  imageByUri(imageUri: string): JoinedImage {
    return new JoinedImage(this.indexedDataset.imageByUri(imageUri), this);
  }

  imagesByDepictsUri(depictsUri: string): readonly JoinedImage[] {
    return this.indexedDataset
      .imagesByDepictsUri(depictsUri)
      .map(image => new JoinedImage(image, this));
  }

  imagesByOriginalImageUri(originalImageUri: string): readonly JoinedImage[] {
    return this.indexedDataset
      .imagesByOriginalImageUri(originalImageUri)
      .map(image => new JoinedImage(image, this));
  }

  institutionByUri(institutionUri: string): JoinedInstitution {
    return new JoinedInstitution(
      this.indexedDataset.institutionByUri(institutionUri),
      this
    );
  }

  institutionCollections(institutionUri: string): readonly JoinedCollection[] {
    return this.indexedDataset
      .institutionCollections(institutionUri)
      .map(collection => new JoinedCollection(collection, this));
  }

  get institutions(): readonly JoinedInstitution[] {
    return this.indexedDataset.institutions.map(
      institution => new JoinedInstitution(institution, this)
    );
  }

  licenseByUri(licenseUri: string): License {
    return this.indexedDataset.licenseByUri(licenseUri);
  }

  objectByUri(objectUri: string): JoinedObject {
    return new JoinedObject(this, this.indexedDataset.objectByUri(objectUri));
  }

  get objects(): readonly JoinedObject[] {
    return this.indexedDataset.objects.map(
      object => new JoinedObject(this, object)
    );
  }

  propertyDefinitionByUri(
    propertyDefinitionUri: string
  ): JoinedPropertyDefinition | null {
    const propertyDefinition = this.indexedDataset.propertyDefinitionByUri(
      propertyDefinitionUri
    );
    return propertyDefinition
      ? new JoinedPropertyDefinition(this, propertyDefinition)
      : null;
  }

  propertyValueDefinitionsByPropertyUri(
    propertyUri: string
  ): readonly JoinedPropertyValueDefinition[] {
    return this.indexedDataset
      .propertyValueDefinitionsByPropertyUri(propertyUri)
      .map(
        propertyValueDefinition =>
          new JoinedPropertyValueDefinition(this, propertyValueDefinition)
      );
  }

  rightsStatementByUri(rightsStatementUri: string): RightsStatement {
    return this.indexedDataset.rightsStatementByUri(rightsStatementUri);
  }
}
