import {IndexedDataset} from "../src/IndexedDataset";
import {expect} from "chai";
import {testDataset} from "./testDataset";
import {DataSubsetter} from "../src/DataSubsetter";
import {JoinedDataset} from "../src/JoinedDataset";
import {Dataset} from "../src/Dataset";
import {ThumbnailSelector} from "../src/ThumbnailSelector";

const datasetFromPartial = (partialDataset: Partial<Dataset>): Dataset => {
  return {
    collections: partialDataset.collections ?? [],
    images: partialDataset.images ?? [],
    institutions: partialDataset.institutions ?? [],
    licenses: partialDataset.licenses ?? [],
    objects: partialDataset.objects ?? [],
    propertyDefinitions: partialDataset.propertyDefinitions ?? [],
    rightsStatements: partialDataset.rightsStatements ?? [],
  };
};

const THUMBNAIL_SELECTOR: ThumbnailSelector = {targetDimensions: {height: 200, width: 200}};

describe("DataSubsetter", () => {
  const indexedDataset = new IndexedDataset(testDataset);
  const joinedDaset = new JoinedDataset(indexedDataset);
  const sut = new DataSubsetter(indexedDataset);

  it("should get institutions with thumbnails (institutions page)", () => {
    const dataset = sut.institutionsDataset(testDataset.institutions.map(institution => institution.uri), {thumbnail: THUMBNAIL_SELECTOR});
    expect(dataset).to.deep.eq(datasetFromPartial({
      images: joinedDaset.institutions.map(institution => institution.thumbnail(THUMBNAIL_SELECTOR)!.asImage),
      institutions: testDataset.institutions,
    }));
  });

  it("should get an institution with its collections and their thumbnails (institution page)", () => {
    const institution = testDataset.institutions[0];
    const dataset = sut.institutionDataset(institution.uri, {collections: {thumbnail: THUMBNAIL_SELECTOR}});
    expect(dataset.collections).to.deep.eq(testDataset.collections.filter(collection => collection.institutionUri === institution.uri));
    // One thumbnail per collection
    expect(dataset.images).to.have.length(dataset.collections.length);
    // The collections themselves don't have Images that depict the collection. A thumbnail is picked up from an object.
    // That object must be included in the dataset for the thumbnail selection to work after subsetting.
    expect(dataset.objects).to.have.length(dataset.objects.length);
    // One object per collection
    expect(dataset.objects.map(object => object.collectionUris[0])).to.deep.eq(dataset.collections.map(collection => collection.uri));
  });

  it("should get a collection with its objects and their thumbnails (collection page)", () => {
    const collection = testDataset.collections[0];
    const dataset = sut.collectionDataset(collection.uri, {objects: {thumbnail: THUMBNAIL_SELECTOR}});
    expect(dataset).to.deep.eq(datasetFromPartial({
      collections: [collection],
      images: joinedDaset.collectionObjects(collection.uri).map(object => object.thumbnail(THUMBNAIL_SELECTOR)!.asImage),
      licenses: testDataset.licenses,
      objects: testDataset.objects.filter(object => object.collectionUris.some(collectionUri => collectionUri === collection.uri)),
      rightsStatements: testDataset.rightsStatements,
      propertyDefinitions: testDataset.propertyDefinitions,
    }));
  });

  it("should get an object with its institution, collections, and all images (object page)", () => {
    const object = testDataset.objects[0];
    const dataset = sut.objectDataset(object.uri, {collections: {}, institution: {}, allImages: true});
    expect(dataset).to.deep.eq(datasetFromPartial({
      collections: testDataset.collections.filter(collection => object.collectionUris.some(objectCollectionUri => objectCollectionUri === collection.uri)),
      images: testDataset.images.filter(image => image.depictsUri === object.uri),
      institutions: [testDataset.institutions.find(institution => institution.uri === object.institutionUri)!],
      licenses: testDataset.licenses,
      objects: [object],
      rightsStatements: testDataset.rightsStatements,
      propertyDefinitions: testDataset.propertyDefinitions,
    }));
  });
});
