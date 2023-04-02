import {BooleanParam, StringParam, useQueryParam} from "use-query-params";
import {Sort} from "@paradicms/services/dist/Sort";
import {useCallback} from "react";

export const useSortQueryParams = <PropertyT>(
  defaultSort: Sort<PropertyT>,
  namePrefix: string
): [Sort<PropertyT>, (sort: Sort<PropertyT> | undefined) => void] => {
  const [descending, setDescending] = useQueryParam<boolean | null | undefined>(
    namePrefix + "Descending",
    BooleanParam
  );
  const [property, setProperty] = useQueryParam<string | null | undefined>(
    namePrefix + "Property",
    StringParam
  );
  const setSort = useCallback(
    (sort: Sort<PropertyT> | undefined) => {
      if (sort) {
        setDescending(!sort.ascending ? true : undefined);
        setProperty(sort.property as string);
      } else {
        setDescending(undefined);
        setProperty(undefined);
      }
    },
    [setDescending, setProperty]
  );

  return [
    {
      ascending: descending != null ? !descending : defaultSort.ascending,
      property:
        property != null ? (property as PropertyT) : defaultSort.property,
    },
    setSort,
  ];
};
