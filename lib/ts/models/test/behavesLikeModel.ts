import {Store} from "@paradicms/rdf";
import {expect} from "chai";
import {it} from "mocha";
import {Model} from "../src";

export const behavesLikeModel = (model: Model) => {
  it("should convert to RDF", () => {
    const store = new Store();
    model.toRdf(store);
    expect(store.size).to.be.gt(0);
  });
};
