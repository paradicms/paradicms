import {getRdfInstanceQuads} from "@paradicms/rdf";
import {cms} from "@paradicms/vocabularies";
import {NamedNode} from "@rdfjs/types";
import {expect} from "chai";
import {
  Location,
  ModelSet,
  ModelSetBuilder,
  WorkClosing,
  WorkOpening,
} from "../src";
import {NamedModel} from "../src/NamedModel";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {WorkCreation} from "../src/WorkCreation";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

const THUMBNAIL_SELECTOR: ThumbnailSelector = {
  targetDimensions: {height: 200, width: 200},
};

const expectModelsDeepEq = <ModelT extends NamedModel>(
  leftModels: readonly ModelT[],
  rightModels: readonly ModelT[]
) =>
  expect(
    leftModels
      .map(model => model.iri)
      .concat()
      .sort()
  ).to.deep.eq(
    rightModels
      .map(model => model.iri)
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

describe("ModelSetBuilder", () => {
  const completeModelSet = testModelSet;
  const completeModelSetSize = completeModelSet.toRdf().size;
  let sut: ModelSetBuilder;

  beforeEach(() => {
    sut = new ModelSetBuilder();
  });

  afterEach(() => {
    // Ensure the original model set hasn't been mutated
    expect(completeModelSet.toRdf().size).to.eq(completeModelSetSize);
  });

  it("should get an agents subset (agents gallery)", () => {
    const work = completeModelSet.works[0];
    const agents = work.agents.map(agent => agent.agent);
    const namedAgents = agents.filter(agent => agent.iri);
    expect(namedAgents.length).to.be.lt(agents.length);
    const agentsModelSet = sut
      .addAgents(agents, {
        thumbnail: THUMBNAIL_SELECTOR,
      })
      .build();
    expect(countModelSetNamedAgents(agentsModelSet)).to.eq(namedAgents.length);
    expect(countModelSetImages(agentsModelSet)).to.eq(namedAgents.length);
    for (const namedAgent of namedAgents) {
      expect(agentsModelSet.imagesByDepictsIri(namedAgent.iri!).length).to.eq(
        1
      );
    }
  });

  it("should get a property group subset (worksheet feature set edit)", () => {
    const propertyGroup = completeModelSet.propertyGroups[0];
    expect(propertyGroup.properties).to.not.be.empty;
    const propertyGroupModelSet = sut
      .addPropertyGroup(propertyGroup, {
        properties: {
          thumbnail: THUMBNAIL_SELECTOR,
        },
      })
      .build();
    expectModelsDeepEq(
      propertyGroupModelSet.properties,
      propertyGroup.properties
    );
    expect(countModelSetImages(propertyGroupModelSet)).to.eq(
      propertyGroup.properties.length
    );
  });

  it("should get a property groups subset (worksheet edit)", () => {
    const propertyGroups = completeModelSet.propertyGroups;
    expect(propertyGroups).to.not.be.empty;
    const propertyGroupsModelSet = sut
      .addPropertyGroups(propertyGroups, {
        thumbnail: THUMBNAIL_SELECTOR,
      })
      .build();
    expectModelsDeepEq(propertyGroups, propertyGroupsModelSet.propertyGroups);
    expect(propertyGroupsModelSet.properties).to.be.empty;
    expect(countModelSetImages(propertyGroupsModelSet)).to.eq(
      propertyGroups.length
    );
  });

  it("should get a property groups subset (worksheet review)", () => {
    const propertyGroups = completeModelSet.propertyGroups;
    expect(propertyGroups).to.not.be.empty;
    expect(propertyGroups.length).to.eq(1);
    const propertyGroupsModelSet = sut
      .addPropertyGroup(propertyGroups[0], {
        properties: {
          rangeValues: {},
        },
      })
      .build();
    expectModelsDeepEq(propertyGroups, propertyGroupsModelSet.propertyGroups);
    expect(propertyGroups[0].properties).not.to.be.empty;
    expectModelsDeepEq(
      propertyGroups[0].properties,
      propertyGroupsModelSet.properties
    );
    expect(countModelSetImages(propertyGroupsModelSet)).to.eq(0);
    expect(
      propertyGroupsModelSet.properties.some(
        property => property.rangeValues.length > 0
      )
    ).to.be.true;
  });

  it("should get a property subset (worksheet feature edit)", () => {
    for (const property of completeModelSet.properties) {
      if (property.rangeValues.length === 0) {
        continue;
      }
      const propertyModelSet = sut
        .addProperty(property, {
          rangeValues: {
            thumbnail: THUMBNAIL_SELECTOR,
          },
        })
        .build();
      expect(countModelSetImages(propertyModelSet)).to.eq(
        property.rangeValues.length
      );
      return;
    }
  });

  it("should get a work subset (work page)", () => {
    const work = completeModelSet.works[0];
    const workModelSet = sut
      .addWork(work, {
        agents: {
          thumbnail: THUMBNAIL_SELECTOR,
        },
        events: {},
        images: {},
        collections: {},
        location: true,
        license: true,
        rightsStatement: true,
      })
      .build();
    expectModelsDeepEq(
      workModelSet.collections,
      completeModelSet.collections.filter(collection =>
        work.collections.some(
          workCollection => workCollection.iri === collection.iri
        )
      )
    );
    expect(countModelSetNamedAgents(workModelSet)).to.eq(2);
    for (const work of workModelSet.works) {
      expect(work.agents).to.have.length(8); // 2 named agents + 2 blank node agents + 4 literal agents
      for (const agent of work.agents) {
        if (agent.agent.iri) {
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
      expect(work.location!.location.iri).to.not.be.empty;
      expect(work.location!.location.lat).not.to.be.undefined;
    }

    // expectModelsDeepEq(workModelSet.workEvents, work.events);
    expect(work.events).to.have.length(3);
  });

  it("should get a work events subset (work events timeline)", () => {
    const work = completeModelSet.works[0];
    // @ts-ignore
    let workClosing: WorkClosing | undefined;
    let workCreation: WorkCreation | undefined;
    // @ts-ignore
    let workOpening: WorkOpening | undefined;
    for (const workEvent of completeModelSet.workEventsByWorkIri(work.iri)) {
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
      .addWorkEvent(workCreation!, {
        agents: {},
        location: true,
        work: {},
      })
      .build();
    expectModelsDeepEq(workEventsModelSet.works, [work]);
    // expectModelsDeepEq(workEventsModelSet.agents, workCreation!.agents);
    expectModelsDeepEq(workEventsModelSet.works[0].events, [
      // workClosing!,
      workCreation!,
      // workOpening!,
    ]);
    for (const event of workEventsModelSet.works[0].events) {
      expect(event.location).not.to.be.null;
      expect(event.location).not.to.be.instanceof(String);
      const location: Location = event.location! as Location;
      expect(location.lat).not.to.be.undefined;
    }
  });
});
