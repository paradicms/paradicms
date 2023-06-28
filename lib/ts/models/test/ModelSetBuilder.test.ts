import {getRdfInstanceQuads} from "@paradicms/rdf";
import {cc, cms, dcterms, foaf, schema} from "@paradicms/vocabularies";
import {NamedNode} from "@rdfjs/types";
import {expect} from "chai";
import {
  Model,
  ModelSet,
  ModelSetBuilder,
  WorkClosing,
  WorkOpening,
} from "../src";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {WorkCreation} from "../src/WorkCreation";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";
import {requireNonNull} from "@paradicms/utilities";

const THUMBNAIL_SELECTOR: ThumbnailSelector = {
  targetDimensions: {height: 200, width: 200},
};

const expectModelsDeepEq = <ModelT extends Model>(
  leftModels: readonly ModelT[],
  rightModels: readonly ModelT[]
) =>
  expect(
    leftModels
      .map(model => model.key)
      .concat()
      .sort()
  ).to.deep.eq(
    rightModels
      .map(model => model.key)
      .concat()
      .sort()
  );

const countModelSetNamedAgents = (modelSet: ModelSet): number =>
  countModelSetNamedRdfInstances(foaf.Agent, modelSet) +
  countModelSetNamedRdfInstances(schema.Organization, modelSet) +
  countModelSetNamedRdfInstances(schema.Person, modelSet);

const countModelSetImages = (modelSet: ModelSet): number =>
  countModelSetNamedRdfInstances(cms.Image, modelSet) +
  countModelSetNamedRdfInstances(schema.ImageObject, modelSet);

const countModelSetNamedLicenses = (modelSet: ModelSet): number =>
  countModelSetNamedRdfInstances(cc.License, modelSet);

const countModelSetNamedRdfInstances = (
  class_: NamedNode,
  modelSet: ModelSet
) =>
  [
    // @ts-ignore
    ...getRdfInstanceQuads({
      class_,
      dataset: modelSet.toRdf(),
    }).values(),
  ].filter(quad => quad.subject.termType === "NamedNode").length;

const countModelSetRightsStatements = (modelSet: ModelSet): number =>
  countModelSetNamedRdfInstances(dcterms.RightsStatement, modelSet);

// const hasCommonIri = (
//   leftIris: readonly string[],
//   rightIris: readonly string[]
// ): boolean => {
//   for (const leftIri of leftIris) {
//     for (const rightIri of rightIris) {
//       if (leftIri === rightIri) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

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
    const namedAgents = agents.filter(agent => agent.iris.length > 0);
    expect(namedAgents.length).to.be.lt(agents.length);
    const agentsModelSet = sut
      .addAgents(agents, {
        thumbnail: THUMBNAIL_SELECTOR,
      })
      .build();
    expect(countModelSetNamedAgents(agentsModelSet)).to.eq(namedAgents.length);
    expect(countModelSetImages(agentsModelSet)).to.eq(namedAgents.length);
    // for (const namedAgent of namedAgents) {
    //   expect(
    //     agentsModelSet.imagesByDepictsIri(namedAgent.iris[0]).length
    //   ).to.eq(1);
    // }
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
    const work = requireNonNull(
      completeModelSet.workByIri("http://example.com/collection0/work0")
    );
    const workModelSet = sut
      .addWork(work, {
        agents: {
          thumbnail: THUMBNAIL_SELECTOR,
        },
        events: {
          location: true,
        },
        images: {
          agents: {},
          license: true,
          rightsStatement: true,
        },
        license: true,
        location: true,
        propertyValues: {
          property: {
            groups: {},
          },
        },
        rightsStatement: true,
      })
      .build();
    // expectModelsDeepEq(
    //   workModelSet.collections,
    //   completeModelSet.collections.filter(collection =>
    //     work.collections.some(workCollection =>
    //       hasCommonIri(workCollection.iris, collection.iris)
    //     )
    //   )
    // );
    expect(countModelSetNamedAgents(workModelSet)).to.eq(2);
    for (const work of workModelSet.works) {
      expect(work.agents).to.have.length(6); // 2 named agents + 2 blank node agents + 2 literal agents
      expect(
        work.agents.some(
          agent => agent.agent.thumbnail(THUMBNAIL_SELECTOR) !== null
        )
      );
    }
    expect(workModelSet.concepts).to.have.length(14);

    expect(countModelSetImages(workModelSet)).to.eq(13);

    expect(work.license).to.not.be.null;
    expect(countModelSetNamedLicenses(workModelSet)).to.eq(2);

    // There is no LocationPropertyValue, so exclude dcterms:spatial.
    expectModelsDeepEq(
      workModelSet.properties,
      completeModelSet.properties.filter(property =>
        property.iris.some(
          propertyIri =>
            propertyIri.startsWith(dcterms[""].value) &&
            propertyIri !== dcterms.spatial.value
        )
      )
    );
    expectModelsDeepEq(
      workModelSet.propertyGroups,
      completeModelSet.propertyGroups
    );

    expect(work.rightsStatement).to.not.be.null;
    expect(countModelSetRightsStatements(workModelSet)).to.eq(2);

    expectModelsDeepEq(workModelSet.works, [work]);
    for (const work of workModelSet.works) {
      expect(work.location).not.to.be.null;
      expect(work.location!.location.iris).to.not.be.empty;
      expect(work.location!.location.latitude).not.to.be.undefined;
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
    for (const workEvent of work.events) {
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
      .addWork(work, {events: {agents: {}, location: true}})
      .build();
    expectModelsDeepEq(workEventsModelSet.works, [work]);
    // const agents = workEventsModelSet.works.flatMap(work =>
    //   work.agents.map(agent => agent.agent)
    // );
    const workEvents = workEventsModelSet.works.flatMap(work => work.events);
    // expectModelsDeepEq(
    //   agents,
    //   workCreation!.agents.concat(work.agents.map(agent => agent.agent))
    // );
    expectModelsDeepEq(workEvents, [workClosing!, workCreation!, workOpening!]);
    for (const workEvent of workEvents) {
      expect(workEvent.location).not.to.be.null;
      expect(workEvent.location!.latitude).not.to.eq(0);
      expect(workEvent.location!.longitude).not.to.eq(0);
    }
  });
});
