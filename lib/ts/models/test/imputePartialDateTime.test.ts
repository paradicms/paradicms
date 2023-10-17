import {expect} from "chai";
import {describe} from "mocha";
import {imputePartialDateTime} from "../src/imputePartialDateTime";

describe("imputePartialDateTime", () => {
  it("should return null when the year is null", () => {
    const result = imputePartialDateTime({
      year: null,
      month: null,
      day: null,
      hour: null,
      minute: null,
      second: null,
    });
    expect(result).to.be.null;
  });

  it("should return the beginning of the year when only the year is specified", () => {
    const result = imputePartialDateTime({
      year: 2023,
      month: null,
      day: null,
      hour: null,
      minute: null,
      second: null,
    });
    expect(result).not.to.be.null;
    expect(result?.getUTCFullYear()).to.eq(2023);
    expect(result?.getUTCMonth()).to.eq(0);
    expect(result?.getUTCDate()).to.eq(1);
  });

  it("should return the beginning of the month when only the year and month is specified", () => {
    const result = imputePartialDateTime({
      year: 2023,
      month: 2,
      day: null,
      hour: null,
      minute: null,
      second: null,
    });
    expect(result).not.to.be.null;
    expect(result?.getUTCFullYear()).to.eq(2023);
    expect(result?.getUTCMonth()).to.eq(1);
    expect(result?.getUTCDate()).to.eq(1);
  });
});
