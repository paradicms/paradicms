import {expect} from "chai";
import {LunrWorkQueryService} from "../src/LunrWorkQueryService";
import {Dataset, defaultConfiguration} from "@paradicms/models";
import {testDataTrig} from "../../models/test/testDataTrig";

describe("LunrWorkQueryService", () => {
  const configuration = defaultConfiguration.workSearch;
  const dataset = Dataset.parse(testDataTrig);
  const sut = new LunrWorkQueryService({
    configuration,
    dataset,
  });

  it("should return at least one work from an empty query", async () => {
    const result = await sut.getWorks({
      query: {
        filters: configuration.filters,
      },
      offset: 0,
      limit: Number.MAX_SAFE_INTEGER,
    });
    expect(result.dataset.works).to.not.be.empty;
  });

  it("should return fewer works from a freetext query", async () => {
    const allResult = await sut.getWorks({
      query: {
        filters: configuration.filters,
      },
      offset: 0,
      limit: Number.MAX_SAFE_INTEGER,
    });

    const fewerResult = await sut.getWorks({
      query: {
        filters: configuration.filters,
        text: "Institution0Collection0Work2",
      },
      offset: 0,
      limit: Number.MAX_SAFE_INTEGER,
    });

    expect(allResult.dataset.works).to.not.be.empty;
    expect(fewerResult.dataset.works).to.not.be.empty;
    expect(fewerResult.dataset.works.length).to.be.lessThan(
      allResult.dataset.works.length
    );
  });
});
