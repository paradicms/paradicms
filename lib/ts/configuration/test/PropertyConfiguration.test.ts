import {expect} from "chai";
import {anyRdfStringToDataset} from "@paradicms/rdf";
import {PropertyConfiguration} from "../src";
import {testAppConfigurationTtl} from "./testAppConfigurationTtl";
import {TestAppConfiguration} from "./TestAppConfiguration";

describe("PropertyConfiguration", () => {
  let sut: PropertyConfiguration;
  before(async () => {
    const appConfiguration = TestAppConfiguration.fromDataset(
      await anyRdfStringToDataset(testAppConfigurationTtl, {
        contentType: "text/turtle",
      })
    )!;
    expect(appConfiguration).to.not.be.null;
    const propertyConfigurations = appConfiguration.workProperties;
    expect(propertyConfigurations).to.have.length(2);
    sut = propertyConfigurations[0];
  });

  it("should have a label", () => {
    expect(sut.label).to.match(/^Property label/);
  });

  it("should have a predicate", () => {
    expect(sut.uri).to.match(/^http:\/\/example.com\/predicate/);
  });
});
