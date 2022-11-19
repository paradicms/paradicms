import * as React from "react";
import * as renderer from "react-test-renderer";
import {testForm} from "../testForm";
import {schema} from "@paradicms/vocabularies";
import {TextFieldEditor} from "../../src/editors";
import {FormProperty} from "@paradicms/shacl-forms";

test("renders correctly", () => {
  const formProperty = testForm().nodeTypes[0].nodes[0].properties.find(
    (property: FormProperty) => property.path.equals(schema.givenName)
  )!;
  const tree = renderer
    .create(<TextFieldEditor formProperty={formProperty} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
