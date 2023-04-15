import {expect} from "chai";
import {anyRdfStringToDataset} from "@paradicms/rdf";
import {testAppConfigurationTtl} from "./testAppConfigurationTtl";
import {AppConfiguration, ModelSet} from "../src";
import {ModelSetFactory} from "../src/ModelSetFactory";

describe("AppConfiguration", () => {
  let jsonLdAppConfiguration: AppConfiguration;
  before(async () => {
    jsonLdAppConfiguration = ModelSetFactory.fromDataset(
      await anyRdfStringToDataset(testAppConfigurationTtl, {
        contentType: "text/turtle",
      })
    ).appConfiguration!;
    expect(jsonLdAppConfiguration).to.not.be.null;
  });

  it("from should return a configuration from a .ttl", async () => {
    expect(
      ModelSet.fromDataset(
        await anyRdfStringToDataset(testAppConfigurationTtl, {
          contentType: "text/turtle",
        })
      ).appConfiguration
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
    };

    jsonLdAppConfiguration = ModelSet.fromDataset(
      await anyRdfStringToDataset(JSON.stringify(json), {
        contentType: "application/ld+json",
      })
    ).appConfiguration!;

    expect(jsonLdAppConfiguration.title).to.eq("Test title");
    expect(jsonLdAppConfiguration.stylesheet).to.eq(
      "https://minorgordon.net/minorgordon.net.css"
    );
  });
});
