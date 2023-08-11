import {BooleanParam, StringParam, useQueryParam} from "use-query-params";
import {Sort} from "@paradicms/api";
import {useCallback} from "react";

export const useSortQueryParams = <PropertyT>(
  defaultSort: Sort<PropertyT>,
  namePrefix: string
): [Sort<PropertyT>, (sort: Sort<PropertyT> | undefined) => void] => {
  const [ascending, setAscending] = useQueryParam<boolean | null | undefined>(
    namePrefix + "Ascending",
    BooleanParam
  );
  const [property, setProperty] = useQueryParam<string | null | undefined>(
    namePrefix + "Property",
    StringParam
  );

  const setSort = useCallback(
    (sort: Sort<PropertyT> | undefined) => {
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
      property:
        property != null ? (property as PropertyT) : defaultSort.property,
    },
    setSort,
  ];
};
