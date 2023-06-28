import {expect} from "chai";
import {Agent} from "../src";
import {it} from "mocha";
import {behavesLikeModel} from "./behavesLikeModel";
import {behavesLikeImagesMixin} from "./behavesLikeImagesMixin";

export const behavesLikeAgent = (agent: Agent) => {
  it("should get the agent's homepage", () => {
    expect(agent.homepage).to.not.be.empty;
  });

  it("should get the agent's label", () => {
    expect(agent.label).to.not.be.empty;
  });

  // it("should get the agent's Wikipedia URL", () => {
  //   expect(agent.wikipediaUrl).to.eq("http://en.wikipedia.org/wiki/Alan_Turing");
  // });
  // it("should get the agent's IRIs", () => {
  //   expect(agent.iris).to.not.be.empty;
  // });

  behavesLikeModel(agent);
  behavesLikeImagesMixin(agent);
};
