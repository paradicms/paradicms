import {expect} from "chai";
import {describe} from "mocha";
import {testModelSet} from "../testModelSet";
import {requireDefined} from "@paradicms/utilities";
import {syntheticData} from "@paradicms/test";
import {LinkedArtModelReader} from "../../src/linked-art/LinkedArtModelReader";
import {LinkedArtHumanMadeObject} from "../../src/linked-art/LinkedArtHumanMadeObject";
import {LinkedArtProduction} from "../../src/linked-art/LinkedArtProduction";

describe("LinkedArtHumanMadeObject", () => {
  const sut = requireDefined(
    new LinkedArtModelReader(syntheticData)
      .readWorks({
        modelSet: testModelSet,
      })
      .find(
        model =>
          model.iris.length === 1 &&
          model.iris[0] ===
            "https://data.getty.edu/museum/collection/object/4d302ecd-f3a5-4e52-9e97-ca3ca8d5c9e6"
      )
  ) as LinkedArtHumanMadeObject;

  it("should have the Linked Art creator", () => {
    expect(sut.creators.some(creator => creator.label === "Joseph Nollekens"))
      .to.be.true;
  });

  it("should have the Linked Art production display date", () => {
    expect(sut.displayDate).to.eq("1775");
  });

  it("should have images", () => {
    expect(sut.images).to.have.length(5);
    for (const image of sut.images) {
      expect(image.exactDimensions).not.to.be.null;
      expect(image.rightsHolders).not.to.be.empty;
      expect(image.rightsStatements).not.to.be.empty;
    }
  });

  it("should have the production event", () => {
    expect(sut.events).to.have.length(1);
    expect(sut.events[0]).to.be.instanceof(LinkedArtProduction);
  });

  it("should have a correct label", () => {
    expect(sut.label).to.eq("Minerva");
  });
});
