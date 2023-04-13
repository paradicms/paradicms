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
  const completeModelSet = ModelSet.fromDatasetCore(syntheticData);
  const sut = new ModelSubsetter({
    completeModelSet: completeModelSet,
  });

  it("should get a work subset (work page)", () => {
    const work = completeModelSet.works[0];
    const workModelSet = sut
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
      workModelSet.collections,
      completeModelSet.collections.filter(collection =>
        work.collectionUris.some(
          workCollectionUri => workCollectionUri === collection.uri
        )
      )
    );
    expectModelsDeepEq(
      workModelSet.images,
      completeModelSet.images.filter(
        image =>
          image.depictsUri === work.uri ||
          work.rights!.agents.some(
            agent => agent.thumbnail(THUMBNAIL_SELECTOR)!.uri === image.uri
          )
      )
    );
    expect(workModelSet.agents).to.not.be.empty;
    for (const agent of workModelSet.agents) {
      expect(agent.thumbnail(THUMBNAIL_SELECTOR)).to.not.be.null;
    }
    expectModelsDeepEq(workModelSet.licenses, [
      completeModelSet.licenses.find(
        license => license.uri === (work.rights!.license! as License).uri
      )!,
    ]);
    expectModelsDeepEq(
      workModelSet.agents,
      completeModelSet.agents.filter(modelSetAgent =>
        work.rights!.agents.some(
          workAgent => workAgent.uri === modelSetAgent.uri
        )
      )
    );
    expect(workModelSet.concepts).to.be.empty;
    expectModelsDeepEq(workModelSet.rightsStatements, [
      completeModelSet.rightsStatements.find(
        rightsStatement =>
          rightsStatement.uri ===
          (work.rights!.rightsStatement! as RightsStatement).uri
      )!,
    ]);
    expectModelsDeepEq(workModelSet.works, [work]);
    for (const work of workModelSet.works) {
      expect(work.location).not.to.be.null;
      expect(work.location!.location.node.termType).to.eq("NamedNode");
      expect(work.location!.location.lat).not.to.be.undefined;
    }
    expectModelsDeepEq(workModelSet.workEvents, work.events);
  });

  it("should get a work event subset", () => {
    const work = completeModelSet.works[0];
    const workClosing: WorkClosing = completeModelSet
      .workEventsByWork(work.uri)
      .find(event => event instanceof WorkClosing)! as WorkClosing;
    const workCreation: WorkCreation = completeModelSet
      .workEventsByWork(work.uri)
      .find(event => event instanceof WorkCreation)! as WorkCreation;
    const workOpening: WorkOpening = completeModelSet
      .workEventsByWork(work.uri)
      .find(event => event instanceof WorkOpening)! as WorkOpening;

    const workEventsModelSet = sut
      .workEventsModelSet([workCreation], {
        agents: {},
        location: true,
        work: {},
      })
      .build();
    expectModelsDeepEq(workEventsModelSet.works, [work]);
    expectModelsDeepEq(workEventsModelSet.agents, workCreation.agents);
    expectModelsDeepEq(workEventsModelSet.works[0].events, [
      workClosing,
      workCreation,
      workOpening,
    ]);
    for (const event of workEventsModelSet.works[0].events) {
      expect(event.location).not.to.be.null;
      invariant(event.location instanceof Location);
      const location: Location = event.location!;
      expect(location.lat).not.to.be.undefined;
    }
  });
});
