import {Model} from "@paradicms/models";
import {GetModelsResult} from "@paradicms/api";
import invariant from "ts-invariant";
import {ModelSetBuilder} from "./ModelSetBuilder";

/**
 * Code reused by most get* implementations.
 */
export const getModels = <ModelT extends Model>(kwds: {
  addModelsToModelSet: (
    models: readonly ModelT[],
    modelSetBuilder: ModelSetBuilder
  ) => void;
  allModels: readonly ModelT[];
  filterModels: (models: readonly ModelT[]) => readonly ModelT[];
  limit: number;
  offset: number;
  sortModels: (models: ModelT[]) => void;
}): Promise<GetModelsResult> => {
  const {
    allModels,
    filterModels,
    limit,
    offset,
    sortModels,
    addModelsToModelSet,
  } = kwds;

  invariant(limit > 0, "limit must be > 0");
  invariant(offset >= 0, "offset must be >= 0");

  return new Promise(resolve => {
    const filteredModels = filterModels(allModels);

    const sortedModels = filteredModels.concat();
    sortModels(sortedModels);

    const slicedModels = sortedModels.slice(offset, offset + limit);

    const modelSetBuilder = new ModelSetBuilder();
    addModelsToModelSet(slicedModels, modelSetBuilder);

    resolve({
      modelKeys: slicedModels.map(model => model.key),
      modelSet: modelSetBuilder.build(),
      totalModelsCount: filteredModels.length,
    });
  });
};
