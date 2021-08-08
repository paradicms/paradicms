import {Filter, StringPropertyValueFilter} from "@paradicms/models";
import * as React from "react";
import {ValueFilterBadges} from "./ValueFilterBadges";

export const FiltersBadges: React.FunctionComponent<{
  filters: readonly Filter[];
}> = ({filters}) => {
  return (
    <>
      {filters.map((filter, filterI) => {
        switch (filter.type) {
          case "StringPropertyValue": {
            return (
              <ValueFilterBadges
                filter={filter as StringPropertyValueFilter}
                key={filterI}
              />
            );
          }
        }
      })}
    </>
  );
};
