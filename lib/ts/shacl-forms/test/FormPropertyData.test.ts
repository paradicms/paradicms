import {testFormData} from "./testFormData";
import {dash, schema} from "@paradicms/vocabularies";
import {expect} from "chai";
import {DataFactory} from "@paradicms/rdf";
import {FormNodeData, FormNodeTypeData, FormPropertyData} from "../src";

describe("FormPropertyData", () => {
  let addressProperty: FormPropertyData;
  let birthDateProperty: FormPropertyData;
  let givenNameProperty: FormPropertyData;
  let node: FormNodeData;
  let nodeType: FormNodeTypeData;

  beforeEach(() => {
    nodeType = testFormData().nodeTypes.find(testNodeType =>
      testNodeType.rdfType.equals(schema.Person)
    )!;
    node = nodeType.nodes[0];
    addressProperty = node.properties.find(property_ =>
      property_.path.equals(schema.address)
    )!;
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

  it("schema:givenName should have a human-readable label", () => {
    expect(givenNameProperty.label).to.eq("given name");
  });

  it("schema:birthDate should fall back to a URI label", () => {
    expect(birthDateProperty.label).to.eq(schema.birthDate.value);
  });

  it("expect path to have the right value", () => {
    expect(givenNameProperty.path.equals(schema.givenName)).to.be.true;
  });

  it("values to have a predetermined value", () => {
    expect(givenNameProperty.values).to.have.length(1);
    expect(givenNameProperty.values[0].equals(DataFactory.literal("Minor"))).to
      .be.true;
  });

  it("set schema:givenName to a new value", () => {
    expect(givenNameProperty.values).to.have.length(1);
    expect(givenNameProperty.values[0].equals(DataFactory.literal("Minor"))).to
      .be.true;

    givenNameProperty.value = DataFactory.literal("MinorE");
    expect(givenNameProperty.values).to.have.length(1);
    expect(givenNameProperty.values[0].equals(DataFactory.literal("MinorE"))).to
      .be.true;
  });

  it("set schema:givenName to multiple new values", () => {
    expect(givenNameProperty.values).to.have.length(1);
    expect(givenNameProperty.values[0].equals(DataFactory.literal("Minor"))).to
      .be.true;

    givenNameProperty.values = [
      DataFactory.literal("MinorE"),
      DataFactory.literal("MinorX"),
    ];
    expect(givenNameProperty.values).to.have.length(2);
    expect(
      givenNameProperty.values.some(value =>
        value.equals(DataFactory.literal("MinorE"))
      )
    ).to.be.true;
    expect(
      givenNameProperty.values.some(value =>
        value.equals(DataFactory.literal("MinorX"))
      )
    ).to.be.true;
  });

  it("schema:address has a blank node viewer", () => {
    const viewer = addressProperty.viewer;
    expect(viewer).not.to.be.null;
    expect(viewer!.equals(dash.BlankNodeViewer)).to.be.true;
  });

  it("schema:givenName has a literal viewer", () => {
    const viewer = givenNameProperty.viewer;
    expect(viewer).not.to.be.null;
    expect(viewer!.equals(dash.LiteralViewer)).to.be.true;
  });
});
