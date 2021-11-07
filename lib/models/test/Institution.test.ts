import {expect} from "chai";
import {testDataTtl} from "./testDataTtl";
import {Dataset} from "../src";

describe("Institution", () => {
  const sut = Dataset.parse(testDataTrig).institutions[0];

  it("should get the institution's collections", () => {
    expect(sut.collections).to.not.be.empty;
  });

  it("should get the institution's name", () => {
    expect(sut.name).to.not.be.empty;
  });

  it("should get the institution's rights", () => {
    expect(sut.rights!.statement).to.not.be.null;
  });

  it("should get the institution's thumbnail", () => {
    const thumbnail = sut.thumbnail({
      targetDimensions: {height: 200, width: 200},
    });
    expect(thumbnail).to.not.be.null;
    expect(thumbnail!.depictsUri).to.eq(sut.uri);
  });

  it("should get the institution's uri", () => {
    expect(sut.uri).to.not.be.empty;
  });
});
