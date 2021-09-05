import {expect} from "chai";
import {DataSubsetter} from "../src/DataSubsetter";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {testDataTtl} from "./testDataTtl";
import {Dataset} from "../src";

const THUMBNAIL_SELECTOR: ThumbnailSelector = {
  targetDimensions: {height: 200, width: 200},
};

describe("DataSubsetter", () => {
  const testDataset = Dataset.parse(testDataTtl);
  const sut = new DataSubsetter(testDataset);

  it("should get institutions with thumbnails (institutions page)", () => {
    const dataset = sut.institutionsDataset(
      testDataset.institutions.map(institution => institution.uri),
      {thumbnail: THUMBNAIL_SELECTOR}
    );
    expect(dataset.images).to.deep.eq(
      testDataset.institutions.map(
        institution => institution.thumbnail(THUMBNAIL_SELECTOR)!
      )
    );
    expect(dataset.institutions).to.deep.eq(testDataset.institutions);
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
    // The collections themselves don't have Images that depict the collection. A thumbnail is picked up from an work.
    // That work must be included in the dataset for the thumbnail selection to work after subsetting.
    expect(dataset.works).to.have.length(dataset.works.length);
    // One work per collection
    expect(dataset.works.map(work => work.collectionUris[0])).to.deep.eq(
      dataset.collections.map(collection => collection.uri)
    );
  });

  it("should get a collection with its works and their thumbnails (collection page)", () => {
    const collection = testDataset.collections[0];
    const dataset = sut.collectionDataset(collection.uri, {
      works: {
        propertyDefinitions: {values: {thumbnail: THUMBNAIL_SELECTOR}},
        thumbnail: THUMBNAIL_SELECTOR,
      },
    });
    expect(dataset.collections).to.deep.eq([collection]);
    const images = testDataset
      .collectionWorks(collection.uri)
      .map(work => work.thumbnail(THUMBNAIL_SELECTOR)!);
    for (const propertyDefinition of dataset.propertyDefinitions) {
      for (const propertyDefinitionValue of testDataset.propertyDefinitionByUri(
        propertyDefinition.uri
      )!.values) {
        images.push(propertyDefinitionValue.thumbnail(THUMBNAIL_SELECTOR)!);
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
    expect(dataset.works).to.deep.eq(
      testDataset.works.filter(work =>
        work.collectionUris.some(
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

  it("should get an work with its institution, collections, and all images (work page)", () => {
    const work = testDataset.works[0];
    const dataset = sut.workDataset(work.uri, {
      collections: {},
      institution: {},
      allImages: true,
      propertyDefinitions: {},
    });
    expect(dataset.collections).to.deep.eq(
      testDataset.collections.filter(collection =>
        work.collectionUris.some(
          workCollectionUri => workCollectionUri === collection.uri
        )
      )
    );
    expect(dataset.images).to.deep.eq(
      testDataset.images.filter(image => image.depictsUri === work.uri)
    );
    expect(dataset.institutions).to.deep.eq([
      testDataset.institutions.find(
        institution => institution.uri === work.institutionUri
      )!,
    ]);
    expect(dataset.licenses).to.deep.eq([
      testDataset.licenses.find(
        license => license.uri === work.rights!.license!.value
      )!,
    ]);
    expect(dataset.works).to.deep.eq([work]);
    expect(dataset.propertyDefinitions).to.not.be.empty;
    expect(dataset.propertyValueDefinitions).to.be.empty;
    expect(dataset.rightsStatements).to.deep.eq([
      testDataset.rightsStatements.find(
        rightsStatement => rightsStatement.uri === work.rights!.statement!.value
      )!,
    ]);
  });
});
