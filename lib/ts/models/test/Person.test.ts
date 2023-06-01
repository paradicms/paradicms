import {expect} from "chai";
import {testModelSet} from "./testModelSet";

describe("Person", () => {
  const sut = testModelSet.personByIri("http://example.com/person4");

  it("should get the person's family name", () => {
    expect(sut.familyName).to.not.be.empty;
  });

  it("should get the person's given name", () => {
    expect(sut.givenName).to.not.be.empty;
  });

  it("should get the person's sort name", () => {
    expect(sut.sortName).to.not.be.empty;
  });
});
