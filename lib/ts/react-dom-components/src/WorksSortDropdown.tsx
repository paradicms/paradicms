import {WorksSort, WorksSortProperty} from "@paradicms/services";
import React from "react";
import {SortDropdown} from "./SortDropdown";

const options: readonly WorksSort[] = [
  {
    ascending: true,
    property: WorksSortProperty.LABEL,
  },
  {ascending: false, property: WorksSortProperty.LABEL},
  {
    ascending: false,
    property: WorksSortProperty.RELEVANCE,
  },
];

const sortToString = (sort: WorksSort): string => {
  switch (sort.property) {
    case WorksSortProperty.LABEL:
      if (sort.ascending) {
        return "Title (A-Z)";
      } else {
        return "Title (Z-A)";
      }
    case WorksSortProperty.RELEVANCE:
      return "Relevance";
  }
};

export const WorksSortDropdown: React.FunctionComponent<{
  onChange: (sort: WorksSort) => void;
  value: WorksSort;
}> = ({onChange, value}) => {
  return (
    <SortDropdown
      onChange={onChange}
      options={options}
      sortToString={sortToString}
      value={value}
    />
  );
};
