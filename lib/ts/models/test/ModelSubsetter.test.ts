import {expect} from "chai";
import {ModelSubsetter} from "../src/ModelSubsetter";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {
  License,
  Location,
  ModelSet,
  RightsStatement,
  WorkClosing,
  WorkOpening,
} from "../src";
import {NamedModel} from "../src/NamedModel";
import {syntheticData} from "@paradicms/test";
import {WorkCreation} from "../src/WorkCreation";
import invariant from "ts-invariant";

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

  it("should get a work subset (work page)", () => {
    const work = testModelSet.works[0];
    const modelSet = sut
      .workModelSet(work, {
        agents: {
          thumbnail: THUMBNAIL_SELECTOR,
        },
        allImages: true,
        collections: {},
        location: true,
        events: {},
      })
      .build();
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
    expect(modelSet.concepts).to.be.empty;
    expectModelsDeepEq(modelSet.rightsStatements, [
      testModelSet.rightsStatements.find(
        rightsStatement =>
          rightsStatement.uri ===
          (work.rights!.statement! as RightsStatement).uri
      )!,
    ]);
    expectModelsDeepEq(modelSet.works, [work]);
    for (const work of modelSet.works) {
      expect(work.location).not.to.be.null;
      expect(work.location!.location.node.termType).to.eq("NamedNode");
      expect(work.location!.location.lat).not.to.be.undefined;
    }
    expectModelsDeepEq(modelSet.workEvents, work.events);
  });

  it("should get a work event subset", () => {
    const work = testModelSet.works[0];
    const workClosing: WorkClosing = testModelSet
      .workEventsByWork(work.uri)
      .find(event => event instanceof WorkClosing)! as WorkClosing;
    const workCreation: WorkCreation = testModelSet
      .workEventsByWork(work.uri)
      .find(event => event instanceof WorkCreation)! as WorkCreation;
    const workOpening: WorkOpening = testModelSet
      .workEventsByWork(work.uri)
      .find(event => event instanceof WorkOpening)! as WorkOpening;

    const modelSet = sut
      .workEventsModelSet([workCreation], {
        agents: {},
        location: true,
        work: {},
      })
      .build();
    expectModelsDeepEq(modelSet.works, [work]);
    expectModelsDeepEq(modelSet.agents, workCreation.agents);
    expectModelsDeepEq(modelSet.works[0].events, [
      workClosing,
      workCreation,
      workOpening,
    ]);
    for (const event of modelSet.works[0].events) {
      expect(event.location).not.to.be.null;
      invariant(event.location instanceof Location);
      const location: Location = event.location!;
      expect(location.lat).not.to.be.undefined;
    }
  });
});
