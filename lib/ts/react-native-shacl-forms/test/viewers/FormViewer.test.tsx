import * as React from "react";
import * as renderer from "react-test-renderer";
import {testForm} from "../testForm";
import {FormViewer} from "../../src";

test("renders correctly", () => {
  const form = testForm();
  const tree = renderer
    .create(<FormViewer form={form} onSelectFormNodeType={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
