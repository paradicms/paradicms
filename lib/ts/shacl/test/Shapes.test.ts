import {expect} from "chai";
import {Shapes} from "../src";
import {testShapesTtl} from "./testShapesTtl";

describe("Shapes", () => {
  const sut = Shapes.parse(testShapesTtl);

  it("should parse the shapes correctly", () => {
    expect(sut).to.not.be.undefined;
    // expect(sut.images).to.not.be.empty;
    // expect(sut.originalImages).to.not.be.empty;
    // expect(sut.thumbnail({targetDimensions: {height: 600, width: 600}})).to.not
    //   .be.null;
  });
});
