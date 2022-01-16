import {expect} from "chai";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";
import {Dataset} from "../src";
import {Agent} from "../src/Agent";
import {testDataTrig} from "./testDataTrig";

describe("Rights", () => {
  const sut = Dataset.parse(testDataTrig).works[0].rights!;

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
