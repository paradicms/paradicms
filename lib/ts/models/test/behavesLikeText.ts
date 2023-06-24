import {expect} from "chai";
import {Text} from "../src";
import {it} from "mocha";

export const behavesLikeText = (text: Text) => {
  it("should provide the value", () => {
    expect(text.value).to.not.be.empty;
  });

  it("should have a license", () => {
    const license = text.license;
    expect(license).to.not.be.null;
  });
};
