import {IriFilter} from "@paradicms/api";
import {NamedNode} from "@rdfjs/types";

export const filterModelsByIri = <
  ModelT extends {readonly iri: NamedNode}
>(kwds: {
  filter: IriFilter;
  models: readonly ModelT[];
}): readonly ModelT[] => {
  const {filter, models} = kwds;

  const excludeIrisSet: Set<string> = filter.excludeIris
    ? new Set(filter.excludeIris)
    : new Set();
  const includeIrisSet: Set<string> = filter.includeIris
    ? new Set(filter.includeIris)
    : new Set();

  return models.filter(model => {
    if (excludeIrisSet.size > 0 && excludeIrisSet.has(model.iri.value)) {
      return false;
    }
    if (includeIrisSet.size > 0 && !includeIrisSet.has(model.iri.value)) {
      return false;
    }
    return true;
  });
};
