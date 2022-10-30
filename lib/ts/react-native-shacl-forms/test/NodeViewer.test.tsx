import * as React from "react";
import * as renderer from "react-test-renderer";
import {NodeViewer} from "../src/NodeViewer";
import {expect} from "@jest/globals";

test("renders correctly", () => {
  const tree = renderer.create(<NodeViewer />).toJSON();
  expect(tree).toMatchSnapshot();
});
