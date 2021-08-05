import {expect} from "chai";
import {VcccRdfObjectQueryService} from "~/services/VcccRdfObjectQueryService";
import {
  hardCodedConfiguration,
  titleFreetextFilter,
} from "~/services/HardCodedConfigurationQueryService";
import {FreetextFilter} from "~/models/FreetextFilter";

describe("N3StoreObjectQueryService", () => {
  const sut = new VcccRdfObjectQueryService(hardCodedConfiguration);

  it("should return at least one object from an empty query", async () => {
    const result = await sut.getObjects({
      filters: hardCodedConfiguration.filters,
      offset: 0,
      limit: Number.MAX_SAFE_INTEGER,
    });
    expect(result.objects).to.not.be.empty;
  });

  it("should return fewer objects from a freetext query", async () => {
    const allResult = await sut.getObjects({
      filters: [titleFreetextFilter],
      offset: 0,
      limit: Number.MAX_SAFE_INTEGER,
    });
    const fewerResult = await sut.getObjects({
      filters: [{...titleFreetextFilter, value: "Men's"} as FreetextFilter],
      offset: 0,
      limit: Number.MAX_SAFE_INTEGER,
    });
    // console.log(JSON.stringify(allResult));
    // console.log(JSON.stringify(fewerResult));

    expect(allResult.objects).to.not.be.empty;
    expect(fewerResult.objects).to.not.be.empty;
    expect(fewerResult.objects.length).to.be.lessThan(allResult.objects.length);
  });
});
