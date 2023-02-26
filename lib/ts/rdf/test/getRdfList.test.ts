import {stringToDataset} from "../src";
import {DataFactory} from "n3";
import {getRdfList} from "../src/getRdfList";
import {BlankNode, NamedNode} from "@rdfjs/types";
import {expect} from "chai";

describe("getRdfList", () => {
  const subject = DataFactory.namedNode("urn:example:subject");
  const predicate = DataFactory.namedNode("urn:example:predicate");

  const parseAndReadRdfList = (ttl: string) => {
    const dataset = stringToDataset(ttl);
    return getRdfList({
      dataset,
      node: dataset.match(subject, predicate, null, null).toArray()[0]
        .object as BlankNode | NamedNode,
    });
  };

  it("should read an empty list", () => {
    expect(parseAndReadRdfList(`<${subject.value}> <${predicate.value}> ( ) .`))
      .to.be.empty;
  });

  it("should read a list with one literal", () => {
    const list = parseAndReadRdfList(
      `<${subject.value}> <${predicate.value}> ( "test" ) .`
    );
    expect(list).to.have.length(1);
    expect(list[0].value).to.eq("test");
  });

  it("should read a list with two literals", () => {
    const list = parseAndReadRdfList(
      `<${subject.value}> <${predicate.value}> ( "test" "test2" ) .`
    );
    expect(list).to.have.length(2);
    expect(list[0].value).to.eq("test");
    expect(list[1].value).to.eq("test2");
  });

  it("should read a list with blank nodes", () => {
    expect(
      parseAndReadRdfList(
        `<${subject.value}> <${predicate.value}> ( [ ] [ ] ) .`
      )
    ).to.have.length(2);
  });
});
