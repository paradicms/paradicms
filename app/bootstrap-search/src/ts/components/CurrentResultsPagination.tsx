import {CurrentQueryStore} from "~/stores/CurrentQueryStore";
import React, {useCallback} from "react";
import PaginationComponent from "react-reactstrap-pagination";

export const CurrentResultsPagination: React.FunctionComponent = () => {
  const currentQuery = CurrentQueryStore.useState(
    (state) => state.currentQuery,
  );
  const currentResult = CurrentResultsStore.useState(
    (state) => state.currentResult,
  );

  const onChangePage = useCallback((page: number) => {
    CurrentQueryStore.update((state) => {
      state.currentQuery.offset = page * state.currentQuery.limit;
    });
  }, []);

  if (currentResults.objects.length === 0) {
    return null;
  }

  return (
    <PaginationComponent
      defaultActivePage={
        Math.floor(currentQuery.offset / currentQuery.limit) + 1
      }
      firstPageText="«"
      lastPageText="»"
      nextPageText="›"
      pageSize={10}
      previousPageText="‹"
      onSelect={(page) => onChangePage(page - 1)}
      totalItems={currentResults.totalObjectsCount}
    />
  );
};
