import {expect} from "chai";
import {createDataset, parseIntoDataset} from "@paradicms/rdf";
import {AppConfiguration, readAppConfiguration} from "../src";
import {testAppConfiguration} from "./testAppConfiguration";

describe("readAppConfiguration", () => {
  it("should return null from an empty dataset", () => {
    expect(
      readAppConfiguration(createDataset(), kwds => new AppConfiguration(kwds))
    ).to.be.null;
  });

  it("should return a configuration from a .ttl", () => {
    expect(
      readAppConfiguration(
        parseIntoDataset(testAppConfiguration),
        kwds => new AppConfiguration(kwds)
      )
    ).to.not.be.null;
  });
});
