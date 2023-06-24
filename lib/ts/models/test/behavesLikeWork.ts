import {dcterms} from "@paradicms/vocabularies";
import {expect} from "chai";
import {Text, Work} from "../src";
import {it} from "mocha";

export const behavesLikeWork = (work: Work) => {
  it("should get the work's description", () => {
    expect(work.description).not.to.be.null;
    expect(work.description).not.to.be.instanceof(String);
    const description: Text = work.description as Text;
    expect(description.value).to.not.be.empty;
  });

  it("should get the work's agents", () => {
    expect(work.agents).to.have.length(6);
    const namedAgents = work.agents.filter(
      agent =>
        agent.agent.identifiers.length > 0 &&
        agent.agent.identifiers.every(
          identifier => identifier.termType === "NamedNode"
        )
    );
    expect(namedAgents).to.have.length(2);
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

  it("should get the work's images", () => {
    expect(work.images).to.not.be.empty;
    // expect(
    //   work.images.every(image => image.depictsIri === work.identifiers[0].value)
    // ).to.be.true;
  });

  it("should get the work's label", () => {
    expect(work.label).to.not.be.empty;
    expect(work.label).to.not.be.empty;
  });

  it("should get the work's page", () => {
    expect(work.page).to.not.be.empty;
  });

  it("should get the work's property values (literal)", () => {
    const propertyValues = work.propertyValuesByPropertyIri(
      dcterms.title.value
    );
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.eq(work.label);
  });

  it("should get the work's property values (named)", () => {
    const propertyValues = work.propertyValuesByPropertyIri(
      dcterms.subject.value
    );
    expect(propertyValues).to.have.length(2);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.satisfy((text: string) =>
      text.startsWith("Subject")
    );
  });

  it("should get the work's property values (Text)", () => {
    const propertyValues = work.propertyValuesByPropertyIri(
      dcterms.description.value
    );
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.eq((work.description as Text).value);
  });

  it("should get the work's rights statement", () => {
    expect(work.rightsStatement).to.not.be.null;
  });
};
