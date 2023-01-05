import {expect} from "chai";
import {DataFactory} from "@paradicms/rdf";
import {testFormDataFactory} from "./testFormDataFactory";
import {schema} from "@paradicms/vocabularies";
import {FormNodeTypeData} from "../src";

describe("FormNodeTypeData", () => {
  let sut: FormNodeTypeData;

  beforeEach(() => {
    sut = testFormDataFactory().nodeTypes[0];
  });

  it("has expected rdf type", () => {
    expect(sut.rdfType.equals(schema.Person)).to.be.true;
  });

  it("has one existing node", () => {
    expect(sut.nodes).to.have.length(1);
  });

  it("add a node and have two nodes", () => {
    sut.addNode(DataFactory.namedNode("urn:example:JohnDoe"));
    expect(sut.nodes).to.have.length(2);
  });

  it("add a node twice and still have two nodes", () => {
    sut.addNode(DataFactory.namedNode("urn:example:JohnDoe"));
    expect(sut.nodes).to.have.length(2);
    sut.addNode(DataFactory.namedNode("urn:example:JohnDoe"));
    expect(sut.nodes).to.have.length(2);
  });
});
