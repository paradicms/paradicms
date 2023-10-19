import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {describe} from "mocha";
import {SchemaModelReader} from "../../src/schema/SchemaModelReader";
import {dummyModelSet} from "../dummyModelSet";

describe("SchemaModelReader", () => {
  const sut = new SchemaModelReader(syntheticData);

  it("should read at least one Collection", () => {
    expect(sut.readCollections({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Concept", () => {
    expect(sut.readConcepts({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Event", () => {
    expect(sut.readEvents({modelSet: dummyModelSet})).to.have.length(4);
  });

  it("should read at least one Image", () => {
    expect(sut.readImages({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Location", () => {
    expect(sut.readLocations({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Organization", () => {
    expect(sut.readOrganizations({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Person", () => {
    expect(sut.readPeople({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Property", () => {
    expect(sut.readProperties({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Work", () => {
    expect(sut.readWorks({modelSet: dummyModelSet})).not.to.be.empty;
  });
});
