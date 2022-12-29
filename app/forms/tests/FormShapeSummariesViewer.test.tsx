import * as React from "react";
import * as renderer from "react-test-renderer";
import {testAppFormShape} from "../data/testAppFormShape";
import {AppFormShapeSummary} from "../models/AppFormShapeSummary";
import {FormShapeSummariesViewer} from "../components/FormShapeSummariesViewer";

test("renders correctly", () => {
  const formShapeSummaries: readonly AppFormShapeSummary[] = [
    {id: testAppFormShape.id, label: testAppFormShape.label},
  ];
  const tree = renderer
    .create(
      <FormShapeSummariesViewer
        formShapeSummaries={formShapeSummaries}
        onSelectFormShapeSummary={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
