import {expect} from "chai";
import {ModelSubsetter} from "../src/ModelSubsetter";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {License, ModelSet, RightsStatement} from "../src";
import {NamedModel} from "../src/NamedModel";
import {testData} from "@paradicms/test";
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

describe("ModelSubsetter", () => {
  const testModelSet = ModelSet.fromDatasetCore(testData);
  const sut = new ModelSubsetter({
    completeModelSet: testModelSet,
    workPropertyUris: [],
  });

  it("should get institutions with thumbnails (institutions page)", () => {
    const modelSet = sut.institutionsModelSet(testModelSet.institutions, {
      thumbnail: THUMBNAIL_SELECTOR,
    });
    expectModelsDeepEq(
      modelSet.images,
      testModelSet.institutions.map(
        institution => institution.thumbnail(THUMBNAIL_SELECTOR)!
      )
    );
    expectModelsDeepEq(modelSet.institutions, testModelSet.institutions);
  });

  it("should get an institution with its collections and their thumbnails (institution page)", () => {
    const institution = testModelSet.institutions[0];
    const modelSet = sut.institutionModelSet(institution, {
      collections: {thumbnail: THUMBNAIL_SELECTOR},
    });
    expectModelsDeepEq(
      modelSet.collections,
      testModelSet.collections.filter(
        collection => collection.institutionUri === institution.uri
      )
    );
    // One thumbnail per collection
    expect(modelSet.images).to.have.length(modelSet.collections.length);
    // The collections themselves don't have Images that depict the collection. A thumbnail is picked up from an work.
    // That work must be included in the modelSet for the thumbnail selection to work after subsetting.
    expect(modelSet.works).to.have.length(modelSet.works.length);
    // One work per collection
    expect(modelSet.works.map(work => work.collectionUris[0])).to.deep.eq(
      modelSet.collections.map(collection => collection.uri)
    );
  });

  it("should get a collection with its works and their thumbnails (collection page)", () => {
    const collection = testModelSet.collections[0];
    const modelSet = sut.collectionModelSet(collection, {
      works: {
        propertyNamedValues: {thumbnail: THUMBNAIL_SELECTOR},
        thumbnail: THUMBNAIL_SELECTOR,
      },
    });
    expectModelsDeepEq(modelSet.collections, [collection]);
    const images = testModelSet
      .collectionWorks(collection.uri)
      .map(work => work.thumbnail(THUMBNAIL_SELECTOR)!);
    // for (const namedValue of testModelSet.namedValues) {
    //   images.push(namedValue.thumbnail(THUMBNAIL_SELECTOR)!);
    // }
    expectModelsDeepEq(modelSet.images, images);
    expectModelsDeepEq(modelSet.licenses, [
      testModelSet.licenses.find(
        license => license.uri === "http://creativecommons.org/licenses/nc/1.0/"
      )!,
    ]);
    expectModelsDeepEq(
      modelSet.works,
      testModelSet.works.filter(work =>
        work.collectionUris.some(
          collectionUri => collectionUri === collection.uri
        )
      )
    );
    // expect(modelSet.namedValues).to.not.be.empty;
    expectModelsDeepEq(modelSet.rightsStatements, [
      testModelSet.rightsStatements.find(
        rightsStatement =>
          rightsStatement.uri ===
          "http://rightsstatements.org/vocab/InC-EDU/1.0/"
      )!,
    ]);
  });

  it("should get a work with its institution, collections, all images, agents, and agents' thumbnails (work page)", () => {
    const work = testModelSet.works[0];
    const modelSet = sut.workModelSet(work, {
      agents: {
        thumbnail: THUMBNAIL_SELECTOR,
      },
      allImages: true,
      collections: {},
      events: {},
      institution: {},
    });
    expectModelsDeepEq(
      modelSet.collections,
      testModelSet.collections.filter(collection =>
        work.collectionUris.some(
          workCollectionUri => workCollectionUri === collection.uri
        )
      )
    );
    expectModelsDeepEq(
      modelSet.images,
      testModelSet.images.filter(
        image =>
          image.depictsUri === work.uri ||
          work.rights!.agents.some(agent => agent.uri === image.depictsUri)
      )
    );
    expect(modelSet.agents).to.not.be.empty;
    for (const agent of modelSet.agents) {
      expect(agent.thumbnail(THUMBNAIL_SELECTOR)).to.not.be.null;
    }
    expectModelsDeepEq(modelSet.institutions, [
      testModelSet.institutions.find(
        institution => institution.uri === work.institutionUri
      )!,
    ]);
    expectModelsDeepEq(modelSet.licenses, [
      testModelSet.licenses.find(
        license => license.uri === (work.rights!.license! as License).uri
      )!,
    ]);
    expectModelsDeepEq(
      modelSet.agents,
      testModelSet.agents.filter(modelSetAgent =>
        work.rights!.agents.some(
          workAgent => workAgent.uri === modelSetAgent.uri
        )
      )
    );
    expectModelsDeepEq(modelSet.works, [work]);
    expect(modelSet.namedValues).to.be.empty;
    expectModelsDeepEq(modelSet.rightsStatements, [
      testModelSet.rightsStatements.find(
        rightsStatement =>
          rightsStatement.uri ===
          (work.rights!.statement! as RightsStatement).uri
      )!,
    ]);
  });

  it("should get a work event subset", () => {
    const work = testModelSet.works[0];
    const workCreation: WorkCreation = testModelSet
      .workEventsByWork(work.uri)
      .find(event => event instanceof WorkCreation)! as WorkCreation;

    const modelSet = sut.workEventsModelSet([workCreation], {
      agents: {},
      work: {},
    });
    expectModelsDeepEq(modelSet.works, [work]);
    expectModelsDeepEq(modelSet.agents, workCreation.agents);
    expectModelsDeepEq(modelSet.workEventsByWork(work.uri), [workCreation]);
  });
});
