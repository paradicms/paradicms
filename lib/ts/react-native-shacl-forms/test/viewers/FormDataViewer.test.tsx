import * as React from "react";
import * as renderer from "react-test-renderer";
import {testFormData} from "../testFormData";
import {FormDataViewer} from "../../src";

test("renders correctly", () => {
  const form = testFormData();
  const tree = renderer
    .create(
      <FormDataViewer formData={form} onSelectFormNodeTypeData={() => {}} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
