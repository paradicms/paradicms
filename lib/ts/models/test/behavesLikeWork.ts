import {expect} from "chai";
import {Text, Work} from "../src";
import {it} from "mocha";
import {behavesLikeNamedModel} from "./behavesLikeNamedModel";
import {behavesLikeRightsMixin} from "./behavesLikeRightsMixin";
import {behavesLikeImagesMixin} from "./behavesLikeImagesMixin";
import {NamedNode} from "@rdfjs/types";

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
  });

  it("should get the work's agents", () => {
    expect(work.agents)
      .to.have.length.gte(4)
      .lte(6);
    const namedAgents = work.agents.filter(
      agent =>
        agent.agent.identifiers.length > 0 &&
        agent.agent.identifiers.every(
          identifier => identifier.termType === "NamedNode"
        )
    );
    expect(namedAgents)
      .to.have.length.gte(1)
      .lte(2);
    expect(
      work.agents.filter(
        agent =>
          !agent.agent.identifiers.some(
            identifier => identifier.termType === "NamedNode"
          )
      )
    ).to.have.length(4); // 2 blank, 2 literal
  });

  it("should get the work's events", () => {
    expect(work.events).to.not.be.empty;
  });

  it("should get the work's label", () => {
    expect(work.label).to.not.be.empty;
  });

  it("should get the work's page", () => {
    expect(work.page).to.not.be.empty;
  });

  it("should get the work's property values (literal)", () => {
    const propertyValues = work.propertyValuesByPropertyIri(
      options.literalProperty.value
    );
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.eq(work.label);
  });

  it("should get the work's property values (named)", () => {
    const propertyValues = work.propertyValuesByPropertyIri(
      options.namedProperty.value
    );
    expect(propertyValues).to.have.length(2);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.satisfy((text: string) =>
      text.startsWith("Subject")
    );
  });

  it("should get the work's property values (Text)", () => {
    const propertyValues = work.propertyValuesByPropertyIri(
      options.textProperty.value
    );
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.eq((work.description as Text).value);
  });

  behavesLikeNamedModel(work);
  behavesLikeImagesMixin(work);
  behavesLikeRightsMixin(work, {
    requireContributors: true,
    requireCreators: true,
    requireLicense: true,
    requireRightsHolders: true,
    requireRightsStatement: true,
  });
};
