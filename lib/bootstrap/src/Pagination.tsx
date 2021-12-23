import * as React from "react";
import {
  Pagination as ReactstrapPagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

export const Pagination: React.FunctionComponent<{
  count: number; // 1-based
  firstPageText?: React.ReactNode;
  lastPageText?: React.ReactNode;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  nextPageText?: React.ReactNode;
  page: number; // 1-based;
  previousPageText?: React.ReactNode;
}> = ({
  count,
  firstPageText,
  lastPageText,
  nextPageText,
  onChange,
  page,
  previousPageText,
}) => (
  <ReactstrapPagination>
    <PaginationItem>
      <PaginationLink first onClick={event => onChange(event, 1)}>
        {firstPageText ?? "«"}
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink
        disabled={page === 1}
        previous
        onClick={event => onChange(event, page - 1)}
      >
        {previousPageText ?? "‹"}
      </PaginationLink>
    </PaginationItem>
    {[...Array(count).keys()].map(arrayIndex => (
      <PaginationItem active={arrayIndex + 1 === page} key={arrayIndex}>
        <PaginationLink onClick={event => onChange(event, arrayIndex + 1)}>
          {arrayIndex + 1}
        </PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem>
      <PaginationLink
        disabled={page + 1 > count}
        next
        onClick={event => onChange(event, page + 1)}
      >
        {nextPageText ?? "›"}
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink last onClick={event => onChange(event, count)}>
        {lastPageText ?? "»"}
      </PaginationLink>
    </PaginationItem>
  </ReactstrapPagination>
);
