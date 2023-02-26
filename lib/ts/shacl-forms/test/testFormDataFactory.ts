import {ShapesGraph} from "@paradicms/shacl";
import {schema} from "@paradicms/vocabularies";
import {FormData, FormShape} from "../src";
import {testShapesGraph, validTestDataGraph} from "@paradicms/test";
import {copyDataset, datasetCoreToDataset} from "@paradicms/rdf";

export const testFormDataFactory = () =>
  new FormData({
    dataGraph: copyDataset(datasetCoreToDataset(validTestDataGraph)),
    id: "test",
    label: "Test form data",
    shape: new FormShape({
      id: "test",
      label: "Test form shape",
      nodeRdfTypes: [schema.Person],
      shapesGraph: ShapesGraph.fromDatasetCore(testShapesGraph),
    }),
  });
