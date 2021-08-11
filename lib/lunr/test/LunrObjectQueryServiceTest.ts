import {expect} from "chai";
import {LunrObjectQueryService} from "../src/LunrObjectQueryService";
import {defaultConfiguration, IndexedDataset} from "@paradicms/models";
import {testDataset} from "../../models/test/testDataset";

describe("LunrObjectQueryService", () => {
  const configuration = defaultConfiguration.objectSearch;
  const dataset = new IndexedDataset(testDataset);
  const sut = new LunrObjectQueryService({
    configuration,
    dataset,
  });

  it("should return at least one object from an empty query", async () => {
    const result = await sut.getObjects({
      query: {
        filters: configuration.filters,
        text: null,
      },
      offset: 0,
      limit: Number.MAX_SAFE_INTEGER,
    });
    expect(result.dataset.objects).to.not.be.empty;
  });

  it("should return fewer objects from a freetext query", async () => {
    const allResult = await sut.getObjects({
      query: {
        filters: configuration.filters,
        text: null,
      },
      offset: 0,
      limit: Number.MAX_SAFE_INTEGER,
    });

    const fewerResult = await sut.getObjects({
      query: {
        filters: configuration.filters,
        text: "Institution0Collection0Object2",
      },
      offset: 0,
      limit: Number.MAX_SAFE_INTEGER,
    });

    expect(allResult.dataset.objects).to.not.be.empty;
    expect(fewerResult.dataset.objects).to.not.be.empty;
    expect(fewerResult.dataset.objects.length).to.be.lessThan(
      allResult.dataset.objects.length
    );
  });
});
