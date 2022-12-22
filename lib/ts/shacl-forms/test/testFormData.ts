import {ShapesGraph} from "@paradicms/shacl";
import {parseIntoDataset} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {FormData, FormShape} from "../src";
import {testShapesGraphTtl, validTestDataGraphTtl} from "@paradicms/test";

export const testFormData = () =>
  new FormData({
    dataGraph: parseIntoDataset(validTestDataGraphTtl),
    shape: new FormShape({
      nodeRdfTypes: [schema.Person],
      shapesGraph: new ShapesGraph(parseIntoDataset(testShapesGraphTtl)),
    }),
  });
