import {expect} from "chai";

export const expectModelIrisDeepEq = (
  actualModelKeys: readonly string[],
  expectedModelKeys: readonly string[]
) =>
  expect(actualModelKeys.concat().sort()).to.deep.eq(
    expectedModelKeys.concat().sort()
  );
