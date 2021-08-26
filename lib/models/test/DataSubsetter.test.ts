import {IndexedDataset} from "../src/IndexedDataset";
import {expect} from "chai";
import {testDataset} from "./testDataset";
import {DataSubsetter} from "../src/DataSubsetter";
import {JoinedDataset} from "../src/JoinedDataset";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {Dataset} from "../src";

const datasetFromPartial = (partialDataset: Partial<Dataset>): Dataset => {
  return {
    collections: partialDataset.collections ?? [],
    images: partialDataset.images ?? [],
    institutions: partialDataset.institutions ?? [],
    licenses: partialDataset.licenses ?? [],
    objects: partialDataset.objects ?? [],
    propertyDefinitions: partialDataset.propertyDefinitions ?? [],
    propertyValueDefinitions: partialDataset.propertyValueDefinitions ?? [],
    rightsStatements: partialDataset.rightsStatements ?? [],
  };
};

const THUMBNAIL_SELECTOR: ThumbnailSelector = {
  targetDimensions: {height: 200, width: 200},
};

describe("DataSubsetter", () => {
  const indexedDataset = new IndexedDataset(testDataset);
  const joinedDataset = new JoinedDataset(indexedDataset);
  const sut = new DataSubsetter(indexedDataset);

  it("should get institutions with thumbnails (institutions page)", () => {
    const dataset = sut.institutionsDataset(
      testDataset.institutions.map(institution => institution.uri),
      {thumbnail: THUMBNAIL_SELECTOR}
    );
    expect(dataset).to.deep.eq(
      datasetFromPartial({
        images: joinedDataset.institutions.map(
          institution => institution.thumbnail(THUMBNAIL_SELECTOR)!.asImage
        ),
        institutions: testDataset.institutions,
      })
    );
  });

  it("should get an institution with its collections and their thumbnails (institution page)", () => {
    const institution = testDataset.institutions[0];
    const dataset = sut.institutionDataset(institution.uri, {
      collections: {thumbnail: THUMBNAIL_SELECTOR},
    });
    expect(dataset.collections).to.deep.eq(
      testDataset.collections.filter(
        collection => collection.institutionUri === institution.uri
      )
    );
    // One thumbnail per collection
    expect(dataset.images).to.have.length(dataset.collections.length);
    // The collections themselves don't have Images that depict the collection. A thumbnail is picked up from an object.
    // That object must be included in the dataset for the thumbnail selection to work after subsetting.
    expect(dataset.objects).to.have.length(dataset.objects.length);
    // One object per collection
    expect(dataset.objects.map(object => object.collectionUris[0])).to.deep.eq(
      dataset.collections.map(collection => collection.uri)
    );
  });

  it("should get a collection with its objects and their thumbnails (collection page)", () => {
    const collection = testDataset.collections[0];
    const dataset = sut.collectionDataset(collection.uri, {
      objects: {
        propertyDefinitions: {values: {thumbnail: THUMBNAIL_SELECTOR}},
        thumbnail: THUMBNAIL_SELECTOR,
      },
    });
    expect(dataset.collections).to.deep.eq([collection]);
    const images = joinedDataset
      .collectionObjects(collection.uri)
      .map(object => object.thumbnail(THUMBNAIL_SELECTOR)!.asImage);
    for (const propertyDefinition of dataset.propertyDefinitions) {
      for (const propertyDefinitionValue of joinedDataset.propertyDefinitionByUri(
        propertyDefinition.uri
      )!.values) {
        images.push(
          propertyDefinitionValue.thumbnail(THUMBNAIL_SELECTOR)!.asImage
        );
      }
    }
    expect(
      dataset.images
        .concat()
        .sort((left, right) => left.uri.localeCompare(right.uri))
    ).to.deep.eq(
      images.sort((left, right) => left.uri.localeCompare(right.uri))
    );
    expect(dataset.licenses).to.deep.eq([
      testDataset.licenses.find(
        license => license.uri === "http://creativecommons.org/licenses/nc/1.0/"
      )!,
    ]);
    expect(dataset.objects).to.deep.eq(
      testDataset.objects.filter(object =>
        object.collectionUris.some(
          collectionUri => collectionUri === collection.uri
        )
      )
    );
    expect(dataset.propertyDefinitions).to.not.be.empty;
    expect(dataset.propertyValueDefinitions).to.not.be.empty;
    expect(dataset.rightsStatements).to.deep.eq([
      testDataset.rightsStatements.find(
        rightsStatement =>
          rightsStatement.uri ===
          "http://rightsstatements.org/vocab/InC-EDU/1.0/"
      )!,
    ]);
  });

  it("should get an object with its institution, collections, and all images (object page)", () => {
    const object = testDataset.objects[0];
    const dataset = sut.objectDataset(object.uri, {
      collections: {},
      institution: {},
      allImages: true,
      propertyDefinitions: {},
    });
    expect(dataset.collections).to.deep.eq(
      testDataset.collections.filter(collection =>
        object.collectionUris.some(
          objectCollectionUri => objectCollectionUri === collection.uri
        )
      )
    );
    expect(dataset.images).to.deep.eq(
      testDataset.images.filter(image => image.depictsUri === object.uri)
    );
    expect(dataset.institutions).to.deep.eq([
      testDataset.institutions.find(
        institution => institution.uri === object.institutionUri
      )!,
    ]);
    expect(dataset.licenses).to.deep.eq([
      testDataset.licenses.find(
        license => license.uri === object.rights!.license!.value
      )!,
    ]);
    expect(dataset.objects).to.deep.eq([object]);
    expect(dataset.propertyDefinitions).to.not.be.empty;
    expect(dataset.propertyValueDefinitions).to.be.empty;
    expect(dataset.rightsStatements).to.deep.eq([
      testDataset.rightsStatements.find(
        rightsStatement =>
          rightsStatement.uri === object.rights!.statement!.value
      )!,
    ]);
  });
});
