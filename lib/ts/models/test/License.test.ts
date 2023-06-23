import {expect} from "chai";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

describe("License", () => {
  const sut = testModelSet.licenseByIri(
    "http://creativecommons.org/licenses/nc/1.0/"
  )!;

  // it("should get the license's identifier", () => {
  //   expect(sut.identifier).to.not.be.empty;
  // });

  it("should get the license's label", () => {
    expect(sut.label).to.not.be.empty;
  });
});
