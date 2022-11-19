import {DataFactory, NamedNode} from "n3";
import {TermMap} from "../src/TermMap";
import {expect} from "chai";

describe("TermMap", () => {
  const key1 = DataFactory.namedNode("http://example.com/key1");
  const key2 = DataFactory.namedNode("http://example.com/key2");
  let sut: TermMap<NamedNode, number>;

  beforeEach(() => {
    sut = new TermMap();
  });

  it("should return entries", () => {
    expect(sut.entries).to.be.empty;
    sut.put(key1, 1);
    expect(sut.entries).to.have.length(1);
    expect(sut.entries[0].key.equals(key1)).to.be.true;
    sut.put(key2, 1);
    expect(sut.entries).to.have.length(2);
  });

  it("should return keys", () => {
    expect(sut.keys).to.be.empty;
    sut.put(key1, 1);
    expect(sut.keys).to.have.length(1);
    expect(sut.keys[0].equals(key1)).to.be.true;
    sut.put(key2, 1);
    expect(sut.keys).to.have.length(2);
  });

  it("should return a previously-put value", () => {
    sut.put(key1, 1);
    expect(sut.get(key1)).to.eq(1);
  });

  it("should return the second put value", () => {
    sut.put(key1, 1);
    expect(sut.get(key1)).to.eq(1);
    sut.put(key1, 2);
    expect(sut.get(key1)).to.eq(2);
  });

  it("should throw an exception when getting missing key", () => {
    expect(() => sut.get(key1)).to.throw(
      `missing termType=${key1.termType} value=${key1.value}`
    );
  });

  it("should return has = false for an absent key", () => {
    sut.put(key1, 1);
    expect(sut.has(key2)).to.be.false;
  });

  it("should return has = false for a present key", () => {
    sut.put(key1, 1);
    sut.put(key2, 2);
    expect(sut.has(key2)).to.be.true;
  });

  it("should return the size", () => {
    expect(sut.size).to.eq(0);
    sut.put(key1, 1);
    expect(sut.size).to.eq(1);
    sut.put(key2, 2);
    expect(sut.size).to.eq(2);
    sut.put(key2, 3);
    expect(sut.size).to.eq(2);
  });

  it("should return values", () => {
    sut.put(key1, 0);
    sut.put(key1, 1);
    sut.put(key2, 2);
    const values = sut.values;
    expect(values).to.have.length(2);
    expect(values).to.contain(1);
    expect(values).to.contain(2);
  });
});
