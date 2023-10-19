import {NamedNode} from "@rdfjs/types";
import {expect} from "chai";
import {it} from "mocha";
import {Text, Work, WorkCreationEvent} from "../src";
import {behavesLikeImagesMixin} from "./behavesLikeImagesMixin";
import {behavesLikeModel} from "./behavesLikeModel";
import {behavesLikeRightsMixin} from "./behavesLikeRightsMixin";
import {behavesLikeThumbnailMixin} from "./behavesLikeThumbnailMixin";

export const behavesLikeWork = (
  work: Work,
  options: {
    literalProperty: NamedNode;
    namedProperty: NamedNode;
    textProperty: NamedNode;
  }
) => {
  it("should get the work's description", () => {
    expect(work.description).not.to.be.null;
    expect(work.description!.value).to.not.be.empty;
    behavesLikeRightsMixin(work.description!, {
      requireContributors: true,
      requireCreators: true,
      requireLicense: true,
      requireRightsHolders: true,
      requireRightsStatement: true,
    });
  });

  it("should get the work's agents", () => {
    expect(work.agents)
      .to.have.length.gte(2)
      .lte(6);
  });

  it("should get the work's events", () => {
    expect(work.events).to.not.be.empty;
    const workCreationEvent = work.events.find(
      workEvent => workEvent.type === "WorkCreation"
    ) as WorkCreationEvent;
    expect(workCreationEvent).not.to.be.undefined;
    const workModificationEvent = work.events.find(
      workEvent => workEvent.type === "WorkModification"
    );
    expect(workModificationEvent).not.to.be.undefined;
  });

  it("should get the work's label", () => {
    expect(work.label).to.not.be.empty;
  });

  it("should get the work's property values (literal)", () => {
    const propertyValues = work.propertyValuesByPropertyIri(
      options.literalProperty
    );
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.eq(work.label);
  });

  it("should get the work's property values (named)", () => {
    const propertyValues = work.propertyValuesByPropertyIri(
      options.namedProperty
    );
    expect(propertyValues).to.have.length(2);
    // const propertyValue = propertyValues[0];
    // expect(propertyValue.value).to.satisfy((text: string) =>
    //   text.startsWith("Subject")
    // );
  });

  it("should get the work's property values (Text)", () => {
    const propertyValues = work.propertyValuesByPropertyIri(
      options.textProperty
    );
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.eq((work.description as Text).value);
  });

  it("should get the work's subjects", () => {
    expect(work.subjects).not.to.be.empty;
    for (const subject of work.subjects) {
      expect(subject.type === "Concept");
    }
  });

  behavesLikeModel(work);
  behavesLikeImagesMixin(work);
  behavesLikeThumbnailMixin(work);
};
