import * as React from "react";
import {Filter} from "~/models/Filter";
import {FreetextFilterComponent} from "~/components/FreetextFilterComponent";
import {FreetextFilter} from "~/models/FreetextFilter";

export const createFilterComponent: (filter: Filter) => React.ReactElement = (
  filter
) => {
  switch (filter.type) {
    case "freetext":
      return <FreetextFilterComponent filter={filter as FreetextFilter} />;
  }
};
