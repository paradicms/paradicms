import {expect} from "chai";
import {Dataset} from "../src";
import {testDataTrig} from "./testDataTrig";

describe("Person", () => {
  const sut = Dataset.parse(testDataTrig).people[0];

  it("should get the person's family name", () => {
    expect(sut.familyName).to.not.be.empty;
  });

  it("should get the person's given name", () => {
    expect(sut.givenName).to.not.be.empty;
  });

  it("should get the person's images", () => {
    expect(sut.images).to.not.be.empty;
    expect(sut.originalImages).to.not.be.empty;
    expect(sut.thumbnail({targetDimensions: {height: 600, width: 600}})).to.not
      .be.null;
  });

  it("should get the person's name", () => {
    expect(sut.name).to.not.be.empty;
  });

  it("should get the person's page", () => {
    expect(sut.page).to.not.be.empty;
  });

  it("should get the person's sort name", () => {
    expect(sut.sortName).to.not.be.empty;
  });

  it("should get the person's uri", () => {
    expect(sut.uri).to.not.be.empty;
  });
});
