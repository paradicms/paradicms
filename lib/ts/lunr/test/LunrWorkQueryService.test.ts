import {expect} from "chai";
import {LunrWorkQueryService} from "../src/LunrWorkQueryService";
import {ModelSet, visitWorkEvent, WorkClosing, WorkCreation, WorkOpening} from "@paradicms/models";
import {vra} from "@paradicms/vocabularies";
import {syntheticData} from "@paradicms/test";
import {
  StringPropertyValueFacet,
  StringPropertyValueFilter,
  WorkEventsSortProperty,
  WorksSortProperty
} from "@paradicms/services";

describe("LunrWorkQueryService", () => {
  const modelSet = ModelSet.fromDatasetCore(syntheticData);
  const sut = new LunrWorkQueryService({
    modelSet
  });

  it("getWorkAgents returns at least one agent from an empty query", async () => {
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

  it("getWorkAgents returns the works associated with an agent", async () => {
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

  it("getWorkEvents returns at least one event from an empty query", async () => {
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

  it("getWorkEvents returns the other models associated with an event", async () => {
    const result = await sut.getWorkEvents(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
        workEventJoinSelector: {
          agents: {},
          location: true,
          work: {}
        }
      },
      {
        filters: [],
      }
    );

    expect(result.modelSet.works).to.not.be.empty;
    for (const workEvent of result.modelSet.workEvents) {
      expect(workEvent.location).to.not.be.null;
      expect(workEvent.work).to.not.be.null;
      visitWorkEvent(workEvent, {
        visitWorkClosing(workClosing: WorkClosing): void {
        },
        visitWorkCreation(workCreation: WorkCreation): void {
          expect(workCreation.creatorAgents).to.not.be.empty;
        },
        visitWorkOpening(workOpening: WorkOpening): void {
        },
      });
    }
  });

  it("getWorkEvents sorts by date", async () => {
    const result = await sut.getWorkEvents(
        {
          limit: 2,
          offset: 0,
          sort: {
            ascending: false,
            property: WorkEventsSortProperty.DATE
          }
        },
        {
          filters: [],
        }
    );

    const workEvents = result.modelSet.workEvents;
    expect(workEvents).to.have.length(2);
    expect(workEvents[0].compareByDate(workEvents[1]) > 0);
  });

  it("getWorkEvents sorts by title", async () => {
    const result = await sut.getWorkEvents(
        {
          limit: 2,
          offset: 0,
          sort: {
            ascending: false,
            property: WorkEventsSortProperty.TITLE
          }
        },
        {
          filters: [],
        }
    );

    const workEvents = result.modelSet.workEvents;
    expect(workEvents).to.have.length(2);
    expect(workEvents[0].title.localeCompare(workEvents[1].title) > 0);
  });

  it("getWorkLocations returns all work locations", async () => {
    // All locations should be represented
    const expectedWorkLocations = [];
    for (const work of modelSet.works) {
      if (work.location) {
        expectedWorkLocations.push(work.location);
      }
      for (const event of work.events) {
        if (event.workLocation) {
          expectedWorkLocations.push(event.workLocation);
        }
      }
    }

    const result = await sut.getWorkLocations({}, {
      filters: [],
    });

    expect(result.workLocations).to.have.length(expectedWorkLocations.length);
    for (const work of modelSet.works) {
      for (const expectedWorkLocation of expectedWorkLocations) {
        const resultWorkLocation = result.workLocations.find(resultWorkLocation => resultWorkLocation.work.uri === work.uri && resultWorkLocation.location.lat === expectedWorkLocation.location.lat && resultWorkLocation.location.long === expectedWorkLocation.location.long);
        expect(resultWorkLocation).to.not.be.undefined;
        expect(resultWorkLocation!.work.title).to.eq(work.title);
      }
    }
  });

  it("getWorks returns facets", async () => {
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
          label: "Publisher",
          propertyUri: vra.technique.value,
          type: "StringPropertyValue"
        } as StringPropertyValueFilter],
      }
    );

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

  it("getWorks returns at least one work from an empty query", async () => {
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

  it("getWorks returns fewer works from a freetext query", async () => {
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
        text: "Collection0Work2",
      }
    );

    expect(allResult.modelSet.works).to.not.be.empty;
    expect(fewerResult.modelSet.works).to.not.be.empty;
    expect(fewerResult.modelSet.works.length).to.be.lessThan(
      allResult.modelSet.works.length
    );
  });

  it("getWorks sorts by title", async () => {
    const allWorkUris = (await sut.getWorks(
        {
          offset: 0,
          limit: 4,
        },
        {
          filters: [],
        }
    )).modelSet.works.map(work => work.uri);

    const sortedWorkUris = (await sut.getWorks(
        {
          offset: 0,
          limit: 4,
          sort: {
            ascending: false,
            property: WorksSortProperty.TITLE
          }
        },
        {
          filters: [],
        }
    )).modelSet.works.map(work => work.uri);

    expect(sortedWorkUris).not.to.deep.eq(allWorkUris);
  });
});
