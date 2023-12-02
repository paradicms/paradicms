import {expect} from "chai";
import {describe} from "mocha";
import {AppConfiguration} from "../src";
import {ModelSetFactory} from "../src/ModelSetFactory";
import {testAppConfigurationData} from "./testAppConfigurationData";

describe("AppConfiguration", () => {
  let jsonLdAppConfiguration: AppConfiguration;
  before(async () => {
    jsonLdAppConfiguration = ModelSetFactory.fromDataset(
      testAppConfigurationData
    ).appConfiguration!;
    expect(jsonLdAppConfiguration).to.not.be.null;
  });

  it("should get the stylesheet", () => {
    expect(jsonLdAppConfiguration.stylesheet).to.eq(
      "https://minorgordon.net/minorgordon.net.css"
    );
  });

  it("should get the title", () => {
    expect(jsonLdAppConfiguration.title).to.eq("Test title");
  });

  // it("should have a JSON-LD equivalent", async () => {
  //   const json = {
  //     "@context": {
  //       "@vocab": "http://paradicms.github.io/ns/configuration#",
  //     },
  //     "@type": "AppConfiguration",
  //     stylesheet: "https://minorgordon.net/minorgordon.net.css",
  //     title: "Test title",
  //   };
  //
  //   jsonLdAppConfiguration = ModelSetFactory.fromDataset(
  //     await anyRdfStringToDataset(JSON.stringify(json), {
  //       contentType: "application/ld+json",
  //     })
  //   ).appConfiguration!;
  //
  //   expect(jsonLdAppConfiguration.title).to.eq("Test title");
  //   expect(jsonLdAppConfiguration.stylesheet).to.eq(
  //     "https://minorgordon.net/minorgordon.net.css"
  //   );
  // });
});
