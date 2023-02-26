import {expect} from "chai";
import {createDataset, parseIntoDataset} from "@paradicms/rdf";
import {AppConfiguration, getAppConfiguration} from "../src";
import {testAppConfiguration} from "./testAppConfiguration";

describe("getAppConfiguration", () => {
  it("should return null from an empty dataset", () => {
    expect(
      getAppConfiguration(createDataset(), kwds => new AppConfiguration(kwds))
    ).to.be.null;
  });

  it("should return a configuration from a .ttl", () => {
    expect(
      getAppConfiguration(
        parseIntoDataset(testAppConfiguration),
        kwds => new AppConfiguration(kwds)
      )
    ).to.not.be.null;
  });
});
