import * as React from "react";
import * as renderer from "react-test-renderer";
import {FormShapeSummariesViewerScreen} from "../screens/FormShapeSummariesViewerScreen";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <FormShapeSummariesViewerScreen
        // @ts-ignore
        navigation={{push: jest.fn()}}
        // @ts-ignore
        route={{}}
      />
    )
    .toJSON();
  expect(tree).toBeNull();
  // expect(tree).toMatchSnapshot();
});
