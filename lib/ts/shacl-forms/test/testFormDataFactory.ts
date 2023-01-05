import {ShapesGraph} from "@paradicms/shacl";
import {parseIntoDataset} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {FormData, FormShape} from "../src";
import {testShapesGraphTtl, validTestDataGraphTtl} from "@paradicms/test";

export const testFormDataFactory = () =>
  new FormData({
    dataGraph: parseIntoDataset(validTestDataGraphTtl),
    id: "test",
    label: "Test form data",
    shape: new FormShape({
      id: "test",
      label: "Test form shape",
      nodeRdfTypes: [schema.Person],
      shapesGraph: new ShapesGraph(parseIntoDataset(testShapesGraphTtl)),
    }),
  });
