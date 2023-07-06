import {Model} from "./Model";

export const indexModelsByValues = <ModelT extends Model>(
  models: readonly ModelT[],
  modelValues: (model: ModelT) => readonly string[]
): {[index: string]: readonly ModelT[]} => {
  const modelsMultimap: {[index: string]: ModelT[]} = {};
  for (const model of models) {
    for (const modelValue of modelValues(model)) {
      const modelsWithValue = modelsMultimap[modelValue];
      if (modelsWithValue) {
        modelsWithValue.push(model);
      } else {
        modelsMultimap[modelValue] = [model];
      }
    }
  }
  return modelsMultimap;
};
