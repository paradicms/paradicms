import * as React from "react";
import * as renderer from "react-test-renderer";
import {testFormShape} from "../data/testFormShape";
import {FormShapeSummariesViewer} from "../components/FormShapeSummariesViewer";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <FormShapeSummariesViewer
        formShapeSummaries={[testFormShape.summary]}
        onSelectFormShapeSummary={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
