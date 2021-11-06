import {expect} from "chai";
import {Dataset, Text} from "../src";
import {testDataTtl} from "./testDataTtl";

describe("Text", () => {
  const dataset = Dataset.parse(testDataTtl);
  const work = dataset.works[0];
  const sut: Text = work.abstract! as Text;

  it("should provide the value", () => {
    expect(sut.value).to.not.be.empty;
  });

  it("should have rights", () => {
    expect(sut.rights!.creator).to.not.be.empty;
    expect(sut.rights!.holder).to.not.be.empty;
  });
});
