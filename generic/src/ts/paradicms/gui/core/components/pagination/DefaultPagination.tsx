import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import * as React from "react";
import {DefaultPaginationProps} from "paradicms/gui/generic/components/pagination/DefaultPaginationProps";
import * as _ from "lodash";

const PAGINATION_ITEMS_COUNT_LEFT = 5;
const PAGINATION_ITEMS_COUNT_RIGHT = 5;

export const DefaultPagination: React.FunctionComponent<DefaultPaginationProps> = ({currentPage, maxPage, onPageRequest}) => (
    <Pagination listClassName="justify-content-center" size="md">
        <PaginationItem disabled={currentPage === 0}>
            <PaginationLink first onClick={() => onPageRequest(0)}/>
        </PaginationItem>
        <PaginationItem disabled={currentPage === 0}>
            <PaginationLink previous onClick={() => onPageRequest(currentPage - 1)}/>
        </PaginationItem>
        {currentPage > 0 ? _.range(currentPage - 1, (currentPage - PAGINATION_ITEMS_COUNT_LEFT >= 0 ? currentPage - PAGINATION_ITEMS_COUNT_LEFT : 0) - 1, -1).reverse().map(page =>
                <PaginationItem key={page}>
                    <PaginationLink onClick={() => onPageRequest(page)}>{page + 1}</PaginationLink>
                </PaginationItem>)
            : null}
        <PaginationItem active>
            <PaginationLink href="#">{currentPage + 1}</PaginationLink>
        </PaginationItem>
        {currentPage + 1 <= maxPage ? _.range(currentPage + 1, (currentPage + PAGINATION_ITEMS_COUNT_RIGHT <= maxPage ? currentPage + PAGINATION_ITEMS_COUNT_RIGHT : maxPage) + 1).map(page =>
                <PaginationItem key={page}>
                    <PaginationLink onClick={() => onPageRequest(page)}>{page + 1}</PaginationLink>
                </PaginationItem>)
            : null}
        <PaginationItem disabled={currentPage === maxPage}>
            <PaginationLink next onClick={() => onPageRequest(currentPage + 1)}/>
        </PaginationItem>
        <PaginationItem disabled={currentPage === maxPage}>
            <PaginationLink last onClick={() => onPageRequest(maxPage)}/>
        </PaginationItem>
    </Pagination>);
