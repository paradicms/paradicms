import {expect} from "chai";
import {anyRdfStringToDataset, createDataset} from "@paradicms/rdf";
import {testAppConfigurationTtl} from "./testAppConfigurationTtl";
import {TestAppConfiguration} from "./TestAppConfiguration";

describe("AppConfiguration", () => {
  let jsonLdAppConfiguration: TestAppConfiguration;
  before(async () => {
    jsonLdAppConfiguration = TestAppConfiguration.fromDataset(
      await anyRdfStringToDataset(testAppConfigurationTtl, {
        contentType: "text/turtle",
      })
    )!;
    expect(jsonLdAppConfiguration).to.not.be.null;
  });

  it("from should return null from an empty dataset", () => {
    expect(TestAppConfiguration.fromDataset(createDataset())).to.be.null;
  });

  it("from should return a configuration from a .ttl", async () => {
    expect(
      TestAppConfiguration.fromDataset(
        await anyRdfStringToDataset(testAppConfigurationTtl, {
          contentType: "text/turtle",
        })
      )
    ).to.not.be.null;
  });

  it("should get the stylesheet", () => {
    expect(jsonLdAppConfiguration.stylesheet).to.eq(
      "https://minorgordon.net/minorgordon.net.css"
    );
  });

  it("should get the title", () => {
    expect(jsonLdAppConfiguration.title).to.eq("Test title");
  });

  it("should have a JSON-LD equivalent", async () => {
    const json = {
      "@context": {
        "@vocab": "http://www.paradicms.org/ns/configuration#",
      },
      "@type": "AppConfiguration",
      stylesheet: "https://minorgordon.net/minorgordon.net.css",
      title: "Test title",
      workProperty: [
        {
          label: "Property label 1",
          predicate: {"@id": "http://example.com/predicate1"},
        },
        {
          label: "Property label 2",
          predicate: {"@id": "http://example.com/predicate2"},
        },
      ],
    };

    jsonLdAppConfiguration = TestAppConfiguration.fromDataset(
      await anyRdfStringToDataset(JSON.stringify(json), {
        contentType: "application/ld+json",
      })
    )!;

    expect(jsonLdAppConfiguration.title).to.eq("Test title");
    expect(jsonLdAppConfiguration.stylesheet).to.eq(
      "https://minorgordon.net/minorgordon.net.css"
    );
    expect(jsonLdAppConfiguration.workProperties.length).to.eq(2);
    expect(
      jsonLdAppConfiguration.workProperties[0].label.startsWith(
        "Property label "
      )
    ).to.be.true;
    expect(
      jsonLdAppConfiguration.workProperties[0].uri.startsWith(
        "http://example.com/predicate"
      )
    ).to.be.true;
  });
});
