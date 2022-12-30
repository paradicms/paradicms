import * as React from "react";
import * as renderer from "react-test-renderer";
import {testAppFormDataFactory} from "../data/testAppFormDataFactory";
import {AppFormDataSummary} from "../models/AppFormDataSummary";
import {FormDataSummariesViewer} from "../components/FormDataSummariesViewer";

test("renders correctly", () => {
  const testAppFormData = testAppFormDataFactory();
  const formDataSummaries: readonly AppFormDataSummary[] = [
    {id: testAppFormData.id, label: testAppFormData.label},
  ];
  const tree = renderer
    .create(
      <FormDataSummariesViewer
        formDataSummaries={formDataSummaries}
        onSelectFormDataSummary={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
