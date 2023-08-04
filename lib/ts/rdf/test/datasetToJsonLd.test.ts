import {DataFactory, Store} from "n3";
import {expect} from "chai";
import {datasetToJsonLd} from "../src/datasetToJsonLd";

describe("datasetToJsonLd", () => {
  const subject = DataFactory.namedNode("urn:example:subject");
  const predicate = DataFactory.namedNode("urn:example:predicate");
  const object_ = DataFactory.namedNode("urn:example:object");

  it("should serialize a simple dataset", async () => {
    const dataset = new Store();
    dataset.add(DataFactory.quad(subject, predicate, object_, subject));
    const jsonLd: any = await datasetToJsonLd(dataset);
    delete jsonLd["@context"];
    expect(jsonLd).to.deep.eq({
      "@graph": [
        {
          "@id": "urn:example:subject",
          "urn:example:predicate": {
            "@id": "urn:example:object",
          },
        },
      ],
      "@id": "urn:example:subject",
    });
  });
});
