import {expect} from "chai";
import {ShapesGraph} from "../src";
import {testShapesGraphTtl} from "./testShapesGraphTtl";
import {DataFactory} from "n3";
import {parseIntoDataset} from "@paradicms/rdf";

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
