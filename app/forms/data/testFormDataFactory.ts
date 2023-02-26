import {copyDataset, datasetCoreToDataset} from "@paradicms/rdf";
import {testFormShape} from "./testFormShape";
import {FormData} from "@paradicms/shacl-forms";
import {validTestDataGraph} from "@paradicms/test";

export const testFormDataFactory = () =>
  new FormData({
    dataGraph: copyDataset(datasetCoreToDataset(validTestDataGraph)),
    id: "test",
    label: "Test form data",
    shape: testFormShape,
  });
