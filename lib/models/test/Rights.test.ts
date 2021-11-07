import {expect} from "chai";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";
import {Dataset} from "../src";
import {testDataTtl} from "./testDataTtl";
import {Agent} from "../src/Agent";

describe("Rights", () => {
  const sut = Dataset.parse(testDataTrig).works[0].rights!;

  it("should have a joined creator", () => {
    expect(sut.creator).to.not.be.empty;
    expect(sut.creator).to.not.be.instanceof(String);
    expect((sut.creator! as Agent).name).to.not.be.empty;
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
    expect(sut.holder).to.not.be.null;
    expect(sut.holder!).to.not.be.empty;
  });
});
