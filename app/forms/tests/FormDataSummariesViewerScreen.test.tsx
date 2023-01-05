import * as React from "react";
import * as renderer from "react-test-renderer";
import {FormDataSummariesViewerScreen} from "../screens/FormDataSummariesViewerScreen";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <FormDataSummariesViewerScreen
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
