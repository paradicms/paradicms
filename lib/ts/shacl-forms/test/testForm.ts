import {ShapesGraph} from "@paradicms/shacl";
import {parseIntoDataset} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {Form} from "../src";
import {testShapesGraphTtl, validTestDataGraphTtl} from "@paradicms/test";

export const testForm = () =>
  new Form({
    dataGraph: parseIntoDataset(validTestDataGraphTtl),
    nodeRdfTypes: [schema.Person],
    shapesGraph: new ShapesGraph(parseIntoDataset(testShapesGraphTtl)),
  });
