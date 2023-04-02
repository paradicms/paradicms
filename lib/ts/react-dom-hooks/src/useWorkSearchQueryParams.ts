import {useWorkQueryParam} from "./useWorkQueryParam";
import {
  Filter,
  WorkAgentsSort,
  WorkEventsSort,
  WorksQuery,
  WorksSort,
} from "@paradicms/services";
import {usePageQueryParam} from "./usePageQueryParam";

export const useWorkSearchQueryParams = (defaultWorkQuery: {
  filters: readonly Filter[];
}): {
  onChangeFilters: (filters: readonly Filter[]) => void;
  onSearch: (text: string) => void;
  setWorkQuery: (workQuery: WorksQuery) => void;
  setWorkAgentsPage: (page: number | undefined) => void;
  setWorkAgentsSort: (sort: WorkAgentsSort | undefined) => void;
  setWorkEventsPage: (page: number | undefined) => void;
  setWorkEventsSort: (sort: WorkEventsSort | undefined) => void;
  setWorksPage: (page: number | undefined) => void;
  setWorksSort: (sort: WorksSort | undefined) => void;
  workAgentsPage: number;
  workEventsPage: number;
  // workEventsSortProperty: string;
  workQuery: WorksQuery;
  worksPage: number;
  worksSort: WorksSort;
} => {
  const [workAgentsPage, setWorkAgentsPage] = usePageQueryParam(
    "workAgentsPage"
  );
  const [workEventsPage, setWorkEventsPage] = usePageQueryParam(
    "workEventsPage"
  );
  const [worksPage, setWorksPage] = usePageQueryParam("worksPage");

  const [workQuery, setWorkQuery] = useWorkQueryParam(
    defaultWorkQuery,
    "query"
  );

  return {
    onChangeFilters: filters => {
      setWorkAgentsPage(undefined);
      setWorkEventsPage(undefined);
      setWorksPage(undefined);
      setWorkQuery({...workQuery, filters});
    },
    onSearch: text => {
      setWorkAgentsPage(undefined);
      setWorkEventsPage(undefined);
      setWorksPage(undefined);
      setWorkQuery({filters: [], text});
    },
    setWorkAgentsPage,
    setWorkEventsPage,
    setWorkQuery,
    setWorksPage,
    workAgentsPage,
    workEventsPage,
    workQuery,
    worksPage,
  };
};
