export const indexModelsByInstitutionUri = <T extends {institutionUri: string}>(
  models: readonly T[]
): {[index: string]: readonly T[]} => {
  return models.reduce((map: {[index: string]: T[]}, model: T) => {
    const models = map[model.institutionUri];
    if (!models) {
      map[model.institutionUri] = [model];
    } else {
      models.push(model);
    }
    return map;
  }, {});
};
