import {expect} from "chai";
import {Agent} from "../src";
import {it} from "mocha";
import {behavesLikeModel} from "./behavesLikeModel";

export const behavesLikeAgent = (agent: Agent) => {
  it("should get the agent's images", () => {
    expect(agent.images).to.not.be.empty;
    expect(agent.thumbnail({targetDimensions: {height: 600, width: 600}})).to
      .not.be.null;
  });

  it("should get the agent's label", () => {
    expect(agent.label).to.not.be.empty;
  });

  it("should get the agent's page", () => {
    expect(agent.page).to.not.be.empty;
  });

  // it("should get the agent's Wikipedia URL", () => {
  //   expect(agent.wikipediaUrl).to.eq("http://en.wikipedia.org/wiki/Alan_Turing");
  // });
  // it("should get the agent's IRIs", () => {
  //   expect(agent.iris).to.not.be.empty;
  // });

  behavesLikeModel(agent);
};
