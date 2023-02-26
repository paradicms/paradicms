import {expect} from "chai";
import {anyStringToDataset, createDataset} from "@paradicms/rdf";
import {AppConfiguration} from "../src";
import {testAppConfiguration} from "./testAppConfiguration";

describe("AppConfiguration", () => {
  let sut: AppConfiguration;
  before(async () => {
    sut = AppConfiguration.fromDataset(
      await anyStringToDataset(testAppConfiguration, {
        contentType: "text/turtle",
      })
    )!;
    expect(sut).to.not.be.null;
  });

  it("from should return null from an empty dataset", () => {
    expect(AppConfiguration.fromDataset(createDataset())).to.be.null;
  });

  it("from should return a configuration from a .ttl", async () => {
    expect(
      AppConfiguration.fromDataset(
        await anyStringToDataset(testAppConfiguration, {
          contentType: "text/turtle",
        })
      )
    ).to.not.be.null;
  });

  it("should get the stylesheet", () => {
    expect(sut.stylesheet).to.eq("https://minorgordon.net/minorgordon.net.css");
  });

  it("should get the title", () => {
    expect(sut.title).to.eq("Test title");
  });
});
