import {ShapesGraph} from "@paradicms/shacl";
import {schema} from "@paradicms/vocabularies";
import {FormData, FormShape} from "../src";
import {testShapesGraph, validTestDataGraph} from "@paradicms/test";
import {datasetCoreToDataset} from "@paradicms/rdf";

export const testFormDataFactory = () =>
  new FormData({
    dataGraph: datasetCoreToDataset(validTestDataGraph),
    id: "test",
    label: "Test form data",
    shape: new FormShape({
      id: "test",
      label: "Test form shape",
      nodeRdfTypes: [schema.Person],
      shapesGraph: ShapesGraph.fromDatasetCore(testShapesGraph),
    }),
  });
