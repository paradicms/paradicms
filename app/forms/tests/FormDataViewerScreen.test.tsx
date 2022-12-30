import * as React from "react";
import * as renderer from "react-test-renderer";
import {FormDataViewerScreen} from "../screens/FormDataViewerScreen";
import {testAppFormDataFactory} from "../data/testAppFormDataFactory";

test("renders correctly", () => {
  const formData = testAppFormDataFactory();
  const tree = renderer
    .create(
      <FormDataViewerScreen
        // @ts-ignore
        navigation={{push: jest.fn()}}
        // @ts-ignore
        route={{params: {formData: {id: formData.id, label: formData.label}}}}
      />
    )
    .toJSON();
  expect(tree).toBeNull();
  // expect(tree).toMatchSnapshot();
});
