import {Model} from "./Model";

export const indexModelsByKey = <ModelT extends Model>(
  models: readonly ModelT[]
): {[index: string]: ModelT} => {
  return models.reduce((map, model) => {
    map[model.key] = model;
    return map;
  }, {} as {[index: string]: ModelT});
};
