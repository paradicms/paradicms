import {testModelSet} from "../testModelSet";
import {WikidataModelReader} from "../../src/wikidata/WikidataModelReader";
import {syntheticData} from "@paradicms/test";
import {requireDefined} from "@paradicms/utilities";
import {describe} from "mocha";
import {expect} from "chai";
import {WorkCreationEvent} from "../../src";
import {SyntheticWorkCreationEvent} from "../../src/synthetic/SyntheticWorkCreationEvent";
import {wd} from "@paradicms/vocabularies";

describe("WikidataWork", () => {
  const sut = requireDefined(
    new WikidataModelReader(syntheticData)
      .readWorks({
        modelSet: testModelSet,
      })
      .find(work => work.iris[0] === wd["Q19911452"].value)
  );

  it("should get the work's description", () => {
    expect(sut.description).not.to.be.null;
    expect(sut.description!.value).to.eq(
      "painting by Lucas Cranach the Elder (Metropolitan Museum of Art)"
    );
    expect(sut.description!.licenses).not.to.be.empty;
    expect(sut.description!.rightsStatements).not.to.be.empty;
  });

  it("should get the work's display date", () => {
    expect(sut.displayDate).to.eq("1528");
  });

  it("should get the work's images", () => {
    expect(sut.images).not.to.be.empty;
  });

  it("should get the work's events", () => {
    expect(sut.events).to.have.length(1);
    const workCreation: WorkCreationEvent = sut.events[0] as WorkCreationEvent;
    expect(workCreation).to.be.instanceof(SyntheticWorkCreationEvent);
    expect(workCreation.displayDate).to.eq("1528");
  });

  it("should get the work's label", () => {
    expect(sut.label).to.eq("The Judgment of Paris");
  });

  it("should get the work's location", () => {
    expect(sut.location).not.to.be.null;
    expect(sut.location!.label).to.be.null;
    expect(sut.location!.location.centroid).not.to.be.null;
    expect(sut.location!.location.label).to.eq("The Met Fifth Avenue");
  });
});
