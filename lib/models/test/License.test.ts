import {expect} from "chai";
import {testDataTtl} from "./testDataTtl";
import {Dataset} from "../src";

describe("License", () => {
  const sut = Dataset.parse(testDataTtl).licenses[0];

  it("should get the license's identifier", () => {
    expect(sut.title).to.not.be.empty;
  });

  it("should get the license's title", () => {
    expect(sut.title).to.not.be.empty;
  });

  it("should get the license's uri", () => {
    expect(sut.uri).to.not.be.empty;
  });
});
