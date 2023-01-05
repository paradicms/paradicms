import * as React from "react";
import * as renderer from "react-test-renderer";
import {testFormDataFactory} from "../data/testFormDataFactory";
import {FormNodeDataEditorScreen} from "../screens/FormNodeDataEditorScreen";

test("renders correctly", () => {
  const formData = testFormDataFactory();
  const tree = renderer
    .create(
      <FormNodeDataEditorScreen
        // @ts-ignore
        navigation={{push: jest.fn()}}
        // @ts-ignore
        route={{
          params: {
            formData: formData.summary,
            formNodeData: formData.nodeTypes[0].nodes[0].summary,
            formNodeTypeData: formData.nodeTypes[0].summary,
          },
        }}
      />
    )
    .toJSON();
  expect(tree).toBeNull();
  // expect(tree).toMatchSnapshot();
});
