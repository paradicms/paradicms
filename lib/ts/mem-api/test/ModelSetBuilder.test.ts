import {ModelSet} from "@paradicms/models";
import {getRdfInstanceQuads} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {dcterms, schema} from "@paradicms/vocabularies";
import {NamedNode} from "@rdfjs/types";
import {expect} from "chai";
import {describe} from "mocha";
import {testModelSet} from "../../models/test/testModelSet";
import {ModelSetBuilder} from "../src/ModelSetBuilder";
import {expectModelsDeepEq} from "./expectModelsDeepEq";
import {testThumbnailSelector} from "./testThumbnailSelector";

const modelSetAgentIris = (modelSet: ModelSet): readonly string[] =>
  modelSetModelIris(schema.Organization, modelSet).concat(
    modelSetModelIris(schema.Person, modelSet)
  );

const modelSetImageIris = (modelSet: ModelSet): readonly string[] =>
  modelSetModelIris(schema.ImageObject, modelSet);

const modelSetLicenseIris = (modelSet: ModelSet): readonly string[] =>
  modelSetModelIris(dcterms.LicenseDocument, modelSet);

const modelSetModelIris = (
  class_: NamedNode,
  modelSet: ModelSet
): readonly string[] =>
  [
    // @ts-ignore
    ...getRdfInstanceQuads({
      class_,
      dataset: modelSet.toRdf(),
      includeSubclasses: false,
    }).values(),
  ]
    .filter(quad => quad.subject.termType === "NamedNode")
    .map(quad => quad.subject.value);

const modelSetRightsStatementIris = (modelSet: ModelSet): readonly string[] =>
  modelSetModelIris(dcterms.RightsStatement, modelSet);

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
    for (const agent of agents) {
      sut.addAgent(agent, {thumbnail: testThumbnailSelector});
    }
    const agentsModelSet = sut.build();
    expect(modelSetAgentIris(agentsModelSet)).to.have.length(3); // Two creators from the synthetic data, one from the sameAs
    // The WikidataPerson isn't counted because it doesn't have an unambiguous rdf:type
    expect(modelSetImageIris(agentsModelSet)).to.have.length(5); // One original image, one thumbnail per named agent + the sameAs agent image
    // for (const namedAgent of namedAgents) {
    //   expect(
    //     agentsModelSet.imagesByDepictsIri(namedAgent.iri).length
    //   ).to.eq(1);
    // }
  });

  it("should get a property group subset (worksheet feature set edit)", () => {
    expect(completeModelSet.propertyGroups).not.to.be.empty;
    const propertyGroup = completeModelSet.propertyGroups[0];
    expect(propertyGroup.properties).to.not.be.empty;
    const propertyGroupModelSet = sut
      .addPropertyGroup(propertyGroup, {
        properties: {
          thumbnail: testThumbnailSelector,
        },
      })
      .build();
    expectModelsDeepEq(
      propertyGroupModelSet.properties,
      propertyGroup.properties
    );
    const imageIris = modelSetImageIris(propertyGroupModelSet);
    expect(imageIris).to.have.length(propertyGroup.properties.length * 2); // One original image, one thumbnail per property
  });

  it("should get a property groups subset (worksheet edit)", () => {
    const propertyGroups = completeModelSet.propertyGroups;
    expect(propertyGroups).to.not.be.empty;
    for (const propertyGroup of propertyGroups) {
      sut.addPropertyGroup(propertyGroup, {thumbnail: testThumbnailSelector});
    }
    const propertyGroupsModelSet = sut.build();
    expectModelsDeepEq(propertyGroups, propertyGroupsModelSet.propertyGroups);
    expect(propertyGroupsModelSet.properties).to.be.empty;
    expect(modelSetImageIris(propertyGroupsModelSet)).to.have.length(
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
    expect(modelSetImageIris(propertyGroupsModelSet)).to.have.length(0);
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
            thumbnail: testThumbnailSelector,
          },
        })
        .build();
      expect(modelSetImageIris(propertyModelSet)).to.have.length(
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
            thumbnail: testThumbnailSelector,
          },
          description: {
            agents: true,
            licenses: true,
            rightsStatements: true,
          },
          events: {
            description: {
              licenses: true,
              rightsStatements: true,
            },
            location: true,
          },
          images: {
            agents: true,
            licenses: true,
            rightsStatements: true,
          },
          location: true,
          propertyValues: {
            property: true,
            propertyGroup: true,
          },
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

    expect(modelSetImageIris(workModelSet)).to.have.length(8); // 3 work original images, 2 agent original images, 2 agent thumbnails + 1 sameAs

    expect(subsetWork.agents).to.have.length(3); // Two work creators, one creator from the sameAs Wikidata entity
    const agentImages = subsetWork.agents.flatMap(agent => agent.agent.images);
    expect(agentImages).to.have.length(3);
    const agentThumbnails = agentImages.flatMap(
      agentImage => agentImage.thumbnails
    );
    expect(agentThumbnails).to.have.length(2);

    expect(workModelSet.concepts).to.have.length(17);

    expect(subsetWork.description!.licenses).not.to.be.empty;
    expect(modelSetLicenseIris(workModelSet)).to.have.length(3);
    expect(subsetWork.description!.rightsHolders).not.to.be.empty;
    expect(subsetWork.description!.rightsStatements).to.not.be.empty;
    expect(modelSetRightsStatementIris(workModelSet)).to.have.length(2);

    expect(subsetWork.images).to.have.length(3); // 1 DcImage and 1 SchemaImageObject in the data, 1 SchemaImageObject from Wikimedia Commons
    const thumbnails = subsetWork.images.flatMap(image => image.thumbnails);
    expect(thumbnails).to.be.empty; // Didn't ask for them

    // expectModelsDeepEq(
    //   workModelSet.properties,
    //   completeModelSet.properties
    //   // completeModelSet.properties.filter(property =>
    //   //   property.iris.some(propertyIri =>
    //   //     propertyIri.startsWith(dcterms[""].value)
    //   //   )
    //   // )
    // );
    expectModelsDeepEq(
      workModelSet.propertyGroups,
      completeModelSet.propertyGroups
    );

    if (subsetWork.location) {
      expect(subsetWork.location!.location.iris).to.not.be.empty;
      expect(subsetWork.location!.location.centroid!.latitude).not.to.be
        .undefined;
      expect(subsetWork.location!.location.centroid!.latitude).not.to.eq(0);
      expect(subsetWork.location!.location.centroid!.longitude).not.to.eq(0);
    }

    expect(subsetWork.events).to.have.length(1); // Only the sameAs WikidataWork has a creation event
    expect(
      subsetWork.events.find(workEvent => workEvent.type === "WorkCreation")
    ).not.to.be.undefined;
    // expect(
    //   subsetWork.events.find(workEvent => workEvent.type === "WorkModification")
    // ).not.to.be.undefined;
  });

  it("should get a work events subset (work events timeline)", () => {
    const work = completeModelSet.works[0];
    const expectedWorkEvents = work.events;

    const workEventsModelSet = sut
      .addWork(work, {
        events: {agents: {}, location: true, thumbnail: testThumbnailSelector},
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

  it("should get all top-level events (timeline app)", () => {
    for (const event of completeModelSet.events) {
      sut.addEvent(event, {
        agents: {},
        thumbnail: testThumbnailSelector,
      });
    }
    const eventsModelSet = sut.build();

    expectModelsDeepEq(completeModelSet.events, eventsModelSet.events);
    expectModelsDeepEq(
      completeModelSet.events.flatMap(event => event.agents),
      completeModelSet.events.flatMap(event => event.agents)
    );
    expect(modelSetImageIris(eventsModelSet)).to.have.length(
      completeModelSet.events.length * 2
    );
  });
});
