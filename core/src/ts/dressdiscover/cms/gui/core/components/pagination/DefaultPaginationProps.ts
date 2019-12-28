export interface DefaultPaginationProps {
    currentPage: number;
    maxPage: number;
    onPageRequest: (page: number) => void;
}
