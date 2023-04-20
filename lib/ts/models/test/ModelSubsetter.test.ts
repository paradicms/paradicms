import {expect} from "chai";
import {
  License,
  Location,
  RightsStatement,
  WorkClosing,
  WorkOpening,
} from "../src";
import {ModelSubsetter} from "../src/ModelSubsetter";
import {NamedModel} from "../src/NamedModel";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {WorkCreation} from "../src/WorkCreation";
import {testModelSet} from "./testModelSet";

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
  const completeModelSet = testModelSet;
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
          work.agents.some(
            agent =>
              agent.agent.thumbnail(THUMBNAIL_SELECTOR)!.uri === image.uri
          )
      )
    );
    expect(workModelSet.agents).to.not.be.empty;
    for (const agent of workModelSet.agents) {
      expect(agent.thumbnail(THUMBNAIL_SELECTOR)).to.not.be.null;
    }
    expectModelsDeepEq(workModelSet.licenses, [
      completeModelSet.licenses.find(
        license => license.uri === (work.license! as License).uri
      )!,
    ]);
    expectModelsDeepEq(
      workModelSet.agents,
      completeModelSet.agents.filter(modelSetAgent =>
        work.agents.some(workAgent => workAgent.agent.uri === modelSetAgent.uri)
      )
    );
    expect(workModelSet.concepts).to.be.empty;
    expectModelsDeepEq(workModelSet.rightsStatements, [
      completeModelSet.rightsStatements.find(
        rightsStatement =>
          rightsStatement.uri === (work.rightsStatement! as RightsStatement).uri
      )!,
    ]);
    expectModelsDeepEq(workModelSet.works, [work]);
    for (const work of workModelSet.works) {
      expect(work.location).not.to.be.null;
      expect(work.location!.location.uri).to.not.be.empty;
      expect(work.location!.location.lat).not.to.be.undefined;
    }
    expectModelsDeepEq(workModelSet.workEvents, work.events);
  });

  it("should get a work event subset", () => {
    const work = completeModelSet.works[0];
    let workClosing: WorkClosing | undefined;
    let workCreation: WorkCreation | undefined;
    let workOpening: WorkOpening | undefined;
    for (const workEvent of completeModelSet.workEventsByWorkUri(work.uri)) {
      switch (workEvent.type) {
        case "WorkClosing":
          workClosing = workEvent;
          break;
        case "WorkCreation":
          workCreation = workEvent;
          break;
        case "WorkOpening":
          workOpening = workEvent;
          break;
      }
    }

    const workEventsModelSet = sut
      .workEventsModelSet([workCreation!], {
        agents: {},
        location: true,
        work: {},
      })
      .build();
    expectModelsDeepEq(workEventsModelSet.works, [work]);
    expectModelsDeepEq(workEventsModelSet.agents, workCreation!.agents);
    expectModelsDeepEq(workEventsModelSet.works[0].events, [
      workClosing!,
      workCreation!,
      workOpening!,
    ]);
    for (const event of workEventsModelSet.works[0].events) {
      expect(event.location).not.to.be.null;
      expect(event.location).not.to.be.instanceof(String);
      const location: Location = event.location! as Location;
      expect(location.lat).not.to.be.undefined;
    }
  });
});
