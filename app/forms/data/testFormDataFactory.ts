import {parseIntoDataset} from "@paradicms/rdf";
import {validTestDataGraphTtl} from "./validTestDataGraphTtl";
import {testFormShape} from "./testFormShape";
import {FormData} from "@paradicms/shacl-forms";

export const testFormDataFactory = () =>
  new FormData({
    dataGraph: parseIntoDataset(validTestDataGraphTtl),
    id: "test",
    label: "Test form data",
    shape: testFormShape,
  });
