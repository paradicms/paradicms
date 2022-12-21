import * as React from "react";
import * as renderer from "react-test-renderer";
import {testForm} from "../testForm";
import {schema} from "@paradicms/vocabularies";
import {TextInputFormPropertyDataEditor} from "../../src/editors";
import {FormProperty} from "@paradicms/shacl-forms";

test("renders correctly", () => {
  const formProperty = testForm().nodeTypes[0].nodes[0].properties.find(
    (property: FormProperty) => property.path.equals(schema.givenName)
  )!;
  const tree = renderer
    .create(
      <TextInputFormPropertyDataEditor
        formPropertyData={formProperty}
        onChange={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
