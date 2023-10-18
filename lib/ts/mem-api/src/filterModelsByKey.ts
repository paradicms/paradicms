export const filterModelsByKey = <ModelT extends {readonly key: string}>(kwds: {
  filter: IriFilter;
  models: readonly ModelT[];
}): readonly ModelT[] => {
  const {filter, models} = kwds;

  const excludeKeysSet: Set<string> = filter.excludeIris
    ? new Set(filter.excludeIris)
    : new Set();
  const includeKeysSet: Set<string> = filter.includeIris
    ? new Set(filter.includeIris)
    : new Set();

  return models.filter(model => {
    if (excludeKeysSet.size > 0 && excludeKeysSet.has(model.key)) {
      return false;
    }
    if (includeKeysSet.size > 0 && !includeKeysSet.has(model.key)) {
      return false;
    }
    return true;
  });
};
