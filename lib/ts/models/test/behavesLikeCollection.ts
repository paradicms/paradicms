import {expect} from "chai";
import {it} from "mocha";
import {Collection, Text} from "../src";
import {behavesLikeModel} from "./behavesLikeModel";

export const behavesLikeCollection = (collection: Collection) => {
  it("should get the collection's description", () => {
    expect(collection.description).not.to.be.null;
    const description: Text = collection.description as Text;
    expect(description.value).to.not.be.empty;
  });

  it("should get the collection's label", () => {
    expect(collection.label).to.eq(collection.label);
  });

  it("should get the collection's works", () => {
    expect(collection.works).not.to.be.empty;
  });

  behavesLikeModel(collection);
};
