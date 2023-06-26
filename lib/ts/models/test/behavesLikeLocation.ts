import {Location} from "../src";
import {expect} from "chai";
import {it} from "mocha";

export const behavesLikeLocation = (location: Location) => {
  it("should have a non-zero latitude", () => {
    expect(location.latitude).not.to.be.null;
    expect(location.latitude).not.to.eq(0);
  });

  it("should have a non-zero longitude", () => {
    expect(location.longitude).not.to.be.null;
    expect(location.longitude).not.to.eq(0);
  });
};
