import {Model} from "@paradicms/models";
import {expectModelIrisDeepEq} from "./expectModelIrisDeepEq";

export const expectModelsDeepEq = <ModelT extends Model>(
  actualModels: readonly ModelT[],
  expectedModels: readonly ModelT[]
) =>
  expectModelIrisDeepEq(
    actualModels.map(model => model.iri.value),
    expectedModels.map(model => model.iri.value)
  );
