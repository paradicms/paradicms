import {expect} from "chai";
import {LunrWorkQueryService} from "../src/LunrWorkQueryService";
import {Dataset} from "@paradicms/models";
import {testDataTrig} from "../../models/test/testDataTrig";
import {defaultAppConfiguration} from "@paradicms/configuration";
import {CollectionValueFacet, InstitutionValueFacet, StringPropertyValueFacet} from "@paradicms/facets";

describe("LunrWorkQueryService", () => {
  const configuration = defaultAppConfiguration;
  const dataset = Dataset.parse(testDataTrig);
  const sut = new LunrWorkQueryService({
    configuration,
    dataset,
  });

  it("getWorkAgents return at least one agent from an empty query", async () => {
    const result = await sut.getWorkAgents(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
      },
      {
        filters: configuration.search!.filters,
      }
    );

    expect(result.dataset.agents).to.not.be.empty;
    expect(result.dataset.works).to.be.empty;
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
        filters: configuration.search!.filters,
      }
    );

    expect(result.dataset.agents).to.not.be.empty;
    let haveAgentWorks = false;
    for (const agent of result.dataset.agents) {
      const agentWorks = result.dataset.agentWorks(agent.uri);
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
        filters: configuration.search!.filters,
      }
    );

    expect(result.workEvents).to.not.be.empty;
    expect(result.totalWorkEventsCount).to.be.gt(0);
  });

  it("getWorkEvents return the works associated with an event", async () => {
    const result = await sut.getWorkEvents(
      {
        limit: Number.MAX_SAFE_INTEGER,
        offset: 0,
      },
      {
        filters: configuration.search!.filters,
      }
    );

    expect(result.dataset.works).to.not.be.empty;
    for (const workEvent of result.workEvents) {
      expect(result.dataset.workByUri(workEvent.workUri)).to.not.be.null;
    }
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
        filters: configuration.search!.filters,
      }
    );

    expect(result.dataset.works).to.not.be.empty;

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

  it("getWorks return fewer works from a freetext query", async () => {
    const allResult = await sut.getWorks(
      {
        offset: 0,
        limit: Number.MAX_SAFE_INTEGER,
      },
      {
        filters: configuration.search!.filters,
      }
    );

    const fewerResult = await sut.getWorks(
      {
        offset: 0,
        limit: Number.MAX_SAFE_INTEGER,
      },
      {
        filters: configuration.search!.filters!,
        text: "Institution0Collection0Work2",
      }
    );

    expect(allResult.dataset.works).to.not.be.empty;
    expect(fewerResult.dataset.works).to.not.be.empty;
    expect(fewerResult.dataset.works.length).to.be.lessThan(
      allResult.dataset.works.length
    );
  });
});
