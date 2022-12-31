import * as React from "react";
import * as renderer from "react-test-renderer";
import {testFormDataFactory} from "../testFormDataFactory";
import {FormNodeTypeDataViewer} from "../../src";

test("renders correctly", () => {
  const formNodeType = testFormDataFactory().nodeTypes[0];
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
