export const indexModelsByUri = <T extends {uri: string}>(
  models: readonly T[]
): {[index: string]: T} => {
  return models.reduce((map, model) => {
    map[model.uri] = model;
    return map;
  }, {} as {[index: string]: T});
};
