import * as React from "react";
import * as renderer from "react-test-renderer";
import {FormErrorViewerScreen} from "../screens/FormErrorViewerScreen";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <FormErrorViewerScreen
        // @ts-ignore
        navigation={{push: jest.fn()}}
        // @ts-ignore
        route={{params: {error: "test"}}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
