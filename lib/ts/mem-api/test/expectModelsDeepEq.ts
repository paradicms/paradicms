import {Model} from "@paradicms/models";
import {expectModelKeysDeepEq} from "./expectModelKeysDeepEq";

export const expectModelsDeepEq = <ModelT extends Model>(
  actualModels: readonly ModelT[],
  expectedModels: readonly ModelT[]
) =>
  expectModelKeysDeepEq(
    actualModels.map(model => model.key),
    expectedModels.map(model => model.key)
  );
