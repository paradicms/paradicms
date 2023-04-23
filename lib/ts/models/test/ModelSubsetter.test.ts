import {getRdfInstanceQuads} from "@paradicms/rdf";
import {cms} from "@paradicms/vocabularies";
import {NamedNode} from "@rdfjs/types";
import {expect} from "chai";
import {Location, ModelSet, WorkClosing, WorkOpening} from "../src";
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

const countModelSetNamedAgents = (modelSet: ModelSet): number =>
  countModelSetNamedRdfInstances(cms.Agent, modelSet);

const countModelSetImages = (modelSet: ModelSet): number =>
  countModelSetNamedRdfInstances(cms.Image, modelSet);

const countModelSetNamedLicenses = (modelSet: ModelSet): number =>
  countModelSetNamedRdfInstances(cms.License, modelSet);

const countModelSetNamedRdfInstances = (
  class_: NamedNode,
  modelSet: ModelSet
) =>
  [
    ...getRdfInstanceQuads({
      class_,
      dataset: modelSet.toRdf(),
    }).values(),
  ].filter(quad => quad.subject.termType === "NamedNode").length;

const countModelSetRightsStatements = (modelSet: ModelSet): number =>
  countModelSetNamedRdfInstances(cms.RightsStatement, modelSet);

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
        work.collections.some(
          workCollection => workCollection.uri === collection.uri
        )
      )
    );
    expect(countModelSetNamedAgents(workModelSet)).to.eq(2);
    for (const work of workModelSet.works) {
      expect(work.agents).to.have.length(8); // 2 named agents + 2 blank node agents + 4 literal agents
      for (const agent of work.agents) {
        if (agent.agent.uri) {
          expect(agent.agent.thumbnail(THUMBNAIL_SELECTOR)).to.not.be.null;
        }
      }
    }
    expect(workModelSet.concepts).to.have.length(0);

    expect(countModelSetImages(workModelSet)).to.eq(12);

    expect(work.license).to.not.be.null;
    expect(countModelSetNamedLicenses(workModelSet)).to.eq(1);

    expect(work.rightsStatement).to.not.be.null;
    expect(countModelSetRightsStatements(workModelSet)).to.eq(1);

    expectModelsDeepEq(workModelSet.works, [work]);
    for (const work of workModelSet.works) {
      expect(work.location).not.to.be.null;
      expect(work.location!.location.uri).to.not.be.empty;
      expect(work.location!.location.lat).not.to.be.undefined;
    }

    // expectModelsDeepEq(workModelSet.workEvents, work.events);
    expect(work.events).to.have.length(3);
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
    // expectModelsDeepEq(workEventsModelSet.agents, workCreation!.agents);
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
