import {expect} from "chai";
import {DataSubsetter} from "../src/DataSubsetter";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {Dataset, License, RightsStatement} from "../src";
import {NamedModel} from "../src/NamedModel";
import {Agent} from "../src/Agent";
import {testDataTrig} from "./testDataTrig";

const THUMBNAIL_SELECTOR: ThumbnailSelector = {
  targetDimensions: {height: 200, width: 200},
};

const expectModelsDeepEq = <ModelT extends NamedModel>(
  leftModels: readonly ModelT[],
  rightModels: readonly ModelT[]
) =>
  expect(
    leftModels
      .map(model => model.uri)
      .concat()
      .sort()
  ).to.deep.eq(
    rightModels
      .map(model => model.uri)
      .concat()
      .sort()
  );

describe("DataSubsetter", () => {
  const testDataset = Dataset.parse(testDataTrig);
  const sut = new DataSubsetter({
    completeDataset: testDataset,
    configuration: {},
  });

  it("should get institutions with thumbnails (institutions page)", () => {
    const dataset = sut.institutionsDataset(testDataset.institutions, {
      thumbnail: THUMBNAIL_SELECTOR,
    });
    expectModelsDeepEq(
      dataset.images,
      testDataset.institutions.map(
        institution => institution.thumbnail(THUMBNAIL_SELECTOR)!
      )
    );
    expectModelsDeepEq(dataset.institutions, testDataset.institutions);
  });

  it("should get an institution with its collections and their thumbnails (institution page)", () => {
    const institution = testDataset.institutions[0];
    const dataset = sut.institutionDataset(institution, {
      collections: {thumbnail: THUMBNAIL_SELECTOR},
    });
    expectModelsDeepEq(
      dataset.collections,
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
    const dataset = sut.collectionDataset(collection, {
      works: {
        propertyNamedValues: {thumbnail: THUMBNAIL_SELECTOR},
        thumbnail: THUMBNAIL_SELECTOR,
      },
    });
    expectModelsDeepEq(dataset.collections, [collection]);
    const images = testDataset
      .collectionWorks(collection.uri)
      .map(work => work.thumbnail(THUMBNAIL_SELECTOR)!);
    // for (const namedValue of testDataset.namedValues) {
    //   images.push(namedValue.thumbnail(THUMBNAIL_SELECTOR)!);
    // }
    expectModelsDeepEq(dataset.images, images);
    expectModelsDeepEq(dataset.licenses, [
      testDataset.licenses.find(
        license => license.uri === "http://creativecommons.org/licenses/nc/1.0/"
      )!,
    ]);
    expectModelsDeepEq(
      dataset.works,
      testDataset.works.filter(work =>
        work.collectionUris.some(
          collectionUri => collectionUri === collection.uri
        )
      )
    );
    // expect(dataset.namedValues).to.not.be.empty;
    expectModelsDeepEq(dataset.rightsStatements, [
      testDataset.rightsStatements.find(
        rightsStatement =>
          rightsStatement.uri ===
          "http://rightsstatements.org/vocab/InC-EDU/1.0/"
      )!,
    ]);
  });

  it("should get an work with its institution, collections, all images, agents, and agents' thumbnails (work page)", () => {
    const work = testDataset.works[0];
    const dataset = sut.workDataset(work, {
      agent: {
        thumbnail: THUMBNAIL_SELECTOR,
      },
      allImages: true,
      collections: {},
      institution: {},
    });
    expectModelsDeepEq(
      dataset.collections,
      testDataset.collections.filter(collection =>
        work.collectionUris.some(
          workCollectionUri => workCollectionUri === collection.uri
        )
      )
    );
    expectModelsDeepEq(
      dataset.images,
      testDataset.images.filter(
        image =>
          image.depictsUri === work.uri ||
          image.depictsUri === (work.rights!.creator! as Agent).uri
      )
    );
    expectModelsDeepEq(dataset.institutions, [
      testDataset.institutions.find(
        institution => institution.uri === work.institutionUri
      )!,
    ]);
    expectModelsDeepEq(dataset.licenses, [
      testDataset.licenses.find(
        license => license.uri === (work.rights!.license! as License).uri
      )!,
    ]);
    expectModelsDeepEq(dataset.agents, [
      testDataset.agents.find(
        agent => agent.uri === (work.rights!.creator! as Agent).uri
      )!,
    ]);
    expectModelsDeepEq(dataset.works, [work]);
    expect(dataset.namedValues).to.be.empty;
    expectModelsDeepEq(dataset.rightsStatements, [
      testDataset.rightsStatements.find(
        rightsStatement =>
          rightsStatement.uri ===
          (work.rights!.statement! as RightsStatement).uri
      )!,
    ]);
  });
});
