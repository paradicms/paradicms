import {expect} from "chai";
import {ModelSet, Text} from "../src";
import {syntheticData} from "@paradicms/test";

describe("Text", () => {
  const modelSet = ModelSet.fromDatasetCore(syntheticData);
  const work = modelSet.workByUri(
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
