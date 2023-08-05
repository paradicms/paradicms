import {WorkAgentsSort, WorkAgentsSortProperty} from "@paradicms/api";
import React from "react";
import {SortDropdown} from "./SortDropdown";

const options: readonly WorkAgentsSort[] = [
  {
    ascending: true,
    property: WorkAgentsSortProperty.NAME,
  },
  {ascending: false, property: WorkAgentsSortProperty.NAME},
];

const sortToString = (sort: WorkAgentsSort): string => {
  switch (sort.property) {
    case WorkAgentsSortProperty.NAME:
      if (sort.ascending) {
        return "Name (A-Z)";
      } else {
        return "Name (Z-A)";
      }
  }
};

export const WorkAgentsSortDropdown: React.FunctionComponent<{
  onChange: (sort: WorkAgentsSort) => void;
  value: WorkAgentsSort;
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
