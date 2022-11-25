import * as React from "react";
import * as renderer from "react-test-renderer";
import {testForm} from "../testForm";
import {FormNodeTypeViewer} from "../../src";

test("renders correctly", () => {
  const formNodeType = testForm().nodeTypes[0];
  const tree = renderer
    .create(
      <FormNodeTypeViewer
        formNodeType={formNodeType}
        onSelectFormNode={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
