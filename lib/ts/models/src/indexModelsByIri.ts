import {Model} from "./Model";

export const indexModelsByIri = <ModelT extends Model>(
  models: readonly ModelT[]
): {[index: string]: ModelT} => {
  return models.reduce((map, model) => {
    for (const iri of model.iris) {
      map[iri] = model;
    }
    return map;
  }, {} as {[index: string]: ModelT});
};
