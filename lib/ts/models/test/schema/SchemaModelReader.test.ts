import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {describe} from "mocha";
import {SchemaModelReader} from "../../src/schema/SchemaModelReader";

describe("SchemaModelReader", () => {
  const sut = new SchemaModelReader(syntheticData);

  it("should read at least one Collection", () => {
    expect(sut.readCollections({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Concept", () => {
    expect(sut.readConcepts({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Event", () => {
    expect(sut.readEvents({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Image", () => {
    expect(sut.readImages({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Location", () => {
    expect(sut.readNamedLocations({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Organization", () => {
    expect(sut.readNamedOrganizations({modelSet: dummyModelSet})).not.to.be
      .empty;
  });

  it("should read at least one Person", () => {
    expect(sut.readNamedPeople({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Property", () => {
    expect(sut.readProperties({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Work", () => {
    expect(sut.readWorks({modelSet: dummyModelSet})).not.to.be.empty;
  });
});
