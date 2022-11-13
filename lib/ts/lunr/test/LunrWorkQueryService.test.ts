import {expect} from "chai";
import {LunrWorkQueryService} from "../src/LunrWorkQueryService";
import {Dataset, visitWorkEvent, WorkCreation} from "@paradicms/models";
import {testDataTrig} from "../../models/test/testDataTrig";
import {CollectionValueFacet, InstitutionValueFacet, StringPropertyValueFacet} from "@paradicms/facets";
import {DCTERMS, VRA} from "@paradicms/vocabularies";
import {StringPropertyValueFilter} from "@paradicms/filters";

describe("LunrWorkQueryService", () => {
  const modelSet = Dataset.parse(testDataTrig);
  const sut = new LunrWorkQueryService({
    modelSet,
    resultWorkPropertyUris: [DCTERMS.title.value],
    searchWorkPropertyUris: [DCTERMS.title.value]
  });

  it("getWorkAgents return at least one agent from an empty query", async () => {
    const result = await sut.getWorkAgents(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
      },
      {
        filters: [],
      }
    );

    expect(result.modelSet.agents).to.not.be.empty;
    expect(result.modelSet.works).to.be.empty;
  });

  it("getWorkAgents return the works associated with an agent", async () => {
    const result = await sut.getWorkAgents(
      {
        agentJoinSelector: {
          works: {},
        },
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
      },
      {
        filters: [],
      }
    );

    expect(result.modelSet.agents).to.not.be.empty;
    let haveAgentWorks = false;
    for (const agent of result.modelSet.agents) {
      const agentWorks = result.modelSet.agentWorks(agent.uri);
      haveAgentWorks ||= agentWorks.length > 0;
      for (const work of agentWorks) {
        expect(work.agents.some(workAgent => workAgent.agent.uri === agent.uri)).to.be.true;
      }
    }
    expect(haveAgentWorks).to.be.true;
  });

  it("getWorkEvents return at least one event from an empty query", async () => {
    const result = await sut.getWorkEvents(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
      },
      {
        filters: [],
      }
    );

    expect(result.totalWorkEventsCount).to.be.gt(0);
    expect(result.modelSet.workEvents).to.have.length(result.totalWorkEventsCount);
    expect(result.workEventUris).to.have.length(result.totalWorkEventsCount);
  });

  it("getWorkEvents return the other models associated with an event", async () => {
    const result = await sut.getWorkEvents(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
        workEventJoinSelector: {
          agents: {},
          work: {}
        }
      },
      {
        filters: [],
      }
    );

    expect(result.modelSet.works).to.not.be.empty;
    for (const workEvent of result.modelSet.workEvents) {
      expect(workEvent.work).to.not.be.null;
      visitWorkEvent(workEvent, {
        visitWorkCreation(workCreation: WorkCreation): void {
          expect(workCreation.creatorAgents).to.not.be.empty;
        }
      });
    }
  });

  it("getWorkLocations should return all work locations", async () => {
    const result = await sut.getWorkLocations({}, {
      filters: [],
    });
    // All locations should be represented
    expect(result.workLocations).to.have.length(modelSet.works.flatMap(work => work.locations).length);
    for (const work of modelSet.works) {
      for (const workLocation of work.locations) {
        const resultWorkLocation = result.workLocations.find(resultWorkLocation => resultWorkLocation.work.uri === work.uri && resultWorkLocation.location.lat === workLocation.location.lat && resultWorkLocation.location.long === workLocation.location.long);
        expect(resultWorkLocation).to.not.be.undefined;
        expect(resultWorkLocation!.work.title).to.eq(work.title);
      }
    }
  });

  it("getWorks return facets", async () => {
    const result = await sut.getWorks(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
        valueFacetValueThumbnailSelector: {
          targetDimensions: {
            height: 200,
            width: 200,
          },
        },
      },
      {
        filters: [{
          label: "Collection",
          type: "CollectionValue",
        }, {
          label: "Institution",
          type: "InstitutionValue"
        }, {
          label: "Publisher",
          propertyUri: VRA.NS("technique").value,
          type: "StringPropertyValue"
        } as StringPropertyValueFilter],
      }
    );

    const collectionValueFacet = result.facets.find(
      facet => facet.type === "CollectionValue"
    ) as CollectionValueFacet | undefined;
    expect(collectionValueFacet).to.not.be.undefined;

    const institutionValueFacet = result.facets.find(
      facet => facet.type === "InstitutionValue"
    ) as InstitutionValueFacet | undefined;
    expect(institutionValueFacet).to.not.be.undefined;

    expect(
      result.facets.some(facet => {
        if (facet.type !== "StringPropertyValue") {
          return false;
        }
        return (facet as StringPropertyValueFacet).values.some(
          value => !!value.thumbnail
        );
      })
    ).to.be.true;
  });

  it("getWorks return at least one work from an empty query", async () => {
    const result = await sut.getWorks(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
        valueFacetValueThumbnailSelector: {
          targetDimensions: {
            height: 200,
            width: 200,
          },
        },
      },
      {
        filters: []
      }
    );

    expect(result.modelSet.works).to.not.be.empty;
  });

  it("getWorks return fewer works from a freetext query", async () => {
    const allResult = await sut.getWorks(
      {
        offset: 0,
        limit: Number.MAX_SAFE_INTEGER,
      },
      {
        filters: [],
      }
    );

    const fewerResult = await sut.getWorks(
      {
        offset: 0,
        limit: Number.MAX_SAFE_INTEGER,
      },
      {
        filters: []!,
        text: "Institution0Collection0Work2",
      }
    );

    expect(allResult.modelSet.works).to.not.be.empty;
    expect(fewerResult.modelSet.works).to.not.be.empty;
    expect(fewerResult.modelSet.works.length).to.be.lessThan(
      allResult.modelSet.works.length
    );
  });
});
