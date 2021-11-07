import {expect} from "chai";
import {Dataset} from "../src";
import {testDataTrig} from "./testDataTrig";

describe("Organization", () => {
  const sut = Dataset.parse(testDataTrig).organizations[0];

  it("should get the organization's images", () => {
    expect(sut.images).to.not.be.empty;
    expect(sut.originalImages).to.not.be.empty;
    expect(sut.thumbnail({targetDimensions: {height: 600, width: 600}})).to.not
      .be.null;
  });

  it("should get the organization's name", () => {
    expect(sut.name).to.not.be.empty;
  });

  it("should get the organization's page", () => {
    expect(sut.page).to.not.be.empty;
  });

  it("should get the organization's uri", () => {
    expect(sut.uri).to.not.be.empty;
  });
});
