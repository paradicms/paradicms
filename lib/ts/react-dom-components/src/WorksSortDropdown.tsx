import {WorksSort, WorksSortProperty} from "@paradicms/services";
import React from "react";
import {SortDropdown} from "./SortDropdown";

const options: readonly WorksSort[] = [
  {
    ascending: false,
    property: WorksSortProperty.RELEVANCE,
  },
  {
    ascending: true,
    property: WorksSortProperty.TITLE,
  },
  {ascending: false, property: WorksSortProperty.TITLE},
];

const sortToString = (sort: WorksSort): string => {
  switch (sort.property) {
    case WorksSortProperty.RELEVANCE:
      return "Relevance";
    case WorksSortProperty.TITLE:
      if (sort.ascending) {
        return "Title (A-Z)";
      } else {
        return "Title (Z-A)";
      }
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
