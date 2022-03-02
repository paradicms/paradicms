import {expect} from "chai";
import {DataSubsetter} from "../src/DataSubsetter";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {Dataset, License, RightsStatement} from "../src";
import {NamedModel} from "../src/NamedModel";
import {testDataTrig} from "./testDataTrig";
import {WorkCreation} from "../src/WorkCreation";

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

  it("should get a work with its institution, collections, all images, agents, and agents' thumbnails (work page)", () => {
    const work = testDataset.works[0];
    const dataset = sut.workDataset(work, {
      agents: {
        thumbnail: THUMBNAIL_SELECTOR,
      },
      allImages: true,
      collections: {},
      events: {},
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
          work.rights!.agents.some(agent => agent.uri === image.depictsUri)
      )
    );
    expect(dataset.agents).to.not.be.empty;
    for (const agent of dataset.agents) {
      expect(agent.thumbnail(THUMBNAIL_SELECTOR)).to.not.be.null;
    }
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
    expectModelsDeepEq(
      dataset.agents,
      testDataset.agents.filter(datasetAgent =>
        work.rights!.agents.some(
          workAgent => workAgent.uri === datasetAgent.uri
        )
      )
    );
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

  it("should get a work event subset", () => {
    const work = testDataset.works[0];
    const workCreation: WorkCreation = testDataset
      .workEventsByWork(work.uri)
      .find(event => event instanceof WorkCreation)! as WorkCreation;

    const dataset = sut.workEventsDataset([workCreation], {
      agents: {},
      work: {},
    });
    expectModelsDeepEq(dataset.works, [work]);
    expectModelsDeepEq(dataset.agents, workCreation.agents);
    expectModelsDeepEq(dataset.workEventsByWork(work.uri), [workCreation]);
  });
});
