import {Model} from "./Model";

export const sortModelsArray = <ModelT extends Model>(
  models: readonly ModelT[]
): readonly ModelT[] =>
  models.concat().sort((left, right) => left.key.localeCompare(right.key));
