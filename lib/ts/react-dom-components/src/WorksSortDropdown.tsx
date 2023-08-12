import {WorksSort} from "@paradicms/api";
import React from "react";
import {SortDropdown} from "./SortDropdown";

const options: readonly WorksSort[] = [
  {
    ascending: true,
    property: "label",
  },
  {ascending: false, property: "label"},
  {
    ascending: false,
    property: "relevance",
  },
];

const sortToString = (sort: WorksSort): string => {
  switch (sort.property) {
    case "label":
      if (sort.ascending) {
        return "Title (A-Z)";
      } else {
        return "Title (Z-A)";
      }
    case "relevance":
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
