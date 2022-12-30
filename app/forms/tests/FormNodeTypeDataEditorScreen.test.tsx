import * as React from "react";
import * as renderer from "react-test-renderer";
import {testAppFormDataFactory} from "../data/testAppFormDataFactory";
import {FormNodeTypeDataViewerScreen} from "../screens/FormNodeTypeDataViewerScreen";

test("renders correctly", () => {
  const formData = testAppFormDataFactory();
  const tree = renderer
    .create(
      <FormNodeTypeDataViewerScreen
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
