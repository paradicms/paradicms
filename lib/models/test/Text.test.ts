import {expect} from "chai";
import {Dataset, Text} from "../src";
import {testDataTrig} from "./testDataTrig";

describe("Text", () => {
  const dataset = Dataset.parse(testDataTrig);
  const work = dataset.workByUri(
    "http://example.com/institution0/collection0/work2"
  );
  const sut: Text = work.abstract! as Text;

  it("should provide the value", () => {
    expect(sut.value).to.not.be.empty;
  });

  it("should have rights", () => {
    const rights = sut.rights;
    expect(rights).to.not.be.null;
    const license = rights!.license;
    expect(license).to.not.be.null;
  });

  it("should return the text from .toString()", () => {
    expect(sut.toString()).to.eq(sut.value);
  });
});
