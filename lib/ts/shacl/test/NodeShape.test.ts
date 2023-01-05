import {expect} from "chai";
import {ShapesGraph} from "../src";
import {DataFactory, parseIntoDataset} from "@paradicms/rdf";
import {testShapesGraphTtl} from "@paradicms/test";

describe("Shapes", () => {
  let shapes: ShapesGraph;

  before(() => {
    shapes = new ShapesGraph(parseIntoDataset(testShapesGraphTtl));
  });

  it("should have properties", () => {
    {
      const personNodeShape = shapes.nodeShapeByNode(
        DataFactory.namedNode("http://schema.org/PersonShape")
      );
      expect(personNodeShape.properties).have.length(4);
    }
    {
      const addressNodeShape = shapes.nodeShapeByNode(
        DataFactory.namedNode("http://schema.org/AddressShape")
      );
      expect(addressNodeShape.properties).to.have.length(2);
    }
  });
});
