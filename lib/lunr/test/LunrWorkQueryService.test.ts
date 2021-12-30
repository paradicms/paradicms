import {expect} from "chai";
import {LunrWorkQueryService} from "../src/LunrWorkQueryService";
import {Dataset} from "@paradicms/models";
import {testDataTrig} from "../../models/test/testDataTrig";
import {defaultAppConfiguration} from "@paradicms/configuration";
import {
  CollectionValueFacet,
  InstitutionValueFacet,
  StringPropertyValueFacet,
} from "@paradicms/facets";

describe("LunrWorkQueryService", () => {
  const configuration = defaultAppConfiguration;
  const dataset = Dataset.parse(testDataTrig);
  const sut = new LunrWorkQueryService({
    configuration,
    dataset,
  });

  it("should return at least one work from an empty query", async () => {
    const result = await sut.getWorks({
      query: {
        filters: configuration.search!.filters,
        valueFacetValueThumbnailSelector: {
          targetDimensions: {
            height: 200,
            width: 200,
          },
        },
      },
      offset: 0,
      limit: Number.MAX_SAFE_INTEGER,
    });

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

  it("should return fewer works from a freetext query", async () => {
    const allResult = await sut.getWorks({
      query: {
        filters: configuration.search!.filters,
      },
      offset: 0,
      limit: Number.MAX_SAFE_INTEGER,
    });

    const fewerResult = await sut.getWorks({
      query: {
        filters: configuration.search!.filters!,
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
