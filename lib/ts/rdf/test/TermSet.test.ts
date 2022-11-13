import {DataFactory, NamedNode} from "n3";
import {expect} from "chai";
import {TermSet} from "../src/TermSet";

describe("TermSet", () => {
  const key1 = DataFactory.namedNode("http://example.com/key1");
  const key2 = DataFactory.namedNode("http://example.com/key2");
  let sut: TermSet<NamedNode>;

  beforeEach(() => {
    sut = new TermSet();
  });

  it("should add a key", () => {
    expect(sut.add(key1)).to.be.true;
  });

  it("should ignore a second add of the same key", () => {
    expect(sut.add(key1)).to.be.true;
    expect(sut.add(key1)).to.be.false;
  });

  it("should return has = false for an absent key", () => {
    sut.add(key1);
    expect(sut.has(key2)).to.be.false;
  });

  it("should return has = false for a present key", () => {
    sut.add(key1);
    sut.add(key2);
    expect(sut.has(key2)).to.be.true;
  });

  it("should return both keys in values", () => {
    sut.add(key1);
    sut.add(key2);
    const values = sut.values;
    expect(values).to.have.length(2);
    expect(values.some(value => value.equals(key1))).to.be.true;
    expect(values.some(value => value.equals(key2))).to.be.true;
  });
});
