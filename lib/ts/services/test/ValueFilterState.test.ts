import {expect} from "chai";
import {ValueFilter, ValueFilterState} from "../src";

const emptyFilter = (): ValueFilter<string> => ({
  label: "Ignored",
  type: "StringPropertyValue",
});

describe("ValueFilterState", () => {
  const valueUniverse = ["test1", "test2", "test3"];
  let sut: ValueFilterState<string, ValueFilter<string>>;

  beforeEach(() => {
    sut = new ValueFilterState<string, ValueFilter<string>>({
      filter: emptyFilter(),
      valueUniverse,
    });
  });

  it("should reproduce the empty filter", () => {
    expect(sut.snapshot).to.deep.eq(emptyFilter());
  });

  it("should exclude all values known and unknown", () => {
    sut.excludeAll();
    const expected: ValueFilter<string> = {
      ...emptyFilter(),
      excludeKnown: true,
      excludeUnknown: true,
    };
    expect(sut.snapshot).to.deep.eq(expected);
  });

  it("should exclude unknown values", () => {
    sut.excludeUnknown();
    const expected: ValueFilter<string> = {
      ...emptyFilter(),
      excludeUnknown: true,
    };
    expect(sut.snapshot).to.deep.eq(expected);
  });

  it("should exclude all known values", () => {
    sut.excludeKnown();
    const expected: ValueFilter<string> = {
      ...emptyFilter(),
      excludeKnown: true,
    };
    expect(sut.snapshot).to.deep.eq(expected);
  });

  it("should exclude a specific value", () => {
    sut.excludeValue("test1");
    const expected: ValueFilter<string> = {
      ...emptyFilter(),
      excludeValues: ["test1"],
    };
    expect(sut.snapshot).to.deep.eq(expected);
  });

  it("should exclude multiple values implicitly", () => {
    sut.excludeValue("test1");
    sut.excludeValue("test2");
    const expected: ValueFilter<string> = {
      ...emptyFilter(),
      includeValues: ["test3"],
    };
    expect(sut.snapshot).to.deep.eq(expected);
  });

  it("should include a specific value", () => {
    // Must exclude values first, otherwise the include is a no-op
    sut.excludeKnown();
    sut.includeValue("test1");
    const expected: ValueFilter<string> = {
      ...emptyFilter(),
      includeValues: ["test1"],
    };
    expect(sut.snapshot).to.deep.eq(expected);
  });

  it("should include multiple values implicitly", () => {
    sut.excludeKnown();
    sut.includeValue("test1");
    sut.includeValue("test2");
    const expected: ValueFilter<string> = {
      ...emptyFilter(),
      excludeValues: ["test3"],
    };
    expect(sut.snapshot).to.deep.eq(expected);
  });

  it("should include a single value and all unknowns", () => {
    sut.excludeAll();
    sut.includeUnknown();
    sut.includeValue("test1");
    const expected: ValueFilter<string> = {
      ...emptyFilter(),
      // excludeUnknown: false,
      includeValues: ["test1"],
    };
    expect(sut.snapshot).to.deep.eq(expected);
  });
});
