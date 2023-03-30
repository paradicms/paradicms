import {expect} from "chai";
import {ModelSubsetter} from "../src/ModelSubsetter";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {Image, License, ModelSet, RightsStatement} from "../src";
import {NamedModel} from "../src/NamedModel";
import {syntheticData} from "@paradicms/test";
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
  const testModelSet = ModelSet.fromDatasetCore(syntheticData);
  const sut = new ModelSubsetter({
    completeModelSet: testModelSet,
  });

  it("should get a collection with its works and their thumbnails (collection page)", () => {
    const collection = testModelSet.collections[0];
    const modelSet = sut.collectionModelSet(collection, {
      works: {
        propertyValues: {thumbnail: THUMBNAIL_SELECTOR},
        thumbnail: THUMBNAIL_SELECTOR,
      },
    });
    expectModelsDeepEq(modelSet.collections, [collection]);

    const images: Image[] = [];
    for (const work of testModelSet.collectionWorks(collection.uri)) {
      // for (const image of work.images) {
      //   if (!images.some(otherImage => otherImage.uri === image.uri)) {
      //     images.push(image);
      //   }
      // }
      {
        const thumbnail = work.thumbnail(THUMBNAIL_SELECTOR);
        if (
          thumbnail &&
          !images.some(otherImage => otherImage.uri === thumbnail.uri)
        ) {
          images.push(thumbnail);
        }
      }

      for (const property of testModelSet.properties) {
        for (const propertyValue of work.propertyValues(property.uri)) {
          const thumbnail = propertyValue.thumbnail(THUMBNAIL_SELECTOR);
          if (
            thumbnail &&
            !images.some(otherImage => otherImage.uri === thumbnail.uri)
          ) {
            images.push(thumbnail);
          }
        }
      }
    }
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
    // expect(modelSet.concepts).to.not.be.empty;
    expectModelsDeepEq(modelSet.rightsStatements, [
      testModelSet.rightsStatements.find(
        rightsStatement =>
          rightsStatement.uri ===
          "http://rightsstatements.org/vocab/InC-EDU/1.0/"
      )!,
    ]);
  });

  it("should get a work with its collections, all images, agents, and agents' thumbnails (work page)", () => {
    const work = testModelSet.works[0];
    const modelSet = sut.workModelSet(work, {
      agents: {
        thumbnail: THUMBNAIL_SELECTOR,
      },
      allImages: true,
      collections: {},
      events: {},
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
    expect(modelSet.concepts).to.be.empty;
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
