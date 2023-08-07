import {KeyFilter} from "@paradicms/api/dist/KeyFilter";

export const filterModelsByKey = <ModelT extends {readonly key: string}>(kwds: {
  filter: KeyFilter;
  models: readonly ModelT[];
}): readonly ModelT[] => {
  const {filter, models} = kwds;

  const excludeKeysSet: Set<string> = filter.excludeKeys
    ? new Set(filter.excludeKeys)
    : new Set();
  const includeKeysSet: Set<string> = filter.includeKeys
    ? new Set(filter.includeKeys)
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
