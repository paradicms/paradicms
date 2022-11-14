import {expect} from "chai";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";
import {ModelSet} from "../src";
import {Agent} from "../src/Agent";
import {testDataTrig} from "./testDataTrig";
import {parseIntoDataset} from "@paradicms/rdf";

describe("Rights", () => {
  const sut = new ModelSet(parseIntoDataset(testDataTrig)).works[0].rights!;

  it("should have a joined contributor", () => {
    expect(sut.contributors).to.not.be.empty;
    expect(sut.contributors.filter(contributor => contributor instanceof Agent))
      .to.not.be.empty;
    expect(sut.contributorAgents).to.not.be.empty;
    expect(
      sut.contributorAgents.map(contributor => contributor as Agent)[0].name
    ).to.not.be.empty;
  });

  it("should have a joined creator", () => {
    expect(sut.creators).to.not.be.empty;
    expect(sut.creators.filter(creator => creator instanceof Agent)).to.not.be
      .empty;
    expect(sut.creatorAgents).to.not.be.empty;
    expect(sut.creatorAgents.map(creator => creator as Agent)[0].name).to.not.be
      .empty;
  });

  it("should not have a joined holder", () => {
    expect(sut.holderAgents).to.be.empty;
  });

  it("should have a joined license", () => {
    expect(sut.license).to.not.be.empty;
    expect(sut.license).to.not.be.instanceof(String);
    expect((sut.license! as License).title).to.not.be.empty;
  });

  it("should have a joined rights statement", () => {
    expect(sut.statement).to.not.be.empty;
    expect(sut.statement).to.not.be.instanceof(String);
    expect((sut.statement! as RightsStatement).prefLabel).to.not.be.empty;
  });

  it("should have a text holder", () => {
    expect(sut.holders).to.not.be.empty;
  });
});
