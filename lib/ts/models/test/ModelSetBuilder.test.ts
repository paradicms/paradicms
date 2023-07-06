import {getRdfInstanceQuads} from "@paradicms/rdf";
import {cc, dcmitype, dcterms, foaf, schema} from "@paradicms/vocabularies";
import {NamedNode} from "@rdfjs/types";
import {expect} from "chai";
import {ImageJoinSelector, Model, ModelSet, ModelSetBuilder} from "../src";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";
import {requireNonNull} from "@paradicms/utilities";

const THUMBNAIL_SELECTOR: ImageJoinSelector & ThumbnailSelector = {
  licenses: true,
  rightsStatements: true,
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
  countModelSetNamedRdfInstances(dcmitype.Image, modelSet) +
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
      includeSubclasses: false,
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
    expect(countModelSetNamedAgents(agentsModelSet)).to.eq(2);
    // The WikidataPerson isn't counted because it doesn't have an unambiguous rdf:type
    expect(countModelSetImages(agentsModelSet)).to.eq(4); // One original image, one thumbnail per named agent
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
      propertyGroup.properties.length * 2
    ); // One original image, one thumbnail per property
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
      propertyGroups.length * 2
    ); // One original image, one thumbnail per property group
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
        property.rangeValues.length * 2
      ); // One original image, one thumbnail per value
      return;
    }
  });

  it("should get a work subset (work page)", () => {
    const workModelSet = sut
      .addWork(
        requireNonNull(
          completeModelSet.workByIri("http://example.com/collection0/work0")
        ),
        {
          agents: {
            thumbnail: THUMBNAIL_SELECTOR,
          },
          events: {
            location: true,
          },
          images: {
            agents: {},
            licenses: true,
            rightsStatements: true,
          },
          licenses: true,
          location: true,
          propertyValues: {
            property: {
              groups: {},
            },
          },
          rightsStatements: true,
        }
      )
      .build();
    // expectModelsDeepEq(
    //   workModelSet.collections,
    //   completeModelSet.collections.filter(collection =>
    //     work.collections.some(workCollection =>
    //       hasCommonIri(workCollection.iris, collection.iris)
    //     )
    //   )
    // );
    expectModelsDeepEq(workModelSet.works, [
      requireNonNull(
        completeModelSet.workByIri("http://example.com/collection0/work0")
      ),
    ]);
    const subsetWork = workModelSet.works[0];

    expect(countModelSetImages(workModelSet)).to.eq(7); // 3 work original images, 2 agent original images, 2 agent thumbnails

    expect(subsetWork.agents).to.have.length(7); // 3 named agents + 2 blank node agents + 2 literal agents
    const agentImages = subsetWork.agents.flatMap(agent => agent.agent.images);
    expect(agentImages).to.have.length(2);
    const agentThumbnails = agentImages.flatMap(
      agentImage => agentImage.thumbnails
    );
    expect(agentThumbnails).to.have.length(2);

    expect(workModelSet.concepts).to.have.length(16);

    expect(subsetWork.images).to.have.length(3); // 1 DcImage and 1 SchemaImageObject in the data, 1 SchemaImageObject from Wikimedia Commons
    const thumbnails = subsetWork.images.flatMap(image => image.thumbnails);
    expect(thumbnails).to.be.empty; // Didn't ask for them

    expect(subsetWork.licenses).not.to.be.empty;
    expect(countModelSetNamedLicenses(workModelSet)).to.eq(3);

    expectModelsDeepEq(
      workModelSet.properties,
      completeModelSet.properties.filter(property =>
        property.iris.some(propertyIri =>
          propertyIri.startsWith(dcterms[""].value)
        )
      )
    );
    expectModelsDeepEq(
      workModelSet.propertyGroups,
      completeModelSet.propertyGroups
    );

    expect(subsetWork.rightsStatements).to.not.be.empty;
    expect(countModelSetRightsStatements(workModelSet)).to.eq(2);

    if (subsetWork.location) {
      expect(subsetWork.location!.location.iris).to.not.be.empty;
      expect(subsetWork.location!.location.centroid!.latitude).not.to.be
        .undefined;
      expect(subsetWork.location!.location.centroid!.latitude).not.to.eq(0);
      expect(subsetWork.location!.location.centroid!.longitude).not.to.eq(0);
    }

    expect(subsetWork.events).to.have.length(3);
    expect(
      subsetWork.events.find(workEvent => workEvent.type === "WorkCreation")
    ).not.to.be.undefined;
    expect(
      subsetWork.events.find(workEvent => workEvent.type === "WorkModification")
    ).not.to.be.undefined;
  });

  it("should get a work events subset (work events timeline)", () => {
    const work = completeModelSet.works[0];
    const expectedWorkEvents = work.events;

    const workEventsModelSet = sut
      .addWork(work, {
        events: {agents: {}, location: true, thumbnail: THUMBNAIL_SELECTOR},
      })
      .build();
    expectModelsDeepEq(workEventsModelSet.works, [work]);
    // const agents = workEventsModelSet.works.flatMap(work =>
    //   work.agents.map(agent => agent.agent)
    // );
    const actualWorkEvents = workEventsModelSet.works.flatMap(
      work => work.events
    );
    // expectModelsDeepEq(
    //   agents,
    //   workCreation!.agents.concat(work.agents.map(agent => agent.agent))
    // );
    expectModelsDeepEq(actualWorkEvents, expectedWorkEvents);
    // for (const workEvent of workEvents) {
    //   expect(workEvent.location).not.to.be.null;
    //   expect(workEvent.location!.latitude).not.to.eq(0);
    //   expect(workEvent.location!.longitude).not.to.eq(0);
    // }
  });
});
