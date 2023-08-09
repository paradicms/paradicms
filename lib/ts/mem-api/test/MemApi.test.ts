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
      modelSet: actualModelSet,
      totalCollectionsCount: actualTotalCollectionsCount,
    } = await sut.getCollections();
    expect(actualTotalCollectionsCount).to.eq(modelSet.collections.length);
    expect(modelSet.collections.map(collection => collection.key)).to.deep.eq(
      actualModelSet.collections.map(collection => collection.key)
    );
  });

  it("getCollections returns the first collection with works (exhibitions)", async () => {
    const {
      modelSet: actualModelSet,
      totalCollectionsCount: actualTotalCollectionsCount,
    } = await sut.getCollections({
      query: {
        filters: [
          {
            exists: true,
            type: "CollectionWorksExistence",
          },
        ],
      },
    });
    expect(actualTotalCollectionsCount).to.eq(modelSet.collections.length);
    expect(modelSet.collections.map(collection => collection.key)).to.deep.eq(
      actualModelSet.collections.map(collection => collection.key)
    );
  });

  it("getEventKeys returns a all event keys (timeline event pages)", async () => {
    expect(modelSet.events).not.to.be.empty;
    const actualResult = await sut.getEventKeys();
    expect(actualResult.totalEventsCount).to.be.eq(modelSet.events.length);
    expect(actualResult.eventKeys).to.deep.eq(
      modelSet.events.map(event => event.key)
    );
  });

  it("getEvents returns all available events (timeline index page)", async () => {
    const {
      modelSet: actualModelSet,
      totalEventsCount: actualTotalEventsCount,
    } = await sut.getEvents({
      query: {
        filters: [
          {
            exists: true,
            type: "EventSortDateExistence",
          },
        ],
      },
    });
    expect(actualTotalEventsCount).to.eq(modelSet.events.length);
    expect(modelSet.events.map(event => event.key)).to.deep.eq(
      actualModelSet.events.map(event => event.key)
    );
  });

  it("getEvents returns a single event by its key (timeline event page)", async () => {
    const expectedEvent = modelSet.events[0];
    const {
      modelSet: actualModelSet,
      totalEventsCount: actualTotalEventsCount,
    } = await sut.getEvents({
      query: {
        filters: [
          {
            includeKeys: [expectedEvent.key],
            type: "Key",
          },
        ],
      },
    });
    expect(actualTotalEventsCount).to.eq(1);
    expect(actualModelSet.events).to.have.length(1);
    expect(actualModelSet.events[0].key).to.eq(expectedEvent.key);
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
    const result = await sut.getWorkAgents();

    expect(getWorkAgents(result)).not.to.be.empty;
  });

  it("getWorkAgents returns the other models associated with an agent", async () => {
    const actualWorkAgents = getWorkAgents(
      await sut.getWorkAgents({
        agentJoinSelector: {
          thumbnail: THUMBNAIL_SELECTOR,
          works: {},
        },
      })
    );
    expect(actualWorkAgents).not.to.be.empty;
    for (const workAgent of actualWorkAgents) {
      expect(workAgent.agent.label).not.to.be.empty;
      // expect(workAgent.agent.works).not.to.be.empty;
    }
    // Not all work agents will have images
    expect(
      actualWorkAgents.some(workAgent => workAgent.agent.images.length > 0)
    ).to.be.true;
    expect(
      actualWorkAgents.some(
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
    const actualResult = await sut.getWorkEvents();
    const actualWorkEvents = getWorkEvents(actualResult);
    expect(actualResult.totalWorkEventsCount).to.be.gt(0);
    expect(actualWorkEvents).to.have.length.lte(
      actualResult.totalWorkEventsCount
    ); // modelSet.workEvents = only named
  });

  it("getWorkEvents returns the other models associated with an event", async () => {
    const actualWorkEvents = getWorkEvents(
      await sut.getWorkEvents({
        eventJoinSelector: {
          agents: {},
          location: true,
          thumbnail: THUMBNAIL_SELECTOR,
        },
      })
    );
    expect(
      actualWorkEvents.some(
        workEvent =>
          workEvent.type === "WorkCreation" && workEvent.creators.length > 0
      )
    ).to.be.true;
    expect(
      actualWorkEvents.some(
        workEvent =>
          workEvent.type === "WorkModification" &&
          workEvent.contributors.length > 0
      )
    ).to.be.true;
    expect(actualWorkEvents.some(workEvent => workEvent.images.length > 0)).to
      .be.true;
    expect(
      actualWorkEvents.some(
        workEvent => workEvent.thumbnail(THUMBNAIL_SELECTOR) !== null
      )
    ).to.be.true;
  });

  it("getWorkEvents sorted by date", async () => {
    const actualResult = await sut.getWorkEvents({
      limit: 2,
      offset: 0,
      sort: {
        ascending: false,
        property: EventsSortProperty.DATE,
      },
    });

    const actualWorkEvents = getWorkEvents(actualResult);
    expect(actualWorkEvents).to.have.length(2);
    expect(actualWorkEvents[0].compareByDate(actualWorkEvents[1]) > 0);
  });

  it("getWorkEvents sorts by title", async () => {
    const actualResult = await sut.getWorkEvents({
      limit: 2,
      offset: 0,
      sort: {
        ascending: false,
        property: EventsSortProperty.LABEL,
      },
    });

    const actualWorkEvents = getWorkEvents(actualResult);
    expect(actualWorkEvents).to.have.length(2);
    expect(
      actualWorkEvents[0].label.localeCompare(actualWorkEvents[1].label) > 0
    );
  });

  it("getWorkLocations returns all work locations", async () => {
    const actualResult = await sut.getWorkLocations();

    for (const work of modelSet.works) {
      const expectResultWorkLocation = (expectedWorkLocation: WorkLocation) => {
        const resultWorkLocation = actualResult.workLocations.find(
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
    const expectedCollection = modelSet.collections[0];
    expect(expectedCollection.works).not.to.be.empty;
    const actualResult = await sut.getWorkKeys({
      query: {
        filters: [
          {
            includeValues: [expectedCollection.key],
            type: "WorkCollectionValue",
          },
        ],
      },
    });
    expect(actualResult.totalWorksCount).to.be.lt(modelSet.works.length);
    expect(actualResult.totalWorksCount).to.eq(expectedCollection.works.length);
    expect(actualResult.workKeys).to.deep.eq(
      expectedCollection.works.map(work => work.key)
    );
  });

  it("getWorks returns facets with thumbnails", async () => {
    const actualResult = await sut.getWorks({
      query: {
        filters: [
          {
            label: "Publisher",
            propertyIri: dcterms.publisher.value,
            type: "StringPropertyValue",
          } as StringPropertyValueFilter,
        ],
      },
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
    });

    expect(
      actualResult.facets.some(facet => {
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
    const actualResult = await sut.getWorks({
      valueFacetValueThumbnailSelector: {
        targetDimensions: {
          height: 200,
          width: 200,
        },
      },
    });

    expect(actualResult.modelSet.works).to.not.be.empty;
  });

  it("getWorks returns fewer works from a freetext query", async () => {
    const allResult = await sut.getWorks();

    const fewerResult = await sut.getWorks({
      query: {
        text: "Collection0Work2",
      },
    });

    expect(allResult.modelSet.works).to.not.be.empty;
    expect(fewerResult.modelSet.works).to.not.be.empty;
    expect(fewerResult.modelSet.works.length).to.be.lessThan(
      allResult.modelSet.works.length
    );
  });

  it("getWorks sorts by label", async () => {
    const allWorkKeys = (
      await sut.getWorks({
        offset: 0,
        limit: 4,
      })
    ).modelSet.works.map(work => work.key);

    const sortedWorkKeys = (
      await sut.getWorks({
        offset: 0,
        limit: 4,
        sort: {
          ascending: false,
          property: WorksSortProperty.LABEL,
        },
      })
    ).modelSet.works.map(work => work.key);

    expect(sortedWorkKeys).not.to.deep.eq(allWorkKeys);
  });

  it("getWorks return a single work by key (multi-page-exhibition work page)", async () => {
    const expectedWork = modelSet.works[0];

    const actualWorks = (
      await sut.getWorks({
        limit: 1, //Number.MAX_SAFE_INTEGER,
        offset: 0,
        query: {
          filters: [
            {
              includeKeys: [expectedWork.key],
              type: "Key",
            },
          ],
        },
      })
    ).modelSet.works;

    expect(actualWorks).to.have.length(1);
    expect(actualWorks[0].key).to.eq(expectedWork.key);
  });
});
