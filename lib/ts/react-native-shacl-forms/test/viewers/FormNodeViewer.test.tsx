import * as React from "react";
import * as renderer from "react-test-renderer";
import {FormNodeViewer} from "../../src/viewers/FormNodeViewer";
import {expect} from "@jest/globals";

test("renders correctly", () => {
  const tree = renderer.create(<FormNodeViewer />).toJSON();
  expect(tree).toMatchSnapshot();
});
