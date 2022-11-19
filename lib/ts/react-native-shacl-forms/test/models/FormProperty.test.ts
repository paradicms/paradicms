import {testForm} from "./testForm";
import {FormNode} from "../../../shacl-forms/src/FormNode";
import {FormNodeType} from "../../../shacl-forms/src/FormNodeType";
import {FormProperty} from "../../src";
import {dash, schema} from "@paradicms/vocabularies";
import {expect} from "chai";
import {DataFactory} from "n3";

let birthDateProperty: FormProperty;
let givenNameProperty: FormProperty;
let node: FormNode;
let nodeType: FormNodeType;

beforeEach(() => {
  nodeType = testForm().nodeTypes.find(testNodeType =>
    testNodeType.rdfType.equals(schema.Person)
  )!;
  node = nodeType.nodes[0];
  birthDateProperty = node.properties.find(property_ =>
    property_.path.equals(schema.birthDate)
  )!;
  givenNameProperty = node.properties.find(property_ =>
    property_.path.equals(schema.givenName)
  )!;
});

test("schema:birthDate has a date picker editor", () => {
  const editor = birthDateProperty.editor;
  expect(editor).not.to.be.null;
  expect(editor!.equals(dash.DatePickerEditor)).to.be.true;
});

test("schema:givenName has a text field editor", () => {
  const editor = givenNameProperty.editor;
  expect(editor).not.to.be.null;
  expect(editor!.equals(dash.TextFieldEditor)).to.be.true;
});

test("expect path to have the right value", () => {
  expect(givenNameProperty.path.equals(schema.givenName)).to.be.true;
});

test("values to have a predetermined value", () => {
  expect(givenNameProperty.values).to.have.length(1);
  expect(givenNameProperty.values[0].equals(DataFactory.literal("Minor"))).to.be
    .true;
});
