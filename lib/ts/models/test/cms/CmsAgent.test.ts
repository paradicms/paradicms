import {expect} from "chai";
import {describe, it} from "mocha";
import {testModelSet} from "../testModelSet";
import {behavesLikeAgent} from "../behavesLikeAgent";
import {CmsAgent} from "../../src/cms/CmsAgent";
import {Agent} from "../../src";
import {testCmsModelSet} from "./testCmsModelSet";
import {requireNonNull} from "@paradicms/utilities";

describe("CmsAgent", () => {
  const agent: CmsAgent = (requireNonNull(
    testCmsModelSet.personByIri("http://example.com/person4")
  ) as Agent) as CmsAgent;

  it("should get the agent's Wikidata concept IRI", () => {
    expect(
      testModelSet.personByIri("http://example.com/person0")!.wikidataConceptIri
    ).to.eq("http://www.wikidata.org/entity/Q7251");
  });

  it("should get the agent's name", () => {
    expect(agent.name).not.to.be.empty;
  });

  behavesLikeAgent(agent);
});
