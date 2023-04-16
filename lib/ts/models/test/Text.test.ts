import {expect} from "chai";
import {Text} from "../src";
import {testModelSet} from "./testModelSet";

describe("Text", () => {
  const work = testModelSet.workByUri("http://example.com/collection0/work2");
  const sut: Text = work.description! as Text;

  it("should provide the value", () => {
    expect(sut.value).to.not.be.empty;
  });

  it("should have a license", () => {
    const license = sut.license;
    expect(license).to.not.be.null;
  });
});
