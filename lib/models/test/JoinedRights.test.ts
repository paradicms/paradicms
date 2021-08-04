import {expect} from "chai";
import {testDataset} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";

describe("JoinedRights", () => {
  const sut = JoinedDataset.fromDataset(testDataset).institutionByUri(testDataset.institutions[0].uri).rights!;

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
    expect(sut.holder!.type).to.eq("text");
    expect(sut.holder!.value).to.not.be.empty;
  });
});
