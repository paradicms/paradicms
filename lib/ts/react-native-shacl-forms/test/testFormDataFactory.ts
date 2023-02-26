import {ShapesGraph} from "@paradicms/shacl";
import {datasetCoreToDataset} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {testShapesGraph, validTestDataGraph} from "@paradicms/test";
import {FormData, FormShape} from "@paradicms/shacl-forms";

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
