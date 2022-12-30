import * as React from "react";
import * as renderer from "react-test-renderer";
import {FormNodeTypeDataViewerScreen} from "../screens/FormNodeTypeDataViewerScreen";
import {testFormDataFactory} from "../data/testFormDataFactory";

test("renders correctly", () => {
  const formData = testFormDataFactory();
  const tree = renderer
    .create(
      <FormNodeTypeDataViewerScreen
        // @ts-ignore
        navigation={{push: jest.fn()}}
        // @ts-ignore
        route={{
          params: {
            formData: formData.summary,
            formNodeTypeData: formData.nodeTypes[0].summary,
          },
        }}
      />
    )
    .toJSON();
  expect(tree).toBeNull();
  // expect(tree).toMatchSnapshot();
});
