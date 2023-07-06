import {Model} from "./Model";
import {sortModelsArray} from "./sortModelsArray";

export const sortModelsMultimap = <ModelT extends Model>(models: {
  [index: string]: readonly ModelT[];
}): {[index: string]: readonly ModelT[]} => {
  const sortedModels: {[index: string]: readonly ModelT[]} = {};
  for (const key of Object.keys(models)) {
    sortedModels[key] = sortModelsArray(models[key]);
  }
  return sortedModels;
};
