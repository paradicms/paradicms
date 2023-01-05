import * as React from "react";
import * as renderer from "react-test-renderer";
import {FormDataSummariesViewer} from "../components/FormDataSummariesViewer";
import {testFormDataFactory} from "../data/testFormDataFactory";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <FormDataSummariesViewer
        formDataSummaries={[testFormDataFactory().summary]}
        onSelectFormDataSummary={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
