import {expect} from "chai";
import {describe} from "mocha";
import {imputeDateRangeEndpoint} from "../src/imputeDateRangeEndpoint";

describe("imputeDateRangeEndpoint", () => {
  it("should return the beginning of the year when only the year is specified", () => {
    const result = imputeDateRangeEndpoint({
      year: 2023,
    });
    expect(result).not.to.be.null;
    expect(result?.getUTCFullYear()).to.eq(2023);
    expect(result?.getUTCMonth()).to.eq(0);
    expect(result?.getUTCDate()).to.eq(1);
  });

  it("should return the beginning of the month when only the year and month is specified", () => {
    const result = imputeDateRangeEndpoint({
      year: 2023,
      month: 2,
    });
    expect(result).not.to.be.null;
    expect(result?.getUTCFullYear()).to.eq(2023);
    expect(result?.getUTCMonth()).to.eq(1);
    expect(result?.getUTCDate()).to.eq(1);
  });
});
