import {expect} from "chai";
import {testDatasetTtl} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";

describe("JoinedInstitution", () => {
  const institution = testDatasetTtl.institutions[0];
  const sut = JoinedDataset.fromDataset(testDatasetTtl).institutionByUri(
    institution.uri
  );

  it("should get the institution's collections", () => {
    expect(sut.collections).to.not.be.empty;
  });

  it("should get the institution's name", () => {
    expect(sut.name).to.eq(institution.name);
  });

  it("should get the institution's rights", () => {
    expect(sut.rights!.statement).to.not.be.null;
  });

  it("should get the institution's thumbnail", () => {
    const thumbnail = sut.thumbnail({
      targetDimensions: {height: 200, width: 200},
    });
    expect(thumbnail).to.not.be.null;
    expect(thumbnail!.asImage.depictsUri).to.eq(institution.uri);
  });

  it("should get the institution's uri", () => {
    expect(sut.uri).to.eq(institution.uri);
  });
});
