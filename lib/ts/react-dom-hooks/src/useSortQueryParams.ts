import {Sort} from "@paradicms/api";
import {useCallback} from "react";
import {BooleanParam, StringParam, useQueryParam} from "use-query-params";

export const useSortQueryParams = <SortT extends Sort>(
  defaultSort: SortT,
  namePrefix: string
): [SortT, (sort: SortT | undefined) => void] => {
  const [ascending, setAscending] = useQueryParam<boolean | null | undefined>(
    namePrefix + "Ascending",
    BooleanParam
  );
  const [property, setProperty] = useQueryParam<string | null | undefined>(
    namePrefix + "Property",
    StringParam
  );

  const setSort = useCallback(
    (sort: SortT | undefined) => {
      if (sort) {
        setAscending(sort.ascending);
        setProperty(sort.property as string);
      } else {
        setAscending(undefined);
        setProperty(undefined);
      }
    },
    [setAscending, setProperty]
  );

  return [
    {
      ascending: ascending != null ? ascending : defaultSort.ascending,
      property: property != null ? property : defaultSort.property,
    } as SortT,
    setSort,
  ];
};
