import {parseIntoDataset} from "@paradicms/rdf";
import {validTestDataGraphTtl} from "./validTestDataGraphTtl";
import {testNamedFormShape} from "./testNamedFormShape";
import {NamedFormData} from "../models/NamedFormData";

export const testNamedFormData = () =>
  new NamedFormData({
    dataGraph: parseIntoDataset(validTestDataGraphTtl),
    id: "test",
    label: "Test form data",
    shape: testNamedFormShape,
  });
