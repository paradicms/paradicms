import {ModelSetFactory, WorkLocation} from "@paradicms/models";
import {
    StringPropertyValueFacet,
    StringPropertyValueFilter,
    WorkEventsSortProperty,
    WorksSortProperty
} from "@paradicms/services";
import {syntheticData} from "@paradicms/test";
import {vra} from "@paradicms/vocabularies";
import {expect} from "chai";
import {MemWorkQueryService} from "../src/MemWorkQueryService";

describe("MemWorkQueryService", () => {
  const modelSet = ModelSetFactory.fromDatasetCore(syntheticData);
  const sut = new MemWorkQueryService({
    modelSet
  });

  it("getNamedWorkAgents returns at least one agent from an empty query", async () => {
    const result = await sut.getNamedWorkAgents(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
      },
      {
        filters: [],
      }
    );

    expect(result.modelSet.works).to.be.empty;
    expect(result.workAgentUris).not.to.be.empty;
  });

  it("getNamedWorkAgents returns the works associated with an agent", async () => {
    const result = await sut.getNamedWorkAgents(
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

    expect(result.workAgentUris).to.not.be.empty;
    let haveAgentWorks = false;
    for (const agent of result.workAgentUris.map(workAgentUri => result.modelSet.agentByUri(workAgentUri))) {
      const agentWorks = result.modelSet.agentWorks(agent.uri!);
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
      switch (workEvent.type) {
          case "WorkCreation":
              expect(workEvent.creators).to.not.be.empty;
              break;
      }
    }
  });

  it("getWorkEvents sorted by date", async () => {
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
            property: WorkEventsSortProperty.LABEL
          }
        },
        {
          filters: [],
        }
    );

    const workEvents = result.modelSet.workEvents;
    expect(workEvents).to.have.length(2);
    expect(workEvents[0].label.localeCompare(workEvents[1].label) > 0);
  });

  it("getWorkLocations returns all work locations", async () => {
    // All locations should be represented
    const expectedWorkLocations: WorkLocation[] = [];
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
        expect(resultWorkLocation!.work.label).to.eq(work.label);
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
        text: "CmsCollection0CmsWork2",
      }
    );

    expect(allResult.modelSet.works).to.not.be.empty;
    expect(fewerResult.modelSet.works).to.not.be.empty;
    expect(fewerResult.modelSet.works.length).to.be.lessThan(
      allResult.modelSet.works.length
    );
  });

  it("getWorks sorts by label", async () => {
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
            property: WorksSortProperty.LABEL
          }
        },
        {
          filters: [],
        }
    )).modelSet.works.map(work => work.uri);

    expect(sortedWorkUris).not.to.deep.eq(allWorkUris);
  });
});