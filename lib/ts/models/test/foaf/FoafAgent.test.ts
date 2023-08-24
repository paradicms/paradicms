import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {describe, it} from "mocha";
import {FoafAgent} from "../../src/foaf/FoafAgent";
import {behavesLikeAgent} from "../behavesLikeAgent";
import {testModelSet} from "../testModelSet";

describe("FoafAgent", () => {
  const agent: FoafAgent = (requireNonNull(
    testModelSet.personByIri("http://example.com/person4")
  ) as any) as FoafAgent;

  before(() => {
    expect(agent).to.be.instanceof(FoafAgent);
  });

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
