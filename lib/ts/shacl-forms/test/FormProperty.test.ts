import {testForm} from "./testForm";
import {dash, schema} from "@paradicms/vocabularies";
import {expect} from "chai";
import {DataFactory} from "@paradicms/rdf";
import {FormNode, FormNodeType, FormProperty} from "../src";

describe("FormProperty", () => {
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

  it("schema:birthDate has a date picker editor", () => {
    const editor = birthDateProperty.editor;
    expect(editor).not.to.be.null;
    expect(editor!.equals(dash.DatePickerEditor)).to.be.true;
  });

  it("schema:givenName has a text field editor", () => {
    const editor = givenNameProperty.editor;
    expect(editor).not.to.be.null;
    expect(editor!.equals(dash.TextFieldEditor)).to.be.true;
  });

  it("expect path to have the right value", () => {
    expect(givenNameProperty.path.equals(schema.givenName)).to.be.true;
  });

  it("values to have a predetermined value", () => {
    expect(givenNameProperty.values).to.have.length(1);
    expect(givenNameProperty.values[0].equals(DataFactory.literal("Minor"))).to
      .be.true;
  });
});
