import {IndexedDataset} from "./IndexedDataset";
import {Dataset} from "./Dataset";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {JoinedImage} from "./JoinedImage";
import {JoinedInstitution} from "./JoinedInstitution";
import {JoinedObject} from "./JoinedObject";
import {JoinedCollection} from "./JoinedCollection";
import {PropertyDefinition} from "./PropertyDefinition";

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
  constructor(private readonly indexedDataset: IndexedDataset) {
  }

  collectionByUri(collectionUri: string): JoinedCollection {
    return new JoinedCollection(this.indexedDataset.collectionByUri(collectionUri), this);
  }

  collectionImages(collectionUri: string): readonly JoinedImage[] {
    return this.indexedDataset.collectionImages(collectionUri).map(image => new JoinedImage(image, this));
  }

  derivedImages(originalImageUri: string): readonly JoinedImage[] {
    return this.indexedDataset.derivedImages(originalImageUri).map(image => new JoinedImage(image, this));
  }

  static fromDataset(dataset: Dataset): JoinedDataset {
    return new JoinedDataset(new IndexedDataset(dataset));
  }

  imageByUri(imageUri: string): JoinedImage {
    return new JoinedImage(this.indexedDataset.imageByUri(imageUri), this);
  }

  institutionByUri(institutionUri: string): JoinedInstitution {
    return new JoinedInstitution(this.indexedDataset.institutionByUri(institutionUri), this);
  }

  institutionImages(institutionUri: string): readonly JoinedImage[] {
    return this.indexedDataset.institutionImages(institutionUri).map(image => new JoinedImage(image, this));
  }

  get institutions(): readonly JoinedInstitution[] {
    return this.indexedDataset.institutions.map(institution => new JoinedInstitution(institution, this));
  }

  licenseByUri(licenseUri: string): License {
    return this.indexedDataset.licenseByUri(licenseUri);
  }

  objectByUri(objectUri: string): JoinedObject {
    return new JoinedObject(this, this.indexedDataset.objectByUri(objectUri));
  }

  objectImages(objectUri: string): readonly JoinedImage[] {
    return this.indexedDataset.objectImages(objectUri).map(image => new JoinedImage(image, this));
  }

  get objects(): readonly JoinedObject[] {
    return this.indexedDataset.objects.map(object => new JoinedObject(this, object));
  }

  propertyDefinitionByUri(propertyDefinitionUri: string): PropertyDefinition | null {
    return this.indexedDataset.propertyDefinitionByUri(propertyDefinitionUri);
  }

  rightsStatementByUri(rightsStatementUri: string): RightsStatement {
    return this.indexedDataset.rightsStatementByUri(rightsStatementUri);
  }
}
