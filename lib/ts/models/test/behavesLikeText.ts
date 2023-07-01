import {expect} from "chai";
import {Text} from "../src";
import {it} from "mocha";
import {behavesLikeModel} from "./behavesLikeModel";
import {behavesLikeRightsMixin} from "./behavesLikeRightsMixin";

export const behavesLikeText = (text: Text) => {
  it("should provide the value", () => {
    expect(text.value).to.not.be.empty;
  });

  behavesLikeModel(text);
  behavesLikeRightsMixin(text);
};
