import {
  ImageJoinSelector,
  ModelSetFactory,
  ThumbnailSelector,
  WorkAgent,
  WorkEventUnion,
  WorkLocation,
} from "@paradicms/models";
import {
  EventsSortProperty,
  GetWorkAgentsResult,
  GetWorkEventsResult,
  StringPropertyValueFacet,
  StringPropertyValueFilter,
  WorksSortProperty,
} from "@paradicms/api";
import {syntheticData} from "@paradicms/test";
import {dcterms} from "@paradicms/vocabularies";
import {expect} from "chai";
import {MemApi} from "../src/MemApi";
import {requireDefined, requireNonNull} from "@paradicms/utilities";
import {describe} from "mocha";

const THUMBNAIL_SELECTOR: ImageJoinSelector & ThumbnailSelector = {
  licenses: true,
  rightsStatements: true,
  targetDimensions: {height: 200, width: 200},
};

describe("MemApi", () => {
  const modelSet = ModelSetFactory.fromDataset(syntheticData);
  const sut = new MemApi({
    modelSet,
  });

  it("getCollections returns all available collections", async () => {
    const {
      modelSet: collectionsModelSet,
      totalCollectionsCount,
    } = await sut.getCollections({
      limit: Number.MAX_SAFE_INTEGER,
      offset: 0,
    });
    expect(totalCollectionsCount).to.eq(modelSet.collections.length);
    expect(modelSet.collections.map(collection => collection.key)).to.deep.eq(
      collectionsModelSet.collections.map(collection => collection.key)
    );
  });

  it("getEvents returns all available events (timeline)", async () => {
    const {modelSet: eventsModelSet, totalEventsCount} = await sut.getEvents(
      {
        filters: [],
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
      },
      {filters: []}
    );
    expect(totalEventsCount).to.eq(modelSet.events.length);
    expect(modelSet.collections.map(collection => collection.key)).to.deep.eq(
      eventsModelSet.collections.map(collection => collection.key)
    );
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

  it("getWorkAgents returns the other models associated with an agent", async () => {
    const result = await sut.getWorkAgents(
      {
        agentJoinSelector: {
          thumbnail: THUMBNAIL_SELECTOR,
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
    // Not all work agents will have images
    expect(workAgents.some(workAgent => workAgent.agent.images.length > 0)).to
      .be.true;
    expect(
      workAgents.some(
        workAgent => workAgent.agent.thumbnail(THUMBNAIL_SELECTOR) !== null
      )
    ).to.be.true;
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
        eventJoinSelector: {
          agents: {},
          location: true,
          thumbnail: THUMBNAIL_SELECTOR,
        },
      },
      {
        filters: [],
      }
    );

    const workEvents = getWorkEvents(result);
    expect(
      workEvents.some(
        workEvent =>
          workEvent.type === "WorkCreation" && workEvent.creators.length > 0
      )
    ).to.be.true;
    expect(
      workEvents.some(
        workEvent =>
          workEvent.type === "WorkModification" &&
          workEvent.contributors.length > 0
      )
    ).to.be.true;
    expect(workEvents.some(workEvent => workEvent.images.length > 0)).to.be
      .true;
    expect(
      workEvents.some(
        workEvent => workEvent.thumbnail(THUMBNAIL_SELECTOR) !== null
      )
    ).to.be.true;
  });

  it("getWorkEvents sorted by date", async () => {
    const result = await sut.getWorkEvents(
      {
        limit: 2,
        offset: 0,
        sort: {
          ascending: false,
          property: EventsSortProperty.DATE,
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
          property: EventsSortProperty.LABEL,
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

  it("getWorkKeys returns a collection's work keys (multi-page-exhibition)", async () => {
    const collection = modelSet.collections[0];
    expect(collection.works).not.to.be.empty;
    const result = await sut.getWorkKeys(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
      },
      {
        filters: [
          {
            includeValues: [collection.key],
            type: "CollectionValue",
          },
        ],
      }
    );
    expect(result.totalWorksCount).to.be.lt(modelSet.works.length);
    expect(result.totalWorksCount).to.eq(collection.works.length);
    expect(result.workKeys).to.deep.eq(collection.works.map(work => work.key));
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

  it("getWorks return a single work by key (multi-page-exhibition work page)", async () => {
    const expectedWork = modelSet.works[0];

    const actualWorks = (
      await sut.getWorks(
        {
          limit: 1, //Number.MAX_SAFE_INTEGER,
          offset: 0,
        },
        {
          filters: [
            {
              includeKeys: [expectedWork.key],
              type: "Key",
            },
          ],
        }
      )
    ).modelSet.works;

    expect(actualWorks).to.have.length(1);
    expect(actualWorks[0].key).to.eq(expectedWork.key);
  });
});
