import {expect} from "chai";
import {anyStringToDataset} from "@paradicms/rdf";
import {
  AppConfiguration,
  getAppConfiguration,
  PropertyConfiguration,
} from "../src";
import {testAppConfiguration} from "./testAppConfiguration";
import {configuration} from "@paradicms/vocabularies";

class WorkAppConfiguration extends AppConfiguration {
  get workProperties(): readonly PropertyConfiguration[] {
    return this.filterAndMapObjects(configuration.workProperty, term =>
      term.termType === "BlankNode"
        ? new PropertyConfiguration({
            dataset: this.dataset,
            graphNode: this.graphNode,
            node: term,
          })
        : null
    );
  }
}

describe("PropertyConfiguration", () => {
  let sut: PropertyConfiguration;
  before(async () => {
    const appConfiguration = getAppConfiguration(
      await anyStringToDataset(testAppConfiguration, {
        contentType: "text/turtle",
      }),
      kwds => new WorkAppConfiguration(kwds)
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
