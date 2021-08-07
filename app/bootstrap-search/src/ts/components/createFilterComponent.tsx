import * as React from "react";
import {FreetextFilterComponent} from "~/components/FreetextFilterComponent";
import {Filter} from "@paradicms/models";

export const createFilterComponent: (filter: Filter) => React.ReactElement = (
  filter
) => {
  switch (filter.type) {
    case "StringPropertyValue":
      
    case "freetext":
      return <FreetextFilterComponent filter={filter as FreetextFilter} />;
  }
};
