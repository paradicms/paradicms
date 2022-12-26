import {parseIntoDataset} from "@paradicms/rdf";
import {validTestDataGraphTtl} from "./validTestDataGraphTtl";
import {testAppFormShape} from "./testAppFormShape";
import {AppFormData} from "../models/AppFormData";

export const testAppFormDataFactory = () =>
  new AppFormData({
    dataGraph: parseIntoDataset(validTestDataGraphTtl),
    id: "test",
    label: "Test form data",
    shape: testAppFormShape,
  });
