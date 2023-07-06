import {
  ModelSetFactory,
  WorkAgent,
  WorkEventUnion,
  WorkLocation,
} from "@paradicms/models";
import {
  GetWorkAgentsResult,
  GetWorkEventsResult,
  StringPropertyValueFacet,
  StringPropertyValueFilter,
  WorkEventsSortProperty,
  WorksSortProperty,
} from "@paradicms/services";
import {syntheticData} from "@paradicms/test";
import {dcterms} from "@paradicms/vocabularies";
import {expect} from "chai";
import {MemWorkQueryService} from "../src/MemWorkQueryService";
import {requireDefined, requireNonNull} from "@paradicms/utilities";
import {describe} from "mocha";

describe("MemWorkQueryService", () => {
  const modelSet = ModelSetFactory.fromDataset(syntheticData);
  const sut = new MemWorkQueryService({
    modelSet,
  });

  const getWorkAgents = (result: GetWorkAgentsResult): readonly WorkAgent[] => {
    const workAgentsByKey: {[index: string]: WorkAgent} = {};
    for (const work of result.modelSet.works) {
      for (const workAgent of work.agents) {
        // expect(workAgentsByKey[workAgent.agent.key]).to.be.undefined;
        workAgentsByKey[workAgent.agent.key] = workAgent;
      }
    }

    return result.workAgentKeys.map(workAgentKey =>
      requireNonNull(workAgentsByKey[workAgentKey])
    );
  };

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

    expect(getWorkAgents(result)).not.to.be.empty;
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

    const workAgents = getWorkAgents(result);
    expect(workAgents).not.to.be.empty;
    for (const workAgent of workAgents) {
      expect(workAgent.agent.label).not.to.be.empty;
      // expect(workAgent.agent.works).not.to.be.empty;
    }
  });

  const getWorkEvents = (result: GetWorkEventsResult) => {
    const workEventsByKey: {[index: string]: WorkEventUnion} = {};
    for (const work of result.modelSet.works) {
      for (const workEvent of work.events) {
        expect(workEventsByKey[workEvent.key]).to.be.undefined;
        workEventsByKey[workEvent.key] = workEvent;
      }
    }

    return result.workEventKeys.map(workEventKey =>
      requireDefined(workEventsByKey[workEventKey], workEventKey)
    );
  };

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

    const workEvents = getWorkEvents(result);
    expect(result.totalWorkEventsCount).to.be.gt(0);
    expect(workEvents).to.have.length.lte(result.totalWorkEventsCount); // modelSet.workEvents = only named
  });

  it("getWorkEvents returns the other models associated with an event", async () => {
    const result = await sut.getWorkEvents(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
        workEventJoinSelector: {
          agents: {},
          location: true,
        },
      },
      {
        filters: [],
      }
    );

    for (const workEvent of getWorkEvents(result)) {
      // expect(workEvent.location).to.not.be.null;
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
          property: WorkEventsSortProperty.DATE,
        },
      },
      {
        filters: [],
      }
    );

    const workEvents = getWorkEvents(result);
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
          property: WorkEventsSortProperty.LABEL,
        },
      },
      {
        filters: [],
      }
    );

    const workEvents = getWorkEvents(result);
    expect(workEvents).to.have.length(2);
    expect(workEvents[0].label.localeCompare(workEvents[1].label) > 0);
  });

  it("getWorkLocations returns all work locations", async () => {
    const result = await sut.getWorkLocations(
      {requireCentroids: true},
      {
        filters: [],
      }
    );

    for (const work of modelSet.works) {
      const expectResultWorkLocation = (expectedWorkLocation: WorkLocation) => {
        const resultWorkLocation = result.workLocations.find(
          resultWorkLocation =>
            resultWorkLocation.work.key === work.key &&
            resultWorkLocation.location.centroid!.latitude ===
              expectedWorkLocation.location.centroid!.latitude &&
            resultWorkLocation.location.centroid!.longitude ===
              expectedWorkLocation.location.centroid!.longitude
        );
        expect(resultWorkLocation).to.not.be.undefined;
        expect(resultWorkLocation!.work.label).to.eq(work.label);
      };

      if (work.location) {
        expectResultWorkLocation(work.location);
      }
      for (const event of work.events) {
        if (event.workLocation) {
          expectResultWorkLocation(event.workLocation);
        }
      }
    }
  });

  it("getWorks returns facets with thumbnails", async () => {
    const result = await sut.getWorks(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
        valueFacetValueThumbnailSelector: {
          maxDimensions: {
            height: 200,
            width: 200,
          },
          targetDimensions: {
            height: 200,
            width: 200,
          },
        },
      },
      {
        filters: [
          {
            label: "Publisher",
            propertyIri: dcterms.publisher.value,
            type: "StringPropertyValue",
          } as StringPropertyValueFilter,
        ],
      }
    );

    expect(
      result.facets.some(facet => {
        if (facet.type !== "StringPropertyValue") {
          return false;
        }
        const value = (facet as StringPropertyValueFacet).values.find(
          value => !!value.thumbnail
        )!;
        expect(value).not.to.be.undefined;
        const thumbnail = value.thumbnail!;
        expect(thumbnail).not.to.be.undefined;
        expect(thumbnail.licenses).not.to.be.empty;
        expect(thumbnail.rightsStatements).not.to.be.empty;
        return true;
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
        filters: [],
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

  it("getWorks sorts by label", async () => {
    const allWorkKeys = (
      await sut.getWorks(
        {
          offset: 0,
          limit: 4,
        },
        {
          filters: [],
        }
      )
    ).modelSet.works.map(work => work.key);

    const sortedWorkKeys = (
      await sut.getWorks(
        {
          offset: 0,
          limit: 4,
          sort: {
            ascending: false,
            property: WorksSortProperty.LABEL,
          },
        },
        {
          filters: [],
        }
      )
    ).modelSet.works.map(work => work.key);

    expect(sortedWorkKeys).not.to.deep.eq(allWorkKeys);
  });
});
