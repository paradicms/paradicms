import {Model} from "./Model";

export const indexModelsByIri = <ModelT extends Model>(
  models: readonly ModelT[]
): {[index: string]: ModelT} => {
  return models.reduce((map, model) => {
    map[model.iri.value] = model;
    return map;
  }, {} as {[index: string]: ModelT});
};
