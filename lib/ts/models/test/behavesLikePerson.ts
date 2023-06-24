import {expect} from "chai";
import {Person} from "../src";
import {it} from "mocha";
import {behavesLikeAgent} from "./behavesLikeAgent";

export const behavesLikePerson = (person: Person) => {
  it("should get the person's family name", () => {
    expect(person.familyName).to.not.be.empty;
  });

  it("should get the person's given name", () => {
    expect(person.givenName).to.not.be.empty;
  });

  behavesLikeAgent(person);
};
