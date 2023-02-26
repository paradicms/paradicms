import {expect} from "chai";
import {parseIntoDataset} from "@paradicms/rdf";
import {AppConfiguration, readAppConfiguration} from "../src";
import {testAppConfiguration} from "./testAppConfiguration";

describe("AppConfiguration", () => {
  let sut: AppConfiguration;
  before(() => {
    sut = readAppConfiguration(
      parseIntoDataset(testAppConfiguration),
      kwds => new AppConfiguration(kwds)
    )!;
    expect(sut).to.not.be.null;
  });

  it("should get the stylesheet", () => {
    expect(sut.stylesheet).to.eq("https://minorgordon.net/minorgordon.net.css");
  });

  it("should get the title", () => {
    expect(sut.title).to.eq("Test title");
  });
});
