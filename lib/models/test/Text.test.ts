import {expect} from "chai";
import {Dataset, Text} from "../src";
import {testDataTrig} from "./testDataTrig";

describe("Text", () => {
  const dataset = Dataset.parse(testDataTrig);
  const work = dataset.works[0];
  const sut: Text = work.abstract! as Text;

  it("should provide the value", () => {
    expect(sut.value).to.not.be.empty;
  });

  it("should have rights", () => {
    const rights = sut.rights;
    expect(rights).to.not.be.null;
    const license = rights!.license;
    expect(license).to.not.be.null;
    const holder = rights!.holder;
    expect(holder).to.not.be.empty;
  });
});
