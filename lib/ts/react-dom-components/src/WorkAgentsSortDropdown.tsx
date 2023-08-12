import {AgentsSort} from "@paradicms/api";
import React from "react";
import {SortDropdown} from "./SortDropdown";

const options: readonly AgentsSort[] = [
  {
    ascending: true,
    property: "name",
  },
  {ascending: false, property: "name"},
];

const sortToString = (sort: AgentsSort): string => {
  switch (sort.property) {
    case "name":
      if (sort.ascending) {
        return "Name (A-Z)";
      } else {
        return "Name (Z-A)";
      }
  }
};

export const WorkAgentsSortDropdown: React.FunctionComponent<{
  onChange: (sort: AgentsSort) => void;
  value: AgentsSort;
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
