import * as React from "react";
import * as renderer from "react-test-renderer";
import {testFormDataFactory} from "../testFormDataFactory";
import {schema} from "@paradicms/vocabularies";
import {TextInputFormPropertyDataEditor} from "../../src/editors/TextInputFormPropertyDataEditor";
import {FormPropertyData} from "@paradicms/shacl-forms";

test("renders correctly", () => {
  const formPropertyData = testFormDataFactory().nodeTypes[0].nodes[0].properties.find(
    (property: FormPropertyData) => property.path.equals(schema.givenName)
  )!;
  const tree = renderer
    .create(
      <TextInputFormPropertyDataEditor
        formPropertyData={formPropertyData}
        onChange={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
