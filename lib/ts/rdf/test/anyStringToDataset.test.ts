import {anyStringToDataset} from "../src";
import {DataFactory} from "n3";
import {expect} from "chai";

describe("anyStringToDataset", () => {
  const subject = DataFactory.namedNode("urn:example:subject");
  const predicate = DataFactory.namedNode("urn:example:predicate");
  const object_ = DataFactory.namedNode("urn:example:object");

  it("should read rdf-parse example Turtle", async () => {
    expect(
      (
        await anyStringToDataset(
          `
<http://ex.org/s> <http://ex.org/p> <http://ex.org/o1>, <http://ex.org/o2>.
`,
          {contentType: "text/turtle", baseIRI: "http://example.org"}
        )
      ).size
    ).to.eq(2);
  });

  it("should read Turtle", async () => {
    expect(
      (
        await anyStringToDataset(
          `<${subject.value}> <${predicate.value}> <${object_.value}> .`,
          {contentType: "text/turtle"}
        )
      ).size
    ).to.eq(1);
  });

  it("should read JSON-LD", async () => {
    expect(
      (
        await anyStringToDataset(
          JSON.stringify({
            "@context": {"@vocab": "urn:example:"},
            "@id": "subject",
            predicate: {"@type": "@id", value: "object"},
          }),
          {contentType: "application/ld+json"}
        )
      ).size
    ).to.eq(1);
  });
});
