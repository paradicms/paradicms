import * as React from "react";
import * as renderer from "react-test-renderer";
import {testForm} from "../testForm";
import {FormNodeTypeDataViewer} from "../../src";

test("renders correctly", () => {
  const formNodeType = testForm().nodeTypes[0];
  const tree = renderer
    .create(
      <FormNodeTypeDataViewer
        formNodeTypeData={formNodeType}
        onSelectFormNodeData={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
