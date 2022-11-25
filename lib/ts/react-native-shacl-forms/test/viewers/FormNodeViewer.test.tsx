import * as React from "react";
import * as renderer from "react-test-renderer";
import {testForm} from "../testForm";
import {FormNodeViewer} from "../../src/viewers/FormNodeViewer";

test("renders correctly", () => {
  const formNode = testForm().nodeTypes[0].nodes[0];
  const tree = renderer.create(<FormNodeViewer formNode={formNode} />).toJSON();
  expect(tree).toMatchSnapshot();
});
