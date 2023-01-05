import * as React from "react";
import * as renderer from "react-test-renderer";
import {FormDataViewerScreen} from "../screens/FormDataViewerScreen";
import {testFormDataFactory} from "../data/testFormDataFactory";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <FormDataViewerScreen
        // @ts-ignore
        navigation={{push: jest.fn()}}
        // @ts-ignore
        route={{params: {formData: testFormDataFactory().summary}}}
      />
    )
    .toJSON();
  expect(tree).toBeNull();
  // expect(tree).toMatchSnapshot();
});
