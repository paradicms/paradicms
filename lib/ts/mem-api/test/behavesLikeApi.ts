import {
  Api,
  GetModelsResult,
  StringPropertyValueFacet,
  StringPropertyValueFilter,
} from "@paradicms/api";
import {
  ModelSetFactory,
  WorkAgent,
  WorkEvent,
  WorkLocation,
} from "@paradicms/models";
import {syntheticData} from "@paradicms/test";
import {requireDefined, requireNonNull} from "@paradicms/utilities";
import {dcterms} from "@paradicms/vocabularies";
import {expect} from "chai";
import {it} from "mocha";
import {expectModelKeysDeepEq} from "./expectModelKeysDeepEq";
import {expectModelsDeepEq} from "./expectModelsDeepEq";
import {testThumbnailSelector} from "./testThumbnailSelector";

export const behavesLikeApi = (api: Api) => {
  const completeModelSet = ModelSetFactory.fromDataset(syntheticData);

  it("getCollections returns all available collections", async () => {
    const {
      modelSet: actualModelSet,
      totalModelsCount: actualTotalCollectionsCount,
    } = await api.getCollections();
    expect(actualTotalCollectionsCount).to.eq(
      completeModelSet.collections.length
    );
    expectModelsDeepEq(
      completeModelSet.collections,
      actualModelSet.collections
    );
  });

  it("getCollections returns the first collection with works (exhibitions)", async () => {
    const {
      modelSet: actualModelSet,
      totalModelsCount: actualTotalCollectionsCount,
    } = await api.getCollections({
      query: {
        filters: [
          {
            exists: true,
            type: "CollectionWorksExistence",
          },
        ],
      },
    });
    expect(actualTotalCollectionsCount).to.eq(
      completeModelSet.collections.length
    );
    expectModelsDeepEq(
      completeModelSet.collections,
      actualModelSet.collections
    );
  });

  it("getEventKeys returns a all event keys (timeline event pages)", async () => {
    expect(completeModelSet.events).not.to.be.empty;
    const actualResult = await api.getEventKeys();
    expect(actualResult.totalModelsCount).to.be.eq(
      completeModelSet.events.length
    );
    expectModelKeysDeepEq(
      actualResult.modelKeys,
      completeModelSet.events.map(event => event.key)
    );
  });

  it("getEvents returns all available events (timeline index page)", async () => {
    const {
      modelSet: actualModelSet,
      totalModelsCount: actualTotalEventsCount,
    } = await api.getEvents({
      query: {
        filters: [
          {
            exists: true,
            type: "EventSortDateExistence",
          },
        ],
      },
    });
    expect(actualTotalEventsCount).to.eq(completeModelSet.events.length);
    expectModelsDeepEq(completeModelSet.events, actualModelSet.events);
  });

  it("getEvents returns a single event by its key (timeline event page)", async () => {
    const expectedEvent = completeModelSet.events[0];
    const {
      modelSet: actualModelSet,
      totalModelsCount: actualTotalEventsCount,
    } = await api.getEvents({
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

  it("getPropertyGroupKeys returns all property group keys (worksheet feature set edit)", async () => {
    const {
      modelKeys: actualPropertyGroupKeys,
      totalModelsCount: actualTotalPropertyGroupsCount,
    } = await api.getPropertyGroupKeys();
    expect(actualTotalPropertyGroupsCount).to.eq(
      completeModelSet.propertyGroups.length
    );
    expectModelKeysDeepEq(
      actualPropertyGroupKeys,
      completeModelSet.propertyGroups.map(propertyGroup => propertyGroup.key)
    );
  });

  it("getPropertyGroups returns all property groups (worksheet edit)", async () => {
    const {
      modelSet: actualModelSet,
      totalModelsCount: actualTotalPropertyGroupsCount,
    } = await api.getPropertyGroups();
    expect(actualTotalPropertyGroupsCount).to.eq(
      completeModelSet.propertyGroups.length
    );
    expectModelsDeepEq(
      actualModelSet.propertyGroups,
      completeModelSet.propertyGroups
    );
  });

  it("getProperties returns all properties (work search index)", async () => {
    const {
      modelSet: actualModelSet,
      totalModelsCount: actualTotalPropertiesCount,
    } = await api.getProperties();
    expect(actualTotalPropertiesCount).to.eq(
      completeModelSet.properties.length
    );
    expectModelsDeepEq(actualModelSet.properties, completeModelSet.properties);
  });

  const getWorkAgents = (result: GetModelsResult): readonly WorkAgent[] => {
    const workAgentsByKey: {[index: string]: WorkAgent} = {};
    for (const work of result.modelSet.works) {
      for (const workAgent of work.agents) {
        // expect(workAgentsByKey[workAgent.agent.key]).to.be.undefined;
        workAgentsByKey[workAgent.agent.key] = workAgent;
      }
    }

    return result.modelKeys.map(workAgentKey =>
      requireNonNull(workAgentsByKey[workAgentKey])
    );
  };

  it("getWorkAgents returns at least one agent from an empty query", async () => {
    const result = await api.getWorkAgents();

    expect(getWorkAgents(result)).not.to.be.empty;
  });

  it("getWorkAgents returns the other models associated with an agent", async () => {
    const actualWorkAgents = getWorkAgents(
      await api.getWorkAgents({
        joinSelector: {
          thumbnail: testThumbnailSelector,
          // works: {},
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
        workAgent => workAgent.agent.thumbnail(testThumbnailSelector) !== null
      )
    ).to.be.true;
  });

  const getWorkEvents = (result: GetModelsResult) => {
    const workEventsByKey: {[index: string]: WorkEvent} = {};
    for (const work of result.modelSet.works) {
      for (const workEvent of work.events) {
        expect(workEventsByKey[workEvent.key]).to.be.undefined;
        workEventsByKey[workEvent.key] = workEvent;
      }
    }

    return result.modelKeys.map(workEventKey =>
      requireDefined(workEventsByKey[workEventKey], workEventKey)
    );
  };

  it("getWorkEvents returns at least one event from an empty query", async () => {
    const actualResult = await api.getWorkEvents();
    const actualWorkEvents = getWorkEvents(actualResult);
    expect(actualResult.totalModelsCount).to.be.gt(0);
    expect(actualWorkEvents).to.have.length.lte(actualResult.totalModelsCount); // modelSet.workEvents = only named
  });

  it("getWorkEvents returns the other models associated with an event", async () => {
    const actualWorkEvents = getWorkEvents(
      await api.getWorkEvents({
        joinSelector: {
          agents: {},
          location: true,
          thumbnail: testThumbnailSelector,
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
        workEvent => workEvent.thumbnail(testThumbnailSelector) !== null
      )
    ).to.be.true;
  });

  it("getWorkEvents sorted by date", async () => {
    const actualResult = await api.getWorkEvents({
      limit: 2,
      offset: 0,
      sort: {
        ascending: false,
        property: "date",
      },
    });

    const actualWorkEvents = getWorkEvents(actualResult);
    expect(actualWorkEvents).to.have.length(2);
    expect(actualWorkEvents[0].compareByDate(actualWorkEvents[1]) > 0);
  });

  it("getWorkEvents sorts by title", async () => {
    const actualResult = await api.getWorkEvents({
      limit: 2,
      offset: 0,
      sort: {
        ascending: false,
        property: "label",
      },
    });

    const actualWorkEvents = getWorkEvents(actualResult);
    expect(actualWorkEvents).to.have.length(2);
    expect(
      actualWorkEvents[0].label.localeCompare(actualWorkEvents[1].label) > 0
    );
  });

  it("getWorkLocations returns all work locations", async () => {
    const actualResult = await api.getWorkLocations();

    for (const work of completeModelSet.works) {
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
    const expectedCollection = completeModelSet.collections[0];
    expect(expectedCollection.works).not.to.be.empty;
    const actualResult = await api.getWorkKeys({
      query: {
        filters: [
          {
            includeValues: [expectedCollection.key],
            type: "WorkCollectionValue",
          },
        ],
      },
    });
    expect(actualResult.totalModelsCount).to.be.lt(
      completeModelSet.works.length
    );
    expect(actualResult.totalModelsCount).to.eq(
      expectedCollection.works.length
    );
    expectModelKeysDeepEq(
      actualResult.modelKeys,
      expectedCollection.works.map(work => work.key)
    );
  });

  it("getWorks returns facets with thumbnails", async () => {
    const actualResult = await api.getWorks({
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
    const actualResult = await api.getWorks({
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
    const allResult = await api.getWorks();

    const fewerResult = await api.getWorks({
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
      await api.getWorks({
        offset: 0,
        limit: 4,
      })
    ).modelSet.works.map(work => work.key);

    const sortedWorkKeys = (
      await api.getWorks({
        offset: 0,
        limit: 4,
        sort: {
          ascending: false,
          property: "label",
        },
      })
    ).modelSet.works.map(work => work.key);

    expect(sortedWorkKeys).not.to.deep.eq(allWorkKeys);
  });

  it("getWorks return a single work by key (multi-page-exhibition work page)", async () => {
    const expectedWork = completeModelSet.works[0];

    const actualWorks = (
      await api.getWorks({
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
};
