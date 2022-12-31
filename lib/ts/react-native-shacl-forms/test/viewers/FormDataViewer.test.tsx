import * as React from "react";
import * as renderer from "react-test-renderer";
import {testFormDataFactory} from "../testFormDataFactory";
import {FormDataViewer} from "../../src";

test("renders correctly", () => {
  const form = testFormDataFactory();
  const tree = renderer
    .create(
      <FormDataViewer formData={form} onSelectFormNodeTypeData={() => {}} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
