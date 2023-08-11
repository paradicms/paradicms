import {Model} from "@paradicms/models";
import {GetModelKeysResult} from "@paradicms/api";
import invariant from "ts-invariant";

/**
 * Code reused by most get*Keys implementations.
 */
export const getModelKeys = <ModelT extends Model>(kwds: {
  allModels: readonly ModelT[];
  filterModels: (models: readonly ModelT[]) => readonly ModelT[];
  limit: number;
  offset: number;
  sortModels: (models: ModelT[]) => void;
}): Promise<GetModelKeysResult> => {
  const {allModels, filterModels, limit, offset, sortModels} = kwds;

  invariant(limit > 0, "limit must be > 0");
  invariant(offset >= 0, "offset must be >= 0");

  return new Promise(resolve => {
    const filteredModels = filterModels(allModels);

    const sortedModels = filteredModels.concat();
    sortModels(sortedModels);

    const slicedModels = sortedModels.slice(offset, offset + limit);

    resolve({
      modelKeys: slicedModels.map(model => model.key),
      totalModelsCount: filteredModels.length,
    });
  });
};
