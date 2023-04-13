import {expect} from "chai";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";
import {ModelSet} from "../src";
import {Agent} from "../src/Agent";
import {syntheticData} from "@paradicms/test";

describe("CmsRightsMixin", () => {
  const sut = ModelSet.fromDatasetCore(syntheticData).works[0];

  it("should have a contributor", () => {
    expect(sut.contributors).to.not.be.empty;
    expect(sut.contributors.filter(contributor => contributor instanceof Agent))
      .to.not.be.empty;
    expect(sut.contributorAgents).to.not.be.empty;
    expect(
      sut.contributorAgents.map(contributor => contributor as Agent)[0].name
    ).to.not.be.empty;
  });

  it("should have a creator", () => {
    expect(sut.creators).to.not.be.empty;
    expect(sut.creators.filter(creator => creator instanceof Agent)).to.not.be
      .empty;
    expect(sut.creatorAgents).to.not.be.empty;
    expect(sut.creatorAgents.map(creator => creator as Agent)[0].name).to.not.be
      .empty;
  });

  it("should have a license", () => {
    expect(sut.license).to.not.be.empty;
    expect(sut.license).to.not.be.instanceof(String);
    expect((sut.license! as License).title).to.not.be.empty;
  });

  it("should not have a non-text rights holder", () => {
    expect(sut.rightsHolderAgents).to.be.empty;
  });

  it("should have a text rights holder", () => {
    expect(sut.rightsHolders).to.not.be.empty;
  });

  it("should have a rights statement", () => {
    expect(sut.rightsStatement).to.not.be.empty;
    expect(sut.rightsStatement).to.not.be.instanceof(String);
    expect((sut.rightsStatement! as RightsStatement).prefLabel).to.not.be.empty;
  });
});
