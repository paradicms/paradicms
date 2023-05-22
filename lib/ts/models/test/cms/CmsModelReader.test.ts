import {CmsModelReader} from "../../src/cms/CmsModelReader";
import {datasetCoreToDataset} from "@paradicms/rdf";
import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";

describe("CmsModelReader", () => {
  const sut = new CmsModelReader(datasetCoreToDataset(syntheticData));

  it("should not find an AppConfiguration", () => {
    expect(sut.readAppConfiguration({modelSet: dummyModelSet})).to.be.null;
  });

  it("should read at least one Collection", () => {
    expect(sut.readCollections({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Concept", () => {
    expect(sut.readConcepts({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Image", () => {
    expect(sut.readImages({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one named License", () => {
    expect(sut.readNamedLicenses({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one named Location", () => {
    expect(sut.readNamedLocations({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one named Organization", () => {
    expect(sut.readNamedOrganizations({modelSet: dummyModelSet})).not.to.be
      .empty;
  });

  it("should read at least one named Person", () => {
    expect(sut.readNamedPeople({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Property", () => {
    expect(sut.readProperties({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one PropertyGroup", () => {
    expect(sut.readPropertyGroups({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one named RightsStatement", () => {
    expect(sut.readNamedRightsStatements({modelSet: dummyModelSet})).not.to.be
      .empty;
  });

  it("should read at least one WorkEvent", () => {
    expect(sut.readWorkEvents({modelSet: dummyModelSet})).not.to.be.empty;
  });

  it("should read at least one Work", () => {
    expect(sut.readWorks({modelSet: dummyModelSet})).not.to.be.empty;
  });
});
