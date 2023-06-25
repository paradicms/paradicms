import {expect} from "chai";
import {Text} from "../src";
import {it} from "mocha";
import {behavesLikeModel} from "./behavesLikeModel";
import {behavesLikeRightsMixin} from "./behavesLikeRightsMixin";

export const behavesLikeText = (text: Text) => {
  it("should provide the value", () => {
    expect(text.value).to.not.be.empty;
  });

  it("should have a license", () => {
    const license = text.license;
    expect(license).to.not.be.null;
  });

  behavesLikeModel(text);
  behavesLikeRightsMixin(text);
};
