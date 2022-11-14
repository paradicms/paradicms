import {Form} from "../../src/models/Form";
import {validTestDataGraphTtl} from "../validTestDataGraphTtl";
import {ShapesGraph} from "@paradicms/shacl";
import {testShapesGraphTtl} from "../testShapesGraphTtl";
import {DataFactory} from "n3";
import {parseIntoDataset} from "@paradicms/rdf";

export const testForm = () =>
  new Form({
    dataGraph: parseIntoDataset(validTestDataGraphTtl),
    nodeRdfTypes: [DataFactory.namedNode("http://schema.org/Person")],
    shapesGraph: new ShapesGraph(parseIntoDataset(testShapesGraphTtl)),
  });
