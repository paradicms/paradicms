import {expect} from "chai";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

describe("CmsRightsMixin", () => {
  const sut = testModelSet.works[0];

  it("should have a contributor", () => {
    expect(sut.contributors).to.not.be.empty;
  });

  it("should have a creator", () => {
    expect(sut.creators).to.not.be.empty;
  });

  it("should have a license", () => {
    expect(sut.license).to.not.be.null;
  });

  it("should have a rights holder", () => {
    expect(sut.rightsHolders).to.not.be.empty;
  });

  it("should have a rights statement", () => {
    expect(sut.rightsStatement).to.not.be.null;
  });
});
