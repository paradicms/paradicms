import {Location} from "../src";
import {expect} from "chai";
import {it} from "mocha";

export const behavesLikeLocation = (location: Location) => {
  it("should have a valid centroid", () => {
    expect(location.centroid).not.to.be.null;
    expect(location.centroid!.latitude).not.to.be.null;
    expect(location.centroid!.latitude).not.to.eq(0);
    expect(location.centroid!.longitude).not.to.be.null;
    expect(location.centroid!.longitude).not.to.eq(0);
  });
};
