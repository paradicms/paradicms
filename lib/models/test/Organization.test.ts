import {expect} from "chai";
import {testDataTtl} from "./testDataTtl";
import {Dataset} from "../src";

describe("Organization", () => {
  const sut = Dataset.parse(testDataTtl).organizations[0];

  it("should get the organization's images", () => {
    expect(sut.images).to.not.be.empty;
    expect(sut.originalImages).to.not.be.empty;
    expect(sut.thumbnail({targetDimensions: {height: 600, width: 600}})).to.not
      .be.null;
  });

  it("should get the organization's name", () => {
    expect(sut.name).to.not.be.empty;
  });

  it("should get the organization's uri", () => {
    expect(sut.uri).to.not.be.empty;
  });
});
