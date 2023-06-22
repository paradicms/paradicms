import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {CmsRightsMixin} from "../../src/cms/CmsRightsMixin";
import {CmsWork} from "../../src/cms/CmsWork";

describe("CmsRightsMixin", () => {
  const sut: CmsRightsMixin = testModelSet.workByIri(
    "http://example.com/collection0/work0"
  ) as CmsWork;

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
